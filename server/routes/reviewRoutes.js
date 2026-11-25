import express from 'express';
import { Review } from '../models/Review.js';
import { initialReviews } from '../data/initialData.js';
import mongoose from 'mongoose';

const router = express.Router();

// In-memory fallback if MongoDB connection is pending
let memoryReviews = [...initialReviews];

// Helper to compute review stats
const calculateStats = (reviews) => {
  const total = reviews.length;
  if (total === 0) {
    return {
      average: 5.0,
      total: 0,
      counts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
    };
  }

  const sum = reviews.reduce((acc, r) => acc + (Number(r.rating) || 5), 0);
  const average = Number((sum / total).toFixed(1));

  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((r) => {
    const star = Math.min(5, Math.max(1, Math.round(Number(r.rating) || 5)));
    counts[star] = (counts[star] || 0) + 1;
  });

  return { average, total, counts };
};

// GET /api/reviews - List all customer reviews with stats
router.get('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      let reviews = await Review.find().sort({ createdAt: -1 });

      // Seed initial reviews if empty
      if (reviews.length === 0) {
        reviews = await Review.insertMany(initialReviews);
      }

      const stats = calculateStats(reviews);
      return res.json({
        success: true,
        count: reviews.length,
        stats,
        data: reviews,
      });
    } else {
      const stats = calculateStats(memoryReviews);
      return res.json({
        success: true,
        count: memoryReviews.length,
        stats,
        data: memoryReviews,
      });
    }
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/reviews - Customer submits a review
router.post('/', async (req, res) => {
  try {
    const { name, company, role, rating, projectType, comment } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Please provide your full name' });
    }

    if (!comment || !comment.trim()) {
      return res.status(400).json({ success: false, error: 'Please provide your review feedback' });
    }

    const numericRating = Math.min(5, Math.max(1, Number(rating) || 5));

    const reviewPayload = {
      name: name.trim(),
      company: company ? company.trim() : 'Independent Client',
      role: role ? role.trim() : 'Client',
      rating: numericRating,
      projectType: projectType || 'AI & Software Development',
      comment: comment.trim(),
      verified: true,
      avatar: '',
    };

    if (mongoose.connection.readyState === 1) {
      const newReview = await Review.create(reviewPayload);
      return res.status(201).json({
        success: true,
        message: 'Review submitted successfully! Thank you for your feedback.',
        data: newReview,
      });
    } else {
      const mockReview = {
        _id: 'rev_' + Date.now(),
        ...reviewPayload,
        createdAt: new Date().toISOString(),
      };
      memoryReviews.unshift(mockReview);
      return res.status(201).json({
        success: true,
        message: 'Review submitted successfully (local store)!',
        data: mockReview,
      });
    }
  } catch (error) {
    console.error('Error submitting review:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
