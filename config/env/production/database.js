module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", env("DATABASE_HOST")),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", env("DATABASE_NAME")),
        username: env("DATABASE_USERNAME", env("DATABASE_USERNAME")),
        password: env("DATABASE_PASSWORD", env("DATABASE_PASSWORD")),
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
        },
      },
      options: {
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  },
});
