import React, { useEffect, useState } from 'react';
import { getTeam } from '../services/api';
import { Users, Code, Sparkles, Shield, Edit3, X, Check, Camera, Briefcase, Mail } from 'lucide-react';
import axios from 'axios';

const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const initialFallbackTeam = [
  {
    _id: '1',
    name: 'Executive Director',
    role: 'Chief Executive Officer (CEO)',
    department: 'Leadership',
    specialty: 'Strategic Vision & Technology Leadership',
    bio: 'Guiding Aarohan Technology’s global mission to engineer smarter digital solutions and future-forward innovation.',
    image: '',
    linkedin: '#',
    github: '#',
    order: 1,
  },
  {
    _id: '2',
    name: 'Technology Director',
    role: 'Chief Technology Officer (CTO / ATO)',
    department: 'Leadership',
    specialty: 'Enterprise Architecture & AI Innovation',
    bio: 'Overseeing technology strategy, R&D, and engineering excellence across full stack platforms.',
    image: '',
    linkedin: '#',
    github: '#',
    order: 2,
  },
  {
    _id: '3',
    name: 'People Operations Lead',
    role: 'Head of Human Resources (HR)',
    department: 'Leadership',
    specialty: 'Talent Acquisition, Culture & Growth',
    bio: 'Fostering an engineering-first culture, attracting top tech talent, and empowering team development.',
    image: '',
    linkedin: '#',
    github: '#',
    order: 3,
  },
  {
    _id: '4',
    name: 'Meghna Sedhain',
    role: 'Support Engineer 1 (Full stack/AI)',
    department: 'Engineering',
    specialty: 'Full Stack & AI Support',
    bio: 'Providing end-to-end full stack diagnostics, AI workflow assistance, and production application support.',
    image: '/team/meghna.jpg',
    email: 'meghnasedhain1@gmail.com',
    linkedin: 'https://www.linkedin.com/in/meghna-sedhain-23b658320',
    github: 'https://github.com/MeghnaSedhain',
    order: 4,
  },
  {
    _id: '5',
    name: 'Support Engineer 2',
    role: 'Support Engineer (Full stack/AI)',
    department: 'Engineering',
    specialty: 'Full Stack & AI Support',
    bio: 'Specializing in neural model inference monitoring, real-time database queries, and incident resolution.',
    image: '',
    linkedin: '#',
    github: '#',
    order: 5,
  },
  {
    _id: '6',
    name: 'Support Engineer 3',
    role: 'Support Engineer (Full stack/AI)',
    department: 'Engineering',
    specialty: 'Full Stack & AI Support',
    bio: 'Handling full-stack code debugging, cloud pipeline troubleshooting, and technical client support.',
    image: '',
    linkedin: '#',
    github: '#',
    order: 6,
  },
  {
    _id: '7',
    name: 'Support Engineer 4',
    role: 'Support Engineer (Full stack/AI)',
    department: 'Engineering',
    specialty: 'Full Stack & AI Support',
    bio: 'Managing frontend performance triage, AI-powered video tool assistance, and system testing.',
    image: '',
    linkedin: '#',
    github: '#',
    order: 7,
  },
  {
    _id: '8',
    name: 'Support Engineer 5',
    role: 'Support Engineer (Full stack/AI)',
    department: 'Engineering',
    specialty: 'Full Stack & AI Support',
    bio: 'Ensuring 24/7 system reliability, automated testing maintenance, and client software maintenance.',
    image: '',
    linkedin: '#',
    github: '#',
    order: 8,
  },
];

const getInitials = (name) => {
  if (!name) return 'AT';
  const parts = name.split(' ').filter(Boolean);
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return name.slice(0, 2).toUpperCase();
};

const getRoleBadgeColor = (role) => {
  if (role.includes('CEO')) return 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300/60';
  if (role.includes('CTO') || role.includes('ATO')) return 'bg-blue-100 text-brand-800 dark:bg-blue-950/70 dark:text-blue-300 border-blue-300/60';
  if (role.includes('HR')) return 'bg-purple-100 text-purple-800 dark:bg-purple-950/70 dark:text-purple-300 border-purple-300/60';
  return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300/60';
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [team, setTeam] = useState(initialFallbackTeam);
  const [editingMember, setEditingMember] = useState(null);
  const [formData, setFormData] = useState({ name: '', role: '', specialty: '', bio: '', image: '', linkedin: '', github: '' });
  const [saving, setSaving] = useState(false);

  const fetchTeam = () => {
    getTeam(activeTab).then((res) => {
      if (res && res.data && res.data.length > 0) {
        setTeam(res.data);
      }
    });
  };

  useEffect(() => {
    fetchTeam();
  }, [activeTab]);

  const handleEditClick = (member) => {
    setEditingMember(member);
    setFormData({
      name: member.name || '',
      role: member.role || '',
      specialty: member.specialty || '',
      bio: member.bio || '',
      image: member.image || '',
      email: member.email || '',
      linkedin: member.linkedin || '#',
      github: member.github || '#',
    });
  };

  const handleSaveMember = async (e) => {
    e.preventDefault();
    if (!editingMember) return;
    setSaving(true);
    try {
      await axios.patch(`http://localhost:5000/api/team/${editingMember._id}`, formData);
      setEditingMember(null);
      fetchTeam();
    } catch (err) {
      console.warn('Update team member error:', err.message);
      // update locally
      setTeam((prev) =>
        prev.map((m) => (m._id === editingMember._id ? { ...m, ...formData } : m))
      );
      setEditingMember(null);
    } finally {
      setSaving(false);
    }
  };

  return (
    <section id="team" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1 rounded-full border border-blue-200/50 dark:border-blue-800/50">
            OUR LEADERSHIP & ENGINEERING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            Meet the Minds Behind Aarohan
          </h2>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
          A forward-thinking executive team and 5 Support Engineers (Full stack/AI) delivering intelligent solutions.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        <button
          onClick={() => setActiveTab('All')}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold transition ${
            activeTab === 'All'
              ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
          }`}
        >
          All Members ({team.length})
        </button>

        <button
          onClick={() => setActiveTab('Leadership')}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold transition ${
            activeTab === 'Leadership'
              ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
          }`}
        >
          Leadership (CEO, CTO, HR)
        </button>

        <button
          onClick={() => setActiveTab('Engineering')}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold transition ${
            activeTab === 'Engineering'
              ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
          }`}
        >
          Support Engineers (Full stack/AI) (5)
        </button>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member) => (
          <div
            key={member._id}
            className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-700 shadow-sm card-hover flex flex-col justify-between group relative overflow-hidden text-left"
          >
            <div>
              {/* Member Photo or Stylized Initials Avatar */}
              <div className="relative mb-5 w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-brand-600 via-blue-500 to-indigo-600 flex items-center justify-center shadow-inner group">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-white">
                    <span className="text-4xl font-extrabold tracking-wider drop-shadow-md">
                      {getInitials(member.name)}
                    </span>
                    <span className="text-[10px] font-medium tracking-widest uppercase opacity-80 mt-1">
                      {member.role.split('(')[0]}
                    </span>
                  </div>
                )}

                {/* Edit Button overlay */}
                <button
                  onClick={() => handleEditClick(member)}
                  className="absolute bottom-2.5 right-2.5 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white p-2 rounded-xl text-xs transition opacity-0 group-hover:opacity-100 shadow-lg flex items-center space-x-1"
                  title="Edit Name, Photo & Role"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-semibold pr-1">Edit Info</span>
                </button>
              </div>

              {/* Role Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getRoleBadgeColor(member.role)}`}>
                  {member.role.includes('CEO') ? 'CEO' : member.role.includes('CTO') || member.role.includes('ATO') ? 'CTO / ATO' : member.role.includes('HR') ? 'HR' : 'IT Engineer'}
                </span>
                <span className="text-[10px] font-semibold text-slate-400">
                  {member.department}
                </span>
              </div>

              {/* Name & Title */}
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
                {member.name}
              </h3>
              <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-0.5">
                {member.role}
              </p>

              {/* Specialty Tag */}
              {member.specialty && (
                <div className="mt-3 inline-flex items-center text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 px-2.5 py-1 rounded-lg">
                  <Sparkles className="w-3 h-3 text-brand-500 mr-1.5 shrink-0" />
                  <span>{member.specialty}</span>
                </div>
              )}

              {/* Bio */}
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-3">
                {member.bio}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-medium">Aarohan Core</span>
              <div className="flex items-center space-x-2 text-slate-400">
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`}
                    title={`Email ${member.name} (${member.email})`}
                    className="hover:text-brand-600 dark:hover:text-brand-400 transition p-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.linkedin && member.linkedin !== '#' && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title={`${member.name} on LinkedIn`}
                    className="hover:text-brand-600 dark:hover:text-brand-400 transition p-1"
                  >
                    <LinkedinIcon />
                  </a>
                )}
                {member.github && member.github !== '#' && (
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title={`${member.name} on GitHub`}
                    className="hover:text-brand-600 dark:hover:text-brand-400 transition p-1"
                  >
                    <GithubIcon />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Member Modal */}
      {editingMember && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative my-8 animate-float text-left">
            
            <button
              onClick={() => setEditingMember(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5">
              <div className="inline-flex items-center space-x-2 text-[10px] font-bold text-brand-600 uppercase tracking-wider mb-1">
                <span>Update Team Profile</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Edit {editingMember.role}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Update name, picture URL, and specialization. Persists in MongoDB.
              </p>
            </div>

            <form onSubmit={handleSaveMember} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Designation / Role Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. Chief Executive Officer (CEO)"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Photo URL or Image Path
                </label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://example.com/photo.jpg or /team/member.jpg"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-600"
                />
                <p className="text-[10px] text-slate-400 mt-1">Leave empty to use automatic high-contrast avatar with initials.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Technical Focus / Specialty
                </label>
                <input
                  type="text"
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  placeholder="e.g. Full-Stack & AI Architecture"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Bio / Responsibilities
                </label>
                <textarea
                  rows={2}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="Brief summary of domain expertise and impact..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. member@aarohantech.com"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    LinkedIn Profile
                  </label>
                  <input
                    type="text"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    GitHub Profile
                  </label>
                  <input
                    type="text"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    placeholder="https://github.com/..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-600"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditingMember(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-600/25 flex items-center space-x-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{saving ? 'Saving...' : 'Save to MongoDB'}</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </section>
  );
};

export default TeamSection;
