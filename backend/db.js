import Database from 'better-sqlite3';

const db = new Database('garbageday.sqlite');

db.exec(`
  CREATE TABLE IF NOT EXISTS signups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    postal_code TEXT NOT NULL,
    consent INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

export function normalizePostalCode(value = '') {
  return value.toUpperCase().replace(/\s+/g, '');
}

export const findPostalCode = db.prepare(`
  SELECT COUNT(*) AS count
  FROM signups
  WHERE postal_code = ?
`);

export const insertSignup = db.prepare(`
  INSERT INTO signups (name, email, address, city, postal_code, consent)
  VALUES (?, ?, ?, ?, ?, ?)
`);

export const listSignups = db.prepare(`
  SELECT id, name, email, address, city, postal_code, consent, created_at
  FROM signups
  ORDER BY created_at DESC
`);

export default db;
