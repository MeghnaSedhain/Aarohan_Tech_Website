import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    client: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['AI & Automation', 'Cloud & Architecture', 'Web & Mobile', 'Enterprise Software'],
    },
    description: {
      type: String,
      required: true,
    },
    tags: [{ type: String }],
    gradient: {
      type: String,
      default: 'from-blue-600 to-indigo-600',
    },
    impact: {
      type: String,
      default: '3x Efficiency',
    },
    featured: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
