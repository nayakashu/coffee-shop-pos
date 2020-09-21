import express from 'express';
import { PORT } from './libs/environments';
import routes from './routes';
import home from './routes/home/home';

const app = express();

app.use('/api', routes);
app.use('/', home);

const server = app.listen(PORT || 8080, () => {
  const port = server.address().port;
  console.info(`Coffee Shop server is listening on port ${port}`);
});
