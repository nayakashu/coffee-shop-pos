import { ENV_NAME } from '../../libs/environments';

const home = (_, res) => {
  res.json({
    service: 'Coffee Shop PoC',
    version: '1.0',
    environment: ENV_NAME,
  });
};

export default home;
