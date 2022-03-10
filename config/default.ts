import { resolve } from 'path';

const SOURCE_PATH = resolve(__dirname, '..');

export default {
  database: {
    url: 'postgres://app:app@localhost/locations',
  },
  orm: {
    entities: [`${SOURCE_PATH}/**/*.entity{.ts,.js}`],
    synchronize: false,
  },
  public: {
    path: resolve(__dirname, '..', 'public'),
  },
  templates: {
    path: resolve(__dirname, '..', 'views'),
  },
};
