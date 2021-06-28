import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  url: process.env.DB_URL || 'postgres://postgres:postgres@localhost:5432/ho-xy-dev',
  entities: ['dist/**/**.entity{.ts,.js}'],
  synchronize: false,
  migrations: [
    'dist/db/migrations/*.js'
  ],
  cli: {
    migrationsDir: 'src/db/migrations'
  }
}

export default config;
