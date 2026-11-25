import mongoose from 'mongoose';
import dns from 'dns';

// Ensure SRV DNS resolution succeeds on Windows/ISP networks
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
  // Ignore if not supported in environment
}

let isConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/aarohan_technology';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000,
    });
    isConnected = true;
    console.log(` MongoDB Atlas Connected Successfully: ${conn.connection.host}/${conn.connection.name}`);
    return true;
  } catch (error) {
    console.warn(` MongoDB Connection Warning: ${error.message}`);
    console.log(` Operating with fallback in-memory store for demonstration/development.`);
    isConnected = false;
    return false;
  }
};

export const getDBStatus = () => ({
  connected: isConnected,
  database: isConnected ? mongoose.connection.name : 'in-memory-fallback',
  host: isConnected ? mongoose.connection.host : 'disconnected',
});
