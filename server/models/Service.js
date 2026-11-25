import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    fullDescription: {
      type: String,
      required: true,
    },
    iconType: {
      type: String,
      enum: ['code', 'globe', 'cpu', 'cloud', 'shield', 'layers', 'video', 'bot', 'trending', 'building', 'users', 'zap'],
      default: 'code',
    },
    features: [{ type: String }],
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);
