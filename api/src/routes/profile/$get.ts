import type { Request, Response } from 'express';
import initDB from '../../db';

const dbPromise = initDB();

export default async function $get(req: Request, res: Response) {
  try {
    const { did = 1 } = req.params;
    const db = await dbPromise;
    const row = await db.get('SELECT * FROM profiles WHERE id = ?', did);
    if (row) {
      return res.json({ profile: row });
    }
    return res.status(404).json({ message: 'Profile not found' });
  } catch (error) {
    if (error.message.includes('404')) {
      return res.json({ profile: {} });
    }
    console.error(error);
    return res.status(400).send(error.message);
  }
}
