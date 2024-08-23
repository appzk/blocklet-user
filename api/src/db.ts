// src/db.ts
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

async function initDB(): Promise<Database<sqlite3.Database, sqlite3.Statement>> {
  const db = await open({
    filename: path.resolve(__dirname, 'profile.db'),
    driver: sqlite3.Database,
  });

  // 创建表格
  await db.exec(`
        CREATE TABLE IF NOT EXISTS profiles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL
        )
    `);

  return db;
}

export default initDB;
