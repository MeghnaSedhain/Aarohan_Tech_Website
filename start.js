import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('\n======================================================');
console.log('🚀 Starting Aarohan Technology Full-Stack Servers...');
console.log('======================================================\n');

// 1. Launch Backend Server (Express + MongoDB Atlas on Port 5000)
const backend = spawn(process.execPath, [path.join(__dirname, 'server', 'server.js')], {
  stdio: 'inherit',
  cwd: path.join(__dirname, 'server'),
});

// 2. Launch Frontend Server (Vite React on Port 5173)
const frontend = spawn(process.execPath, [
  path.join(__dirname, 'client', 'node_modules', 'vite', 'bin', 'vite.js'),
  '--port', '5173',
  '--host'
], {
  stdio: 'inherit',
  cwd: path.join(__dirname, 'client'),
});

const cleanup = () => {
  console.log('\nShutting down servers...');
  try { backend.kill(); } catch (e) {}
  try { frontend.kill(); } catch (e) {}
  process.exit(0);
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
backend.on('exit', (code) => { if (code !== 0) console.log(`Backend exited with code ${code}`); });
frontend.on('exit', (code) => { if (code !== 0) console.log(`Frontend exited with code ${code}`); });
