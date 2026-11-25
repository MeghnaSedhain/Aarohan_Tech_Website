import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
      maxlength: [80, 'Name cannot exceed 80 characters'],
    },
    company: {
      type: String,
      trim: true,
      default: 'Independent Client',
    },
    role: {
      type: String,
      trim: true,
      default: 'Client',
    },
    rating: {
      type: Number,
      required: [true, 'Please provide a star rating'],
      min: 1,
      max: 5,
      default: 5,
    },
    projectType: {
      type: String,
      default: 'AI & Software Development',
    },
    comment: {
      type: String,
      required: [true, 'Please provide a review comment'],
      maxlength: [1200, 'Comment cannot exceed 1200 characters'],
    },
    verified: {
      type: Boolean,
      default: true,
    },
    avatar: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

export const Review = mongoose.model('Review', reviewSchema);
