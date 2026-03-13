import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...');

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    axios.get(`${apiUrl}/status`)
      .then(response => {
        setBackendStatus(response.data.message);
      })
      .catch(error => {
        console.error("Error connecting to backend:", error);
        setBackendStatus('Failed to connect to backend.');
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center font-sans selection:bg-indigo-500 selection:text-white">
      <div className="max-w-3xl w-full p-8 bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 transform transition-all hover:scale-105 duration-500">
        
        <header className="text-center mb-10">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">MERN</h1>
            <span className="text-4xl text-gray-400 font-light">Stack</span>
          </div>
          <p className="text-xl text-gray-400 font-light">
            Modern full-stack setup with MongoDB, Express, React, and Node.js
          </p>
        </header>

        <main className="space-y-6">
          <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50 flex items-center justify-between group hover:border-indigo-500/50 transition-colors">
            <div>
              <h2 className="text-2xl font-bold text-gray-200 mb-2 group-hover:text-indigo-400 transition-colors">Backend Connection</h2>
              <p className="text-gray-400">Status of the Express.js API</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="relative flex h-4 w-4">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${backendStatus.includes('running') ? 'bg-green-400' : 'bg-red-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-4 w-4 ${backendStatus.includes('running') ? 'bg-green-500' : 'bg-red-500'}`}></span>
              </span>
              <span className={`font-medium ${backendStatus.includes('running') ? 'text-green-400' : 'text-red-400'}`}>
                {backendStatus}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50 hover:bg-gray-800/80 transition-colors duration-300">
              <div className="text-indigo-400 text-3xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-gray-200 mb-2">React Frontend</h3>
              <p className="text-gray-400 text-sm">Powered by Vite and styled with Tailwind CSS for rapid development.</p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50 hover:bg-gray-800/80 transition-colors duration-300">
              <div className="text-green-500 text-3xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-200 mb-2">Node Backend</h3>
              <p className="text-gray-400 text-sm">Express.js server ready to connect to your MongoDB database.</p>
            </div>
          </div>
        </main>
        
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Created by your AI coding assistant. Ready for development!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
