import React, { useState } from 'react';
import { 
  Edit2, 
  Save, 
  X, 
  Plus, 
  Trash2, 
  Mail, 
  Globe, 
  Phone, 
  Clock, 
  Users, 
  ShieldCheck, 
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
  Upload,
  UserPlus,
  ChevronDown,
  MapPin,
  FileText
} from 'lucide-react';
import { Card } from './Card';

// --- Types ---
interface Program {
  id: string;
  name: string;
  weeklyTuition: string;
  dailyRate: string;
  lowRate: string;
  highRate: string;
}

interface AuthorizedUser {
  id: string;
  name: string;
  email: string;
  role: 'Owner' | 'Editor' | 'Staff';
  status: 'Active' | 'Pending';
}

// --- Sub-components ---

const SectionHeader: React.FC<{ title: string; onEdit?: () => void; isEditing?: boolean; children?: React.ReactNode }> = ({ title, onEdit, isEditing, children }) => (
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{title}</h3>
    <div className="flex items-center gap-3">
      {children}
      {onEdit && !isEditing && (
        <button 
          onClick={onEdit}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-lg transition-all"
        >
          <Edit2 size={14} /> Edit Section
        </button>
      )}
    </div>
  </div>
);

const EditActions: React.FC<{ onSave: () => void; onCancel: () => void }> = ({ onSave, onCancel }) => (
  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
    <button 
      onClick={onSave}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
    >
      <Save size={16} /> Save Changes
    </button>
    <button 
      onClick={onCancel}
      className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
    >
      <X size={16} /> Cancel
    </button>
  </div>
);

// --- Main Page ---

export const CenterProfile: React.FC = () => {
  // State management for each section
  const [editStates, setEditStates] = useState({
    about: false,
    info: false,
    additional: false,
  });

  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [aboutText, setAboutText] = useState("Sunshine Valley Academy is a premier early childhood learning center dedicated to providing a nurturing and stimulating environment for children aged 6 weeks to 5 years. Our curriculum focuses on holistic development, combining structured learning with creative play to foster curiosity and confidence in every child. We have been serving the community since 2012 with award-winning staff and facilities.");
  
  const [centerInfo, setCenterInfo] = useState({
    name: "STEM Child Care, Inc.",
    type: "Child Care Center",
    license: "LIC-88294-CA",
    website: "stemchildcare.com",
    email: "admin@stemchildcare.com",
    secondaryEmail: "N/A",
    phone: "+1 (303) 927-7408",
    secondaryPhone: "N/A"
  });

  const [programs, setPrograms] = useState<Program[]>([
    { id: '1', name: 'Infant Program', weeklyTuition: '$450', dailyRate: '$95', lowRate: '$400', highRate: '$500' },
    { id: '2', name: 'Toddler Care', weeklyTuition: '$400', dailyRate: '$85', lowRate: '$350', highRate: '$450' },
    { id: '3', name: 'Preschool Prep', weeklyTuition: '$375', dailyRate: '$80', lowRate: '$325', highRate: '$425' },
  ]);

  const [authUsers, setAuthUsers] = useState<AuthorizedUser[]>([
    { id: 'u1', name: 'Sarah Jenkins', email: 's.jenkins@stem.com', role: 'Owner', status: 'Active' },
    { id: 'u2', name: 'David Miller', email: 'd.miller@stem.com', role: 'Editor', status: 'Active' },
    { id: 'u3', name: 'Emily Chen', email: 'e.chen@gmail.com', role: 'Staff', status: 'Pending' },
  ]);

  const toggleEdit = (section: keyof typeof editStates) => {
    setEditStates(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const getShortDesc = (text: string) => text.length > 150 ? text.substring(0, 150) + "..." : text;

  return (
    <div className="space-y-8 pb-16 max-w-7xl mx-auto">
      
      {/* 1. Hero Section (Full Width) */}
      <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
        <img 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
          alt="STEM Child Care" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-2">
               <span className="px-2 py-0.5 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded">Verified</span>
               <span className="px-2 py-0.5 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded">Licensed</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">{centerInfo.name}</h1>
            <div className="flex items-center gap-4">
              <p className="text-blue-300 text-lg font-semibold">{centerInfo.type}</p>
              <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
              <p className="text-slate-300 flex items-center gap-1.5"><MapPin size={16} /> Creative Hills, CA</p>
            </div>
          </div>
          <button className="sticky top-4 z-20 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all flex items-center gap-2 self-start md:self-auto border border-blue-400/30">
            <Edit2 size={18} /> Edit Profile Hero
          </button>
        </div>
      </div>

      {/* 2. Short Description */}
      <Card>
        <SectionHeader 
          title="About the Center" 
          onEdit={() => toggleEdit('about')} 
          isEditing={editStates.about} 
        />
        {editStates.about ? (
          <div className="space-y-4">
            <textarea 
              className="w-full h-40 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-700 dark:text-slate-300 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              maxLength={500}
            />
            <div className="flex justify-end">
              <span className={`text-xs font-bold uppercase tracking-widest ${aboutText.length >= 500 ? 'text-rose-500' : 'text-slate-400'}`}>
                {aboutText.length} / 500 characters
              </span>
            </div>
            <EditActions onSave={() => toggleEdit('about')} onCancel={() => toggleEdit('about')} />
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg whitespace-pre-line">
              {isDescExpanded ? aboutText : getShortDesc(aboutText)}
            </p>
            {aboutText.length > 150 && (
               <button 
                 onClick={() => setIsDescExpanded(!isDescExpanded)}
                 className="text-blue-600 dark:text-blue-400 font-bold text-sm hover:underline"
               >
                 {isDescExpanded ? 'Show Less' : 'Read More'}
               </button>
            )}
          </div>
        )}
      </Card>

      {/* 3. Center Information */}
      <Card>
        <SectionHeader 
          title="Center Information" 
          onEdit={() => toggleEdit('info')} 
          isEditing={editStates.info} 
        />
        <p className="text-sm text-slate-500 mb-8 font-medium">Basic contact and regulatory information for your public center profile.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {[
            { label: 'Center Name', key: 'name', icon: FileText, value: centerInfo.name },
            { label: 'Type', key: 'type', icon: Users, value: centerInfo.type },
            { label: 'License Number', key: 'license', icon: ShieldCheck, value: centerInfo.license },
            { label: 'Website', key: 'website', icon: Globe, value: centerInfo.website },
            { label: 'Primary Email', key: 'email', icon: Mail, value: centerInfo.email },
            { label: 'Secondary Email', key: 'secondaryEmail', icon: Mail, value: centerInfo.secondaryEmail },
            { label: 'Primary Phone', key: 'phone', icon: Phone, value: centerInfo.phone },
            { label: 'Secondary Phone', key: 'secondaryPhone', icon: Phone, value: centerInfo.secondaryPhone },
          ].map((field) => (
            <div key={field.key} className="space-y-1.5 group">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <field.icon size={12} className="text-slate-300 group-hover:text-blue-400 transition-colors" /> {field.label}
              </label>
              {editStates.info ? (
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  value={centerInfo[field.key as keyof typeof centerInfo]}
                  onChange={(e) => setCenterInfo({...centerInfo, [field.key]: e.target.value})}
                />
              ) : (
                <div className="px-4 py-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <span className="text-slate-800 dark:text-slate-200 font-bold">{field.value}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {editStates.info && (
          <EditActions onSave={() => toggleEdit('info')} onCancel={() => toggleEdit('info')} />
        )}
      </Card>

      {/* 4. Programs Offered */}
      <Card noPadding>
        <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">Programs Offered</h3>
            <p className="text-sm text-slate-500 mt-1">Pricing and tuition rates for families.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
            <Plus size={16} /> Add Program
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-700">
                <th className="px-6 py-4">Program Name</th>
                <th className="px-6 py-4">Weekly Tuition</th>
                <th className="px-6 py-4">Daily Rate</th>
                <th className="px-6 py-4">Low Rate</th>
                <th className="px-6 py-4">High Rate</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {programs.map((prog) => (
                <tr key={prog.id} className="group hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-800 dark:text-slate-200">{prog.name}</td>
                  <td className="px-6 py-4 font-semibold text-slate-600 dark:text-slate-400">{prog.weeklyTuition}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{prog.dailyRate}</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-bold">{prog.lowRate}</td>
                  <td className="px-6 py-4 text-rose-600 dark:text-rose-400 font-bold">{prog.highRate}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"><Edit2 size={16} /></button>
                      <button className="p-2 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* 5. Additional Information */}
      <Card>
        <SectionHeader 
          title="Additional Information" 
          onEdit={() => toggleEdit('additional')} 
          isEditing={editStates.additional} 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* A. Checkbox Options */}
          <div className="space-y-6">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-500" /> Checkbox Options
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: "c1", label: "Special Needs Services", checked: true },
                { id: "c2", label: "School/Home Transportation", checked: false },
                { id: "c3", label: "Licensed Center", checked: true },
                { id: "c4", label: "Formal Curriculum", checked: true },
                { id: "c5", label: "Financial Aid", checked: false },
                { id: "c6", label: "Online Presence", checked: true },
                { id: "c7", label: "Meal Plan", checked: true }
              ].map((item) => (
                <label key={item.id} className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                  editStates.additional ? 'hover:border-blue-200 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 border-slate-200 dark:border-slate-700' : 'border-transparent bg-slate-50 dark:bg-slate-900/50'
                }`}>
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 transition-all"
                    defaultChecked={item.checked}
                    disabled={!editStates.additional}
                  />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* B. Editable Fields */}
          <div className="space-y-8">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <AlertCircle size={14} className="text-blue-500" /> Other Specs
            </h4>
            <div className="grid grid-cols-1 gap-6">
              {[
                { label: 'Operating Hours', icon: Clock, value: '7:30 AM – 5:30 PM' },
                { label: 'Availability / Capacity', icon: Users, value: '50' },
                { label: 'Languages Spoken', icon: Globe, value: 'English, Spanish' },
              ].map((item) => (
                <div key={item.label} className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <item.icon size={12} className="text-slate-300" /> {item.label}
                  </label>
                  {editStates.additional ? (
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-blue-500/20"
                      defaultValue={item.value}
                    />
                  ) : (
                    <div className="px-4 py-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                      <span className="text-slate-800 dark:text-slate-200 font-bold">{item.value}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {editStates.additional && (
          <EditActions onSave={() => toggleEdit('additional')} onCancel={() => toggleEdit('additional')} />
        )}
      </Card>

      {/* 6. Center Pictures */}
      <Card>
        <SectionHeader title="Center Pictures" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cover Image */}
          <div className="space-y-3 col-span-1 lg:col-span-2">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center justify-between">
              Cover Image <span>1000 × 513</span>
            </p>
            <div className="relative group aspect-[2/1] bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition-all">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" alt="Cover" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="p-3 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-lg">
                  <Upload size={24} className="text-blue-600" />
                </div>
                <span className="text-sm font-bold text-slate-800 dark:text-white">Replace Cover Image</span>
              </div>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="space-y-3">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center justify-between">
              Profile Picture <span>250 × 250</span>
            </p>
            <div className="relative group aspect-square bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition-all">
              <div className="w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <ImageIcon size={48} className="text-blue-500" />
              </div>
              <div className="mt-4 flex flex-col items-center gap-1">
                <span className="text-sm font-bold text-slate-800 dark:text-white">Upload Profile Pic</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Max 5MB • PNG/JPG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Gallery */}
        <div className="mt-12 space-y-4">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center justify-between">
            Facility Gallery Images <span>250 × 150</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[1,2,3,4].map(idx => (
              <div key={idx} className="relative group aspect-[250/150] bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <img src={`https://picsum.photos/id/${200 + idx}/400/240`} alt="Facility" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="p-2 bg-white text-slate-800 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition-colors"><Edit2 size={14} /></button>
                  <button className="p-2 bg-white text-slate-800 rounded-lg shadow-lg hover:bg-rose-600 hover:text-white transition-colors"><Trash2 size={14} /></button>
                </div>
              </div>
            ))}
            <button className="aspect-[250/150] bg-slate-50 dark:bg-slate-900 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center gap-1.5 hover:border-blue-400 transition-all group">
              <Plus size={24} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider group-hover:text-blue-500">Add Gallery Item</span>
            </button>
          </div>
        </div>
      </Card>

      {/* 7. Authorized Users */}
      <Card noPadding>
        <div className="p-8 border-b border-slate-100 dark:border-slate-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">Authorized Users</h3>
              <p className="text-sm text-slate-500 mt-1">Invite partners or staff to collaborate on this center profile.</p>
            </div>
            <div className="flex items-center gap-4">
               <div className="relative">
                 <input 
                   type="email" 
                   placeholder="Enter email address..." 
                   className="pl-4 pr-10 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 w-64"
                 />
                 <Mail size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
               </div>
               <div className="relative">
                 <select className="pl-4 pr-10 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 outline-none appearance-none cursor-pointer">
                   <option>Staff</option>
                   <option>Editor</option>
                   <option>Owner</option>
                 </select>
                 <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
               </div>
               <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 whitespace-nowrap">
                 <UserPlus size={18} /> Send Request
               </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-700">
                <th className="px-8 py-4">Name</th>
                <th className="px-8 py-4">Email Address</th>
                <th className="px-8 py-4">Role</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {authUsers.map((user) => (
                <tr key={user.id} className="group hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-xs font-black text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-slate-600 dark:text-slate-400 font-medium">{user.email}</td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-black uppercase rounded-lg border border-slate-200 dark:border-slate-700">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                      user.status === 'Active' 
                      ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400' 
                      : 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      {user.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      {user.status === 'Pending' && (
                         <button className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="Resend Invite"><Mail size={16} /></button>
                      )}
                      <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg"><Edit2 size={16} /></button>
                      <button className="p-2 text-slate-400 hover:text-rose-500 rounded-lg"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-center gap-2">
           <AlertCircle size={14} className="text-slate-400" />
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Administrative actions are logged for security purposes.</p>
        </div>
      </Card>

    </div>
  );
};
