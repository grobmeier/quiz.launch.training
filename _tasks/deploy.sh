#!/bin/sh

npm run build

BUCKET=s3://quiz.launch.training
STANDARD="--delete --region eu-west-1"
aws s3 sync out/ ${BUCKET} --cache-control "max-age=60" ${STANDARD}

aws configure set preview.cloudfront true

INVALIDATION_ID=$(date +"%s")
INVALIDATION_JSON="{
    \"DistributionId\": \"E3L1GO5KCNCT7W\",
    \"InvalidationBatch\": {
        \"Paths\": {
            \"Quantity\": 1,
            \"Items\": [
                \"/*\"
            ]
        },
        \"CallerReference\": \"$INVALIDATION_ID\"
    }
}"

aws cloudfront create-invalidation --cli-input-json "$INVALIDATION_JSON"
