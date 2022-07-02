module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST' , 'DATABASE_HOST'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME','DATABASE_NAME'),
        username: env('DATABASE_USERNAME','DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD','DATABASE_PASSWORD'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
