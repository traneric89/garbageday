import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { findPostalCode, insertSignup, listSignups, normalizePostalCode } from './db.js';

const app = express();
const port = Number(process.env.PORT || 3001);
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: corsOrigin }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/api/signups', (_req, res) => {
  const rows = listSignups.all();
  res.json({ success: true, signups: rows });
});

app.post('/api/signups', (req, res) => {
  const { name, email, address, city, postalCode, consent } = req.body;

  if (!name || !email || !address || !city || !postalCode || !consent) {
    return res.status(400).json({
      success: false,
      message: 'Please complete all required fields and accept the email consent checkbox.'
    });
  }

  const normalizedPostalCode = normalizePostalCode(postalCode);
  const existing = findPostalCode.get(normalizedPostalCode);

  insertSignup.run(
    name.trim(),
    email.trim().toLowerCase(),
    address.trim(),
    city.trim(),
    normalizedPostalCode,
    consent ? 1 : 0
  );

  return res.json({
    success: true,
    postalCodeMatch: existing.count > 0,
    message: existing.count > 0
      ? 'Thanks for signing up. We already have another signup in your postal code, so your area may already be active in our system.'
      : 'Thanks for signing up. Your reminder request has been received and your area information has been saved.'
  });
});

app.listen(port, () => {
  console.log(`GarbageDay backend running on http://localhost:${port}`);
});
