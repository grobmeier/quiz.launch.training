FROM node:alpine3.18 as dependencies

WORKDIR /root/build

COPY . .

RUN npm install

ENTRYPOINT ["sh", "-c", "_tasks/deploy.sh"]
