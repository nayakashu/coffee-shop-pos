export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';

export const ENV_NAME = process.env.ENV_NAME || DEVELOPMENT;

if (ENV_NAME === DEVELOPMENT) {
  require('dotenv').config({ silent: true });
}

export const PORT = process.env.PORT;
