import path from 'path';

module.exports = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5433,
    user: 'postgres',
    password: 'docker',
    database: 'proffy',
  },
  migrations: {
    directory: path.resolve(
      __dirname,
      'src',
      'shared',
      'infra',
      'database',
      'migrations',
    ),
  },
};
