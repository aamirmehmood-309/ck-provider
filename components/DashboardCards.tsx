import React, { useState } from 'react';
import { X, Play, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { Card } from './Card';
import { VideoResource } from '../types';

export const HeroBanner: React.FC = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-slate-900 text-white shadow-md">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/1200/400?grayscale&blur=2" 
          alt="Childcare Environment" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative p-8 md:p-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold mb-4 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          New Features Available
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Empower Your Center with <br /> 
          <span className="text-blue-400">Marketing Support</span>
        </h2>
        <p className="text-slate-300 mb-8 text-lg">
          Access premium tools to grow your enrollment, manage parent communications, and streamline your daily operations effectively.
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-900/50 flex items-center gap-2 group">
          Explore Marketing Tools
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export const AnnouncementsCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Card className="h-full flex flex-col justify-between border-l-4 border-l-blue-500 relative group">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-slate-300 hover:text-slate-500 dark:hover:text-slate-200 transition-colors"
      >
        <X size={18} />
      </button>
      
      <div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Welcome to ChildrenKARE!</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
          We're excited to have you on board. Check out your new dashboard features designed to make center management a breeze.
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-col gap-3">
        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
          <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold text-xs shrink-0">
            01
          </span>
          <span>Complete your center profile</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
          <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold text-xs shrink-0">
            02
          </span>
          <span>Verify your licensing documents</span>
        </div>
      </div>
    </Card>
  );
};

const VideoPreview: React.FC<{ video: VideoResource }> = ({ video }) => (
  <div className="group relative rounded-lg overflow-hidden cursor-pointer">
    <img src={video.thumbnail} alt={video.title} className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
        <Play size={18} className="text-blue-600 fill-current" />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
      <p className="text-white text-xs font-medium truncate">{video.title}</p>
      <p className="text-slate-300 text-[10px]">{video.duration}</p>
    </div>
  </div>
);

export const GuideSection: React.FC = () => {
  const videos: VideoResource[] = [
    { id: '1', title: 'Getting Started Guide', thumbnail: 'https://picsum.photos/400/225?random=1', duration: '3:45' },
    { id: '2', title: 'Managing Enrollments', thumbnail: 'https://picsum.photos/400/225?random=2', duration: '5:12' },
  ];

  return (
    <Card className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-800 dark:text-slate-100">Quick Guides</h3>
        <a href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium">View All</a>
      </div>
      <div className="space-y-3 flex-1">
        {videos.map(video => (
          <VideoPreview key={video.id} video={video} />
        ))}
      </div>
    </Card>
  );
};

export const StatusCard: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-6">
        {/* Status Unit */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white shadow-lg shadow-emerald-500/20 flex-1 flex flex-col justify-between relative overflow-hidden">
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
           <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-black/10 rounded-full blur-xl"></div>

            <div className="flex items-start justify-between relative z-10">
                <div>
                    <p className="text-emerald-100 text-sm font-medium mb-1">Account Status</p>
                    <h3 className="text-2xl font-bold">Active</h3>
                </div>
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <ShieldCheck size={24} className="text-white" />
                </div>
            </div>

            <div className="relative z-10 mt-4">
                <div className="flex items-center gap-2 mb-2">
                    <div className="flex -space-x-2">
                         <img className="w-8 h-8 rounded-full border-2 border-emerald-500" src="https://picsum.photos/32/32?random=10" alt="User" />
                    </div>
                    <span className="text-sm font-medium">1 Authorized User</span>
                </div>
                <div className="h-1 bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white/90 w-full rounded-full"></div>
                </div>
            </div>
        </div>

        {/* Support Unit */}
        <Card className="flex items-center justify-between !p-5 cursor-pointer hover:border-blue-200 dark:hover:border-blue-500 transition-colors group">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <HelpCircle size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Need Help?</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Contact our support team</p>
                </div>
            </div>
            <ArrowRight size={16} className="text-slate-300 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
        </Card>
    </div>
  );
};