import * as dotenv from 'dotenv';
dotenv.config();

export const dbConfig = {
    client:'mysql2',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      port: 3306,
      user: process.env.DB_USER || 'your_database_user',
      password: process.env.DB_PASSOWORD || 'your_database_password',
      database: process.env.DB_NAME || 'myapp_test',
    },
  };

