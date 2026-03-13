import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Server, 
  Database, 
  Layout, 
  Terminal, 
  ExternalLink 
} from 'lucide-react';

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

  const skills = [
    { name: 'React & Frontend', icon: <Layout className="w-6 h-6 text-blue-400" /> },
    { name: 'Node.js & Backend', icon: <Server className="w-6 h-6 text-green-500" /> },
    { name: 'MongoDB', icon: <Database className="w-6 h-6 text-emerald-500" /> },
    { name: 'Tailwind CSS', icon: <Code2 className="w-6 h-6 text-cyan-400" /> },
    { name: 'API Development', icon: <Terminal className="w-6 h-6 text-yellow-400" /> }
  ];

  const projects = [
    {
      title: 'MERN Stack Starter',
      description: 'A full-stack template featuring React, Express, MongoDB, and user authentication.',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      link: '#'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'A responsive admin dashboard for managing products, orders, and customer data.',
      tags: ['React', 'Redux', 'Chart.js'],
      link: '#'
    },
    {
      title: 'Real-time Chat App',
      description: 'Websocket-based chat application with private rooms and message history.',
      tags: ['Socket.io', 'Express', 'React', 'MongoDB'],
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white pb-12">
      {/* Navigation / Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Portfolio.
          </div>
          <div className="flex space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 space-y-32 mt-20">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 pt-10">
          <div className="space-y-6 flex-1">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Hi, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Avinash
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
              A passionate Full Stack Developer specializing in building exceptional digital experiences. I focus on creating accessible, performant, and beautiful applications.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <a href="#contact" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/30">
                Get In Touch
              </a>
              <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 relative hidden md:block">
            <div className="w-80 h-80 rounded-full border-2 border-indigo-500/30 p-2 mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=600&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="text-slate-400 space-y-4 leading-relaxed text-lg">
              <p>
                I'm a software engineer with a strong foundation in modern web technologies. My journey in web development started with a curiosity to understand how things work on the internet, and over the years, it has evolved into a deep passion for crafting user-centric products.
              </p>
              <p>
                Currently, I am focused on mastering the comprehensive MERN stack (MongoDB, Express, React, Node.js) and exploring modern frontend tools like Vite and Tailwind CSS.
              </p>
            </div>
            
            {/* Backend Connectivity Status Widget */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-indigo-500/20"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Server className="w-5 h-5 text-indigo-400" />
                <span>API Status</span>
              </h3>
              <p className="text-slate-400 text-sm mb-6">Real-time connection to the Express backend.</p>
              
              <div className="flex items-center space-x-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="relative flex h-3 w-3">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${backendStatus.includes('running') ? 'bg-emerald-400' : 'bg-red-400'}`}></span>
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${backendStatus.includes('running') ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                </span>
                <span className={`font-mono text-sm font-medium ${backendStatus.includes('running') ? 'text-emerald-400' : 'text-red-400'}`}>
                  {backendStatus}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-3xl font-bold">Tech Stack</h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-4 bg-slate-900/50 border border-slate-800 p-4 rounded-xl hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all cursor-default group">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 shadow-inner group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                <div className="h-48 bg-slate-800 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 group-hover:opacity-75 transition-opacity"></div>
                  <div className="flex items-center justify-center w-full h-full text-slate-700 bg-slate-950/50">
                     <Code2 size={64} className="opacity-20 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                    <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-slate-400 text-sm mb-6 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-xs font-medium text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <section id="contact" className="text-center py-20 border-t border-slate-800/50 relative">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:hello@example.com" className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 text-slate-950 hover:bg-white rounded-full font-bold transition-colors space-x-2 shadow-lg shadow-white/5">
            <Mail size={20} />
            <span>Say Hello</span>
          </a>
          <div className="mt-20 flex justify-center space-x-6 text-slate-500">
            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
