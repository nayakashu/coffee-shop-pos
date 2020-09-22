import { NODE_ENV } from '../../libs/environments';

const home = (_, res) => {
  res.json({
    service: 'Coffee Shop PoC',
    version: '1.0',
    environment: NODE_ENV,
  });
};

export default home;
