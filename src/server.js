import cors from 'cors';
import express from 'express';
import { DEVELOPMENT, ENV_NAME, PORT } from './libs/environments';
import routes from './routes';
import home from './routes/home/home';

const app = express();

const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));

// To mimic a delay in development environment
if (ENV_NAME === DEVELOPMENT) {
  app.use((req, res, next) => setTimeout(next, 500));
}

app.use('/api', routes);
app.use('/', home);

const server = app.listen(PORT || 8080, () => {
  const port = server.address().port;
  console.info(`Coffee Shop server is listening on port ${port}`);
});
