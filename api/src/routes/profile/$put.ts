import type { Request, Response } from 'express';
import initDB from '../../db';

const dbPromise = initDB();

export default async function $put(req: Request, res: Response) {
  const { username, email, phone, id } = req.body;
  const db = await dbPromise;

  const exists = await db.get('SELECT COUNT(*) AS count FROM profiles WHERE id = ?', id);
  if (exists.count > 0) {
    await db.run('UPDATE profiles SET username = ?, email = ?, phone = ? WHERE id = ?', username, email, phone, id);
  } else {
    await db.run('INSERT INTO profiles (username, email, phone) VALUES (?, ?, ?)', username, email, phone);
  }

  return res.json({ message: 'Profile saved successfully' });
}
