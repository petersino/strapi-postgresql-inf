module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'carcajadas'),
      user: env('DATABASE_USERNAME', 'peterson'),
      password: env('DATABASE_PASSWORD', 'peterson140296'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
