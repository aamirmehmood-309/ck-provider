import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Users, 
  Utensils, 
  Trees, 
  Lock, 
  ChevronRight, 
  ChevronLeft,
  Info,
  FileText,
  BadgeCheck,
  Star,
  ExternalLink
} from 'lucide-react';
import { Card } from './Card';

interface FacilityItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

const FacilityItem: React.FC<FacilityItemProps> = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-4 p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
      <Icon size={22} />
    </div>
    <div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
      <p className="text-base font-bold text-slate-800 dark:text-slate-100 mt-0.5">{value}</p>
    </div>
  </div>
);

export const CenterDetails: React.FC = () => {
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800', title: 'Main Classroom' },
    { url: 'https://images.unsplash.com/photo-1485546784815-e380f3000665?auto=format&fit=crop&q=80&w=800', title: 'Play Area' },
    { url: 'https://images.unsplash.com/photo-1560419011-0c53f5d8b719?auto=format&fit=crop&q=80&w=800', title: 'Outdoor Garden' },
    { url: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=800', title: 'Creative Art Studio' },
    { url: 'https://images.unsplash.com/photo-1587653263995-422546a74569?auto=format&fit=crop&q=80&w=800', title: 'Safe Sleeping Area' },
  ];

  const nextImage = () => setActiveGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setActiveGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const fullDescription = "Sunshine Valley Academy is a premier early childhood learning center dedicated to providing a nurturing and stimulating environment for children aged 6 weeks to 5 years. Our curriculum focuses on holistic development, combining structured learning with creative play to foster curiosity and confidence in every child. Founded in 2012, we have grown to become a cornerstone of the community, known for our highly qualified staff and state-of-the-art facilities. We believe that every child is unique and deserves a personalized approach to learning that respects their pace and interests. Our safety protocols are industry-leading, ensuring peace of mind for parents while their little ones explore, learn, and grow in a secure and loving space. We offer specialized enrichment programs including introductory coding, foreign languages, and mindfulness sessions.";
  const shortDescription = fullDescription.slice(0, 200) + "...";

  return (
    <div className="space-y-12 pb-20">
      
      {/* 1️⃣ Hero Section (Full Width Image) & Center Name */}
      <div className="relative h-[400px] md:h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl group border border-slate-200 dark:border-slate-800">
        <img 
          src="https://images.unsplash.com/photo-1540479859203-58747596e3ad?auto=format&fit=crop&q=80&w=1200" 
          alt="Sunshine Valley Academy Hero" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-4 py-1.5 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-2 shadow-xl shadow-blue-500/40">
              <BadgeCheck size={14} /> Verified
            </span>
            <span className="px-4 py-1.5 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-2 shadow-xl shadow-emerald-500/40">
              <ShieldCheck size={14} /> Licensed
            </span>
            <span className="px-4 py-1.5 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-2 shadow-xl shadow-amber-500/40">
              <Star size={14} /> Featured
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-6">
            Sunshine Valley Academy
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 text-slate-200">
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
              <MapPin size={20} className="text-blue-400" />
              <span className="text-lg font-bold">123 Learning Lane, Creative Hills, CA 90210</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
              <Clock size={20} className="text-blue-400" />
              <span className="text-lg font-bold">Open Today: 7:00 AM - 6:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          
          {/* 3️⃣ Center Description */}
          <Card className="border-none shadow-sm bg-blue-50/30 dark:bg-slate-800/50">
            <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-6 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
              About Our Academy
            </h3>
            <div className="relative">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg whitespace-pre-line">
                {isDescExpanded ? fullDescription : shortDescription}
              </p>
              <button 
                onClick={() => setIsDescExpanded(!isDescExpanded)}
                className="mt-6 text-blue-600 dark:text-blue-400 font-black hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 transition-all group"
              >
                {isDescExpanded ? "Read Less" : "Read More About Us"}
                <ChevronRight size={18} className={`transform transition-transform group-hover:translate-x-1 ${isDescExpanded ? '-rotate-90' : ''}`} />
              </button>
            </div>
          </Card>

          {/* 4️⃣ Facility Details Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 dark:text-white px-2">Facility Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FacilityItem icon={Users} label="Age Groups Served" value="6 Weeks - 5 Years" />
              <FacilityItem icon={Users} label="Total Capacity" value="65 Students" />
              <FacilityItem icon={Clock} label="Operational Hours" value="Mon-Fri: 7AM - 6:30PM" />
              <FacilityItem icon={FileText} label="Learning Programs" value="Infant, Toddler, Pre-K, Summer" />
              <FacilityItem icon={Utensils} label="Nutrition & Meals" value="Healthy Breakfast, Lunch & Snacks" />
              <FacilityItem icon={Trees} label="Outdoor Play Area" value="3,000 sq ft Secure Playground" />
              <FacilityItem icon={Lock} label="Security Features" value="Smart Entry & 24/7 Monitoring" />
              <FacilityItem icon={BadgeCheck} label="Teacher Ratio" value="1:4 (Infants), 1:10 (Pre-K)" />
            </div>
          </div>

          {/* 5️⃣ Center Image Carousel */}
          <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-2xl font-black text-slate-800 dark:text-white">Center Gallery</h3>
              <div className="flex gap-3">
                <button 
                  onClick={prevImage}
                  className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-slate-600 dark:text-slate-300 shadow-sm"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-slate-600 dark:text-slate-300 shadow-sm"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[40px] aspect-[16/9] md:aspect-[21/9] bg-slate-200 dark:bg-slate-800 shadow-xl">
              <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] h-full"
                style={{ transform: `translateX(-${activeGalleryIndex * 100}%)` }}
              >
                {galleryImages.map((img, idx) => (
                  <div key={idx} className="min-w-full h-full relative">
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-8 left-8 px-6 py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl text-slate-900 dark:text-white text-lg font-black border border-white/20 shadow-xl">
                      {img.title}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-8 right-8 flex gap-2">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      idx === activeGalleryIndex ? 'w-10 bg-white' : 'w-2 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 6️⃣ Licensing Information */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24 border-t-8 border-t-emerald-500 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-800 dark:text-white leading-tight">
                Licensing Information
              </h3>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center justify-between p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100/50 dark:border-emerald-800/30">
                <span className="text-[10px] font-black text-emerald-800 dark:text-emerald-400 uppercase tracking-widest">Verification Status</span>
                <span className="px-4 py-1.5 bg-emerald-500 text-white text-[10px] font-black rounded-full uppercase tracking-tighter shadow-lg shadow-emerald-500/20">Active</span>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col gap-1 pb-4 border-b border-slate-100 dark:border-slate-700">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">License ID</span>
                  <span className="text-lg font-bold text-slate-800 dark:text-slate-100">LIC-88294-CA</span>
                </div>
                <div className="flex flex-col gap-1 pb-4 border-b border-slate-100 dark:border-slate-700">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Issuing Authority</span>
                  <span className="text-lg font-bold text-slate-800 dark:text-slate-100">CA Dept. of Social Services</span>
                </div>
                <div className="flex flex-col gap-1 pb-4 border-b border-slate-100 dark:border-slate-700">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Issue Date</span>
                  <span className="text-lg font-bold text-slate-800 dark:text-slate-100">January 12, 2012</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Next Renewal Date</span>
                  <span className="text-lg font-bold text-rose-500">January 12, 2025</span>
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full py-4 bg-slate-900 dark:bg-slate-700 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 group">
                  <FileText size={18} className="group-hover:scale-110 transition-transform" />
                  View Original Certificate
                  <ExternalLink size={14} className="opacity-50" />
                </button>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl flex items-start gap-3">
                 <Info size={16} className="text-blue-500 shrink-0 mt-0.5" />
                 <p className="text-[10px] font-bold text-slate-400 uppercase leading-relaxed">
                   This provider has been verified by ChildrenKARE and meets all state regulatory requirements for childcare services.
                 </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};