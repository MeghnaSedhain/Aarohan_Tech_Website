import express from 'express';
import { Newsletter } from '../models/Newsletter.js';
import mongoose from 'mongoose';

const router = express.Router();
const inMemorySubscribers = new Set();

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, error: 'Valid email is required.' });
    }

    if (mongoose.connection.readyState === 1) {
      const existing = await Newsletter.findOne({ email });
      if (existing) {
        return res.json({ success: true, message: 'You are already subscribed to Aarohan Technology updates!' });
      }
      await Newsletter.create({ email });
      return res.status(201).json({ success: true, message: 'Thank you for subscribing to Aarohan Technology insights!' });
    } else {
      inMemorySubscribers.add(email);
      return res.status(201).json({ success: true, message: 'Thank you for subscribing to Aarohan Technology insights!' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
