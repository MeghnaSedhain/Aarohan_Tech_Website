import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB, getDBStatus } from './config/db.js';

import contactRoutes from './routes/contactRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: '*', // Allow client connections
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(morgan('dev'));

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/reviews', reviewRoutes);

// System Health & Info Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    company: 'Aarohan Technology',
    tagline: 'Building Smarter Solutions for a Digital Future',
    database: getDBStatus(),
    timestamp: new Date().toISOString(),
  });
});

// Root API Welcome
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Aarohan Technology MERN Backend API',
    endpoints: {
      health: '/api/health',
      contact: '/api/contact (POST/GET)',
      services: '/api/services (GET)',
      projects: '/api/projects (GET)',
      newsletter: '/api/newsletter (POST)',
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({ success: false, error: err.message || 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 Aarohan Technology MERN Server running on port ${PORT}`);
  console.log(`📡 API URL: http://localhost:${PORT}`);
  console.log(`======================================================\n`);
});
