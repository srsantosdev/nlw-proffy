import 'reflect-metadata';
import express from 'express';
import ora from 'ora';
import cors from 'cors';

import routes from './routes';
import '@shared/container';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(3333, () => {
  const spinner = ora('Server starting...').start();
  spinner.color = 'blue';

  setTimeout(() => {
    spinner.text = 'Server executing on port 3333!';
    spinner.succeed();
  }, 1000);
});
