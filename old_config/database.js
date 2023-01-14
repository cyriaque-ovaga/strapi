var ma_config = {};
if (process.env.branche) {
  ma_config = {
    client: "mysql",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  };
} else {
  ma_config = {
    client: "sqlite",
    filename: ".tmp/datasz.db",
  };
}

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: ma_config,
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
