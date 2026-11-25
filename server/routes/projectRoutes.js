import express from 'express';
import { Project } from '../models/Project.js';
import { initialProjects } from '../data/initialData.js';
import mongoose from 'mongoose';

const router = express.Router();

// GET /api/projects - Optionally filter by category
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;

    if (mongoose.connection.readyState === 1) {
      let filter = {};
      if (category && category !== 'All') {
        filter.category = category;
      }
      let projects = await Project.find(filter).sort({ createdAt: -1 });
      if (projects.length === 0 && (!category || category === 'All')) {
        projects = await Project.insertMany(initialProjects);
      }
      return res.json({ success: true, count: projects.length, data: projects });
    } else {
      let projects = initialProjects;
      if (category && category !== 'All') {
        projects = projects.filter((p) => p.category === category);
      }
      return res.json({ success: true, count: projects.length, data: projects });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
