const path = require("path");

if (process.env.branche == "master") {
  ma_config = {
    client: "mysql",
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    },
    debug: false,
  };
} else {
  ma_config = {
    client: "sqlite",
    connection: {
      filename: path.join(__dirname, "..", ".tmp/data.db"),
    },
    useNullAsDefault: true,
  };
}

module.exports = ({ env }) => ({
  connection: ma_config,
});
