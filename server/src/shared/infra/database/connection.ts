import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5433,
    user: 'postgres',
    password: 'docker',
    database: 'proffy',
  },
});

export default db;
