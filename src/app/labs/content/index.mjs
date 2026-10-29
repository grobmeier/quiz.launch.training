export { lab, commandText, labRoot } from './lab.mjs';
import { queues } from './queues.mjs';
import { publishSubscribe } from './publish-subscribe.mjs';
import { failureHandling } from './failure-handling.mjs';
export const stations = [queues, publishSubscribe, failureHandling];
export const stationUrl = (station) => `/labs/artemis-messaging/${station.id}/`;
