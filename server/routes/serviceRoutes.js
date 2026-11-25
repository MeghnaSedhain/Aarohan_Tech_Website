import express from 'express';
import { Service } from '../models/Service.js';
import { initialServices } from '../data/initialData.js';
import mongoose from 'mongoose';

const router = express.Router();

// GET /api/services
router.get('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      let services = await Service.find().sort({ order: 1 });
      if (services.length === 0) {
        services = await Service.insertMany(initialServices);
      }
      return res.json({ success: true, count: services.length, data: services });
    } else {
      return res.json({ success: true, count: initialServices.length, data: initialServices });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
