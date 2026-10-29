export { lab, commandText, labRoot } from './lab.mjs';
import { queues } from './queues.mjs';
export const stations = [queues];
export const stationUrl = (station) => `/labs/artemis-messaging/${station.id}/`;
