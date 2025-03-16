import "dotenv/config";

export class EnvConfig {
  static DB_NAME = process.env.DB_NAME;
  static DB_USER = process.env.DB_HOST;
  static DB_PWD = process.env.DB_PWD;
  static DB_HOST = process.env.DB_HOST;
  static DB_PORT = process.env.DB_PORT;
}

