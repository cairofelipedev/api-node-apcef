
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', process.env.DB_HOST),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', process.env.DB_DB),
        username: env('DATABASE_USERNAME', process.env.DB_USER),
        password: env('DATABASE_PASSWORD', process.env.DB_PASSWORD),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
