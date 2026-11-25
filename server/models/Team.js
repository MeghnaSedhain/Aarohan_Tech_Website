import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      enum: ['Leadership', 'Engineering'],
      required: true,
    },
    specialty: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    linkedin: {
      type: String,
      default: '#',
    },
    github: {
      type: String,
      default: '#',
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
