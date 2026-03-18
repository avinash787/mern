import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Layout, 
  Terminal, 
  Briefcase,
  GraduationCap,
  MapPin,
  Phone,
  ArrowDown
} from 'lucide-react';
import profileImg from './assets/profile.jpg';

function App() {
  const skills = [
    { category: "Frontend", items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "jQuery", "Responsive Design"] },
    { category: "Backend", items: ["Node.js", "Express.js", "PHP", "Laravel"] },
    { category: "Databases", items: ["MongoDB", "MySQL"] },
    { category: "APIs & Arch.", items: ["RESTful APIs", "MVC Architecture", "CRUD Operations", "JSON", "AJAX"] },
    { category: "Auth & Sec.", items: ["JWT", "Two-Factor Auth (2FA)", "Role-Based Access Control"] },
    { category: "Tools & Int.", items: ["Git", "GitHub", "Postman", "Stripe API", "Zapier Automation"] }
  ];

  const experiences = [
    {
      role: "Fullstack Web Developer",
      company: "Fixingdots, Raipur",
      period: "May 2025 - Present",
      projects: [
        {
          name: "FixHR (HR Resource Management System)",
          details: [
            "Managed and enhanced Laravel-based HR resource management application handling employee data and travel reports.",
            "Developed and maintained CRUD modules for travel reporting and employee resource tracking.",
            "Implemented Two-Factor Authentication (2FA) and role-based access control to improve application security.",
            "Optimized backend logic and database queries, improving response time and system stability.",
            "Performed debugging, error handling, and input validation to enhance reliability."
          ]
        },
        {
          name: "ABHR (Real Estate Management App)",
          details: [
            "Developed analytics dashboards using React.js for Customer data visualization and reporting.",
            "Built reusable UI components and implemented efficient state management.",
            "Developed user management and profile management modules with API integration.",
            "Improved frontend performance through component optimization and reduced unnecessary re-renders.",
            "Integrated REST APIs with proper error handling and secure authentication flow."
          ]
        }
      ]
    },
    {
      role: "Web Developer",
      company: "NJ Design Park, Bhilai",
      period: "July 2022 - May 2025",
      details: [
        "Developed and maintained dynamic web applications using PHP, Laravel, Node.js, and MySQL.",
        "Designed and implemented RESTful APIs supporting CRUD operations and third-party integrations.",
        "Built service-based quote management systems (Boiler, EV Chargers, AC, Solar) with dynamic form handling and database optimization.",
        "Integrated Stripe payment gateway for secure online transactions.",
        "Implemented OTP-based Two-Factor Authentication to enhance user security.",
        "Automated lead management workflows using Zapier, reducing manual processing effort.",
        "Developed web scraper for extracting and managing client review data from external sources.",
        "Optimized database indexing and backend queries to improve performance and reduce load time."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Mechanical Engineering",
      institution: "CSIT, Durg",
      period: "2013 – 2017",
      // score: "Aggregate: 72%"
    }
  ];

  const certifications = [
    "MERN Full Stack Development – Sensible Computer, Bhilai",
    "iOS App Development Training – Quagnitia, Pune (3 months)"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white pb-12">
      {/* Navigation / Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            &lt;Avinash /&gt;
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
          </div>
          <a href="#contact" className="md:hidden text-sm font-medium hover:text-indigo-400 transition-colors">Contact</a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 space-y-32 mt-20">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 pt-10">
          <div className="space-y-6 flex-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Available for Hire</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Hi, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Avinash Sahu
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 font-medium tracking-wide">
              Full Stack Developer
            </p>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Building scalable web applications and RESTful APIs using modern technologies like MongoDB, Express.js, React.js, Node.js, and Laravel.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-400 text-sm py-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-indigo-400" />
                <span>Raipur, Chhattisgarh, India</span>
              </div>
              <div className="hidden sm:block text-slate-700">•</div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-indigo-400" />
                <span>sahuavinash29@gmail.com</span>
              </div>
              <div className="hidden sm:block text-slate-700">•</div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-indigo-400" />
                <span>8269089787</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="#experience" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/30 flex items-center gap-2">
                <span>View My Work</span>
                <ArrowDown size={18} />
              </a>
              <a href="#contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold transition-all">
                Contact Me
              </a>
              <div className="flex space-x-2 ml-2">
                 <a href="https://github.com/avinash787" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all">
                   <Github size={20} />
                 </a>
                 <a href="https://www.linkedin.com/in/avinash-sahu-091419136" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all">
                   <Linkedin size={20} />
                 </a>
              </div>
            </div>
          </div>
          <div className="flex-1 relative hidden md:block">
            <div className="w-80 h-80 rounded-full border-2 border-indigo-500/30 p-2 mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="w-full h-full bg-slate-900 rounded-full flex flex-col items-center justify-center border border-slate-800 relative overflow-hidden">
                 <img 
                    src={profileImg} 
                    alt="Avinash Profile" 
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                 />
                 <div className="absolute inset-0 flex-col items-center justify-center hidden w-full h-full">
                     <Layout size={64} className="text-indigo-400/80 mb-4 z-10 group-hover:scale-110 transition-transform" />
                     <Terminal size={48} className="text-cyan-400/80 z-10 group-hover:scale-110 transition-transform" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24">
           <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800/60 w-full">
             <div className="space-y-4 max-w-4xl mx-auto">
               <h2 className="text-2xl font-bold text-slate-100 mb-4">Professional Summary</h2>
               <p className="text-slate-400 leading-relaxed text-lg">
                 Full Stack Developer with 3+ years of experience building scalable web applications and RESTful APIs using MongoDB, Express.js, React.js, Node.js, and Laravel. 
               </p>
               <p className="text-slate-400 leading-relaxed text-lg">
                 Strong expertise in backend development, CRUD operations, authentication systems, analytics dashboards, API integration, and performance optimization. Experienced in delivering secure, production-ready applications following MVC architecture and Agile methodologies.
               </p>
             </div>
           </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <div className="flex items-center space-x-4 mb-10">
            <h2 className="text-3xl font-bold flex items-center space-x-3">
              <Briefcase className="w-8 h-8 text-indigo-400" />
              <span>Professional Experience</span>
            </h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="md:grid md:grid-cols-5 gap-8">
                  {/* Timeline side */}
                  <div className="md:col-span-1 md:text-right mt-1 mb-2 md:mb-0">
                    <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider">{exp.period}</span>
                  </div>
                  
                  {/* Content side */}
                  <div className="md:col-span-4 pl-6 md:pl-8 border-l border-slate-800 relative">
                    <div className="absolute left-[-5px] top-1.5 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                    
                    <h3 className="text-2xl font-bold text-slate-100">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-slate-400 mb-5">{exp.company}</h4>
                    
                    {exp.details && (
                      <ul className="space-y-3 text-slate-400">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-indigo-500 mr-2 mt-1.5 text-xs">◆</span>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {exp.projects && (
                      <div className="space-y-6 mt-6">
                        {exp.projects.map((project, idx) => (
                          <div key={idx} className="bg-slate-900/60 rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-colors">
                            <h5 className="font-bold text-indigo-300 mb-4 text-lg border-b border-slate-800 pb-2">{project.name}</h5>
                            <ul className="space-y-3 text-slate-400">
                              {project.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex items-start">
                                  <span className="text-indigo-500 mr-2 mt-1.5 text-xs">◆</span>
                                  <span className="leading-relaxed">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center space-x-4 mb-10">
            <h2 className="text-3xl font-bold flex items-center space-x-3">
              <Code2 className="w-8 h-8 text-indigo-400" />
              <span>Technical Skills</span>
            </h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, index) => (
              <div key={index} className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl hover:border-indigo-500/30 transition-colors">
                <h3 className="text-lg font-bold text-slate-200 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg text-sm font-medium text-slate-300 hover:text-indigo-300 hover:border-indigo-500/30 transition-all cursor-default shadow-sm group">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="scroll-mt-24">
          <div className="flex items-center space-x-4 mb-10">
            <h2 className="text-3xl font-bold flex items-center space-x-3">
              <GraduationCap className="w-8 h-8 text-indigo-400" />
              <span>Education & Certifications</span>
            </h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center space-x-2">
                 <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                 <span>Education</span>
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-cyan-500/10 transition-colors"></div>
                  <h4 className="font-bold text-slate-100 text-lg pr-4">{edu.degree}</h4>
                  <p className="text-indigo-300 font-medium my-1">{edu.institution}</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-800/60 text-sm font-medium">
                    <span className="text-slate-500">{edu.period}</span>
                    <span className="text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center space-x-2">
                 <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                 <span>Certifications & Training</span>
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl hover:border-purple-500/30 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-purple-400">
                       <Code2 size={20} />
                    </div>
                    <p className="text-slate-300 font-medium leading-snug">{cert}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl mt-6">
                 <h3 className="text-lg font-bold text-slate-200 mb-4">Languages</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center">
                     <span className="text-slate-400">Hindi</span>
                     <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded">Native</span>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-slate-400">English</span>
                     <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">Professional</span>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <section id="contact" className="text-center py-20 border-t border-slate-800/50 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-indigo-500/10 blur-[80px] rounded-full"></div>
          
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            I'm currently looking for new opportunities. Whether you have a project in mind or just want to connect, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <a href="mailto:sahuavinash29@gmail.com" className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-bold transition-all space-x-2 shadow-lg shadow-indigo-500/25 w-full sm:w-auto">
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a href="tel:+918269089787" className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-slate-200 hover:bg-slate-700 rounded-xl font-bold transition-all space-x-2 w-full sm:w-auto">
              <Phone size={20} />
              <span>+91 8269089787</span>
            </a>
          </div>
          <div className="flex justify-center space-x-8 text-slate-500">
            <a href="https://github.com/avinash787" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/avinash-sahu-091419136" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2"><Linkedin size={24} /></a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
