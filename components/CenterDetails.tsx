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
  Star
} from 'lucide-react';
import { Card } from './Card';

interface FacilityItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

const FacilityItem: React.FC<FacilityItemProps> = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
    <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</p>
      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{value}</p>
    </div>
  </div>
);

export const CenterDetails: React.FC = () => {
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const galleryImages = [
    { url: 'https://picsum.photos/id/201/800/500', title: 'Main Classroom' },
    { url: 'https://picsum.photos/id/202/800/500', title: 'Play Area' },
    { url: 'https://picsum.photos/id/203/800/500', title: 'Outdoor Garden' },
    { url: 'https://picsum.photos/id/204/800/500', title: 'Nap Room' },
    { url: 'https://picsum.photos/id/206/800/500', title: 'Art Corner' },
  ];

  const nextImage = () => setActiveGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setActiveGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const fullDescription = "Sunshine Valley Academy is a premier early childhood learning center dedicated to providing a nurturing and stimulating environment for children aged 6 weeks to 5 years. Our curriculum focuses on holistic development, combining structured learning with creative play to foster curiosity and confidence in every child. Founded in 2012, we have grown to become a cornerstone of the community, known for our highly qualified staff and state-of-the-art facilities. We believe that every child is unique and deserves a personalized approach to learning that respects their pace and interests. Our safety protocols are industry-leading, ensuring peace of mind for parents while their little ones explore, learn, and grow in a secure and loving space.";
  const shortDescription = fullDescription.slice(0, 180) + "...";

  return (
    <div className="space-y-8 pb-12">
      {/* 1️⃣ Hero Section */}
      <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl group">
        <img 
          src="https://picsum.photos/1200/600?random=10" 
          alt="Sunshine Valley Academy" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1.5 shadow-lg shadow-blue-500/30">
              <BadgeCheck size={12} /> Verified
            </span>
            <span className="px-3 py-1 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1.5 shadow-lg shadow-emerald-500/30">
              <ShieldCheck size={12} /> Licensed
            </span>
            <span className="px-3 py-1 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1.5 shadow-lg shadow-amber-500/30">
              <Star size={12} /> Featured
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
            Sunshine Valley Academy
          </h1>
          <div className="flex items-center gap-2 mt-4 text-slate-300">
            <MapPin size={18} className="text-blue-400" />
            <span className="text-lg font-medium">123 Learning Lane, Creative Hills, CA 90210</span>
          </div>
        </div>
      </div>

      {/* 2️⃣ Description & Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <Info size={20} className="text-blue-500" />
              About Our Center
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {isDescExpanded ? fullDescription : shortDescription}
            </p>
            <button 
              onClick={() => setIsDescExpanded(!isDescExpanded)}
              className="mt-4 text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1 transition-all"
            >
              {isDescExpanded ? "Show Less" : "Read More"}
              <ChevronRight size={16} className={`transform transition-transform ${isDescExpanded ? 'rotate-90' : ''}`} />
            </button>
          </Card>

          {/* 3️⃣ Facility Details Grid */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 px-1">Facility Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FacilityItem icon={Users} label="Ages Served" value="6 Weeks - 5 Years" />
              <FacilityItem icon={Users} label="Total Capacity" value="65 Students" />
              <FacilityItem icon={Clock} label="Operating Hours" value="7:00 AM - 6:30 PM" />
              <FacilityItem icon={FileText} label="Programs Offered" value="Infant, Toddler, Pre-K" />
              <FacilityItem icon={Utensils} label="Meals Provided" value="Breakfast, Lunch, Snacks" />
              <FacilityItem icon={Trees} label="Outdoor Area" value="2 Large Playgrounds" />
              <FacilityItem icon={Lock} label="Security" value="Keypad Access & CCTV" />
              <FacilityItem icon={BadgeCheck} label="Staff Ratio" value="1:4 (Infant), 1:10 (Pre-K)" />
            </div>
          </div>
        </div>

        {/* 4️⃣ Licensing Information */}
        <div className="lg:col-span-1">
          <Card className="h-full border-t-4 border-t-emerald-500">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <ShieldCheck size={22} className="text-emerald-500" />
              Licensing Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">Status</span>
                <span className="px-3 py-1 bg-emerald-500 text-white text-[10px] font-black rounded-full uppercase tracking-tighter">Active</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-500 font-medium">License Number</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">LIC-88294-CA</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-500 font-medium">Authority</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">CA Dept. of Social Services</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-500 font-medium">Issue Date</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Jan 12, 2012</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500 font-medium">Expiry Date</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Jan 12, 2025</span>
                </div>
              </div>

              <button className="w-full py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                <FileText size={16} />
                View Full License Document
              </button>
            </div>
          </Card>
        </div>
      </div>

      {/* 5️⃣ Center Image Carousel */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">Center Gallery</h3>
          <div className="flex gap-2">
            <button 
              onClick={prevImage}
              className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 transition-all text-slate-600 dark:text-slate-400"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 transition-all text-slate-600 dark:text-slate-400"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl aspect-video md:aspect-[21/9] bg-slate-200 dark:bg-slate-800">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${activeGalleryIndex * 100}%)` }}
          >
            {galleryImages.map((img, idx) => (
              <div key={idx} className="min-w-full h-full relative">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg text-white text-sm font-bold border border-white/20">
                  {img.title}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 right-6 flex gap-1.5">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGalleryIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeGalleryIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};