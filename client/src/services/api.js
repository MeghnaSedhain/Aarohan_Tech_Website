import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 8000,
});

// Services API
export const getServices = async () => {
  try {
    const res = await api.get('/services');
    return res.data;
  } catch (error) {
    console.warn('API services fetch error, using local fallback:', error.message);
    return { success: false, error: error.message };
  }
};

// Projects API
export const getProjects = async (category = 'All') => {
  try {
    const res = await api.get(`/projects?category=${encodeURIComponent(category)}`);
    return res.data;
  } catch (error) {
    console.warn('API projects fetch error, using local fallback:', error.message);
    return { success: false, error: error.message };
  }
};

// Submit Contact Inquiry
export const submitContact = async (formData) => {
  try {
    const res = await api.post('/contact', formData);
    return res.data;
  } catch (error) {
    const errMsg = error.response?.data?.error || error.message || 'Failed to submit inquiry';
    throw new Error(errMsg);
  }
};

// Get Inquiries (Admin Inbox)
export const getInquiries = async () => {
  try {
    const res = await api.get('/contact');
    return res.data;
  } catch (error) {
    console.warn('API get inquiries error:', error.message);
    return { success: false, error: error.message };
  }
};

// Update Inquiry Status
export const updateInquiryStatus = async (id, status) => {
  try {
    const res = await api.patch(`/contact/${id}`, { status });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

// Subscribe Newsletter
export const subscribeNewsletter = async (email) => {
  try {
    const res = await api.post('/newsletter', { email });
    return res.data;
  } catch (error) {
    const errMsg = error.response?.data?.error || error.message || 'Failed to subscribe';
    throw new Error(errMsg);
  }
};

// Get Team Members
export const getTeam = async (department = 'All') => {
  try {
    const res = await api.get(`/team?department=${encodeURIComponent(department)}`);
    return res.data;
  } catch (error) {
    console.warn('API get team error:', error.message);
    return { success: false, error: error.message };
  }
};

// Get Customer Reviews
export const getReviews = async () => {
  try {
    const res = await api.get('/reviews');
    return res.data;
  } catch (error) {
    console.warn('API get reviews error, using fallback:', error.message);
    return { success: false, error: error.message };
  }
};

// Submit Customer Review
export const submitReview = async (reviewData) => {
  try {
    const res = await api.post('/reviews', reviewData);
    return res.data;
  } catch (error) {
    const errMsg = error.response?.data?.error || error.message || 'Failed to submit review';
    throw new Error(errMsg);
  }
};

// Check Health
export const checkHealth = async () => {
  try {
    const res = await api.get('/health');
    return res.data;
  } catch (error) {
    return { status: 'offline', error: error.message };
  }
};

export default api;
