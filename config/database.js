module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '${{ secrets.HOST }}'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', '${{ secrets.DB }}'),
        username: env('DATABASE_USERNAME', '${{ secrets.USER }}'),
        password: env('DATABASE_PASSWORD', '${{ secrets.PASSWORD }}'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
