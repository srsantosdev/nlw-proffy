import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import ora from 'ora';
import cors from 'cors';

import AppError from '@shared/errors/AppError';

import routes from './routes';
import '@shared/container';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.use(
  (error: Error, _request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error.',
    });
  },
);

app.listen(3333, () => {
  const spinner = ora('Server starting...').start();
  spinner.color = 'blue';

  setTimeout(() => {
    spinner.text = 'Server executing on port 3333!';
    spinner.succeed();
  }, 1000);
});
