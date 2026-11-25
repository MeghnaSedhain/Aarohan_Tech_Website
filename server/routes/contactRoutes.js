import express from 'express';
import { Contact } from '../models/Contact.js';
import mongoose from 'mongoose';

const router = express.Router();

// In-memory fallback if database is disconnected
const inMemoryContacts = [];

// POST /api/contact - Submit new project inquiry
router.post('/', async (req, res) => {
  try {
    const { fullName, email, phone, service, budget, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Full name, email, and project details are required.',
      });
    }

    if (mongoose.connection.readyState === 1) {
      const newContact = await Contact.create({
        fullName,
        email,
        phone,
        service: service || 'Software Development',
        budget: budget || 'Undisclosed',
        message,
      });

      return res.status(201).json({
        success: true,
        message: 'Your inquiry has been received! Our engineering team will contact you shortly.',
        data: newContact,
      });
    } else {
      // In-memory fallback
      const mockContact = {
        _id: 'mock_' + Date.now(),
        fullName,
        email,
        phone,
        service: service || 'Software Development',
        budget: budget || 'Undisclosed',
        message,
        status: 'new',
        createdAt: new Date().toISOString(),
      };
      inMemoryContacts.unshift(mockContact);

      return res.status(201).json({
        success: true,
        message: 'Your inquiry has been received! (Stored in active session)',
        data: mockContact,
      });
    }
  } catch (error) {
    console.error('Error submitting contact inquiry:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error processing your inquiry.',
    });
  }
});

// GET /api/contact - List all inquiries
router.get('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: contacts.length, data: contacts });
    } else {
      return res.json({ success: true, count: inMemoryContacts.length, data: inMemoryContacts });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PATCH /api/contact/:id - Update inquiry status
router.patch('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    if (mongoose.connection.readyState === 1) {
      const updated = await Contact.findByIdAndUpdate(req.params.id, { status }, { new: true });
      return res.json({ success: true, data: updated });
    } else {
      const item = inMemoryContacts.find((c) => c._id === req.params.id);
      if (item) item.status = status;
      return res.json({ success: true, data: item });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
