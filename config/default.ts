import { resolve } from 'path';

const DIST_SOURCE_PATH = resolve(__dirname, '..', 'dist');

export default {
  database: {
    url: 'postgres://app:app@localhost/locations',
  },
  orm: {
    entities: [`${DIST_SOURCE_PATH}/src/location/location.entity.js`],
    synchronize: false,
  },
  public: {
    path: resolve(__dirname, '..', 'public'),
  },
  templates: {
    path: resolve(__dirname, '..', 'views'),
  },
};
