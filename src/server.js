import cors from 'cors';
import express from 'express';
import path from 'path';
import { DEVELOPMENT, NODE_ENV, PORT } from './libs/environments';
import routes from './routes';

const app = express();

const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));

// To mimic a delay in development environment
if (NODE_ENV === DEVELOPMENT) {
  app.use((req, res, next) => setTimeout(next, 500));
}

app.use('/api', routes);

// Serve static assets in production
if (NODE_ENV === 'production') {
  // Set static folder
  const root = path.join(__dirname, 'client');

  app.use(express.static(root));
  app.get('*', (req, res) => res.sendFile('index.html', { root }));
}

const server = app.listen(PORT || 8080, () => {
  const port = server.address().port;
  console.info(`Coffee Shop server is listening on port ${port}`);
});
