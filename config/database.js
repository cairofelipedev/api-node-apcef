module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'us-cdbr-east-05.cleardb.net'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'heroku_387e213c674345e'),
        username: env('DATABASE_USERNAME', 'baa04af02a844e'),
        password: env('DATABASE_PASSWORD', '1be146fa'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
