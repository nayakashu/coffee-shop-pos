import allEnv from './env-vars';

export const environment = (() => {
  try {
    const envName = process.env.NODE_ENV;
    if (envName !== 'production')
      console.log(`Running in environment: ${envName}`);
    return allEnv[envName];
  } catch (e) {
    console.log('Missing Config', e);
  }
})();
