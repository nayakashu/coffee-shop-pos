export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';

export const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === DEVELOPMENT) {
  require('dotenv').config({ silent: true });
}

export const PORT = process.env.PORT;
