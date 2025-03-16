import { DataSource } from "typeorm";
import { EnvConfig } from "./env.config";

const AppDataSource = new DataSource({
  type: "mysql",
  host: EnvConfig.DB_HOST,
  port: EnvConfig.DB_PORT,
  username: EnvConfig.DB_USER,
  password: EnvConfig.DB_PWD,
  database: EnvConfig.DB_NAME,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export { AppDataSource };
