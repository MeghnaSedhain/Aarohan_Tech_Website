import express from 'express';
import { Team } from '../models/Team.js';
import { initialTeam } from '../data/initialData.js';
import mongoose from 'mongoose';

const router = express.Router();

// GET /api/team - List team members (supports ?department=Leadership or Engineering)
router.get('/', async (req, res) => {
  try {
    const { department } = req.query;

    if (mongoose.connection.readyState === 1) {
      let filter = {};
      if (department && department !== 'All') {
        filter.department = department;
      }
      let team = await Team.find(filter).sort({ order: 1 });
      if (team.length === 0 && (!department || department === 'All')) {
        team = await Team.insertMany(initialTeam);
      }
      return res.json({ success: true, count: team.length, data: team });
    } else {
      let team = initialTeam;
      if (department && department !== 'All') {
        team = team.filter((m) => m.department === department);
      }
      return res.json({ success: true, count: team.length, data: team });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/team - Add new team member
router.post('/', async (req, res) => {
  try {
    const { name, role, department, specialty, bio, image, email, linkedin, github } = req.body;
    if (!name || !role) {
      return res.status(400).json({ success: false, error: 'Name and role are required' });
    }

    if (mongoose.connection.readyState === 1) {
      const newMember = await Team.create({
        name,
        role,
        department: department || 'Engineering',
        specialty,
        bio,
        image,
        email,
        linkedin,
        github,
      });
      return res.status(201).json({ success: true, data: newMember });
    } else {
      const mock = { _id: 'mock_' + Date.now(), name, role, department, specialty, bio, image };
      return res.status(201).json({ success: true, data: mock });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PATCH /api/team/:id - Update member
router.patch('/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const updated = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.json({ success: true, data: updated });
    } else {
      return res.json({ success: true, message: 'Updated in local session' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
