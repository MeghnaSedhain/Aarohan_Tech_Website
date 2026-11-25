import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    phone: {
      type: String,
      trim: true,
      default: '',
    },
    service: {
      type: String,
      default: 'Software Development',
      trim: true,
    },
    budget: {
      type: String,
      default: 'Undisclosed',
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Project message/details is required'],
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },
    status: {
      type: String,
      enum: ['new', 'in-review', 'contacted', 'completed'],
      default: 'new',
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
