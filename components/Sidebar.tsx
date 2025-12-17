import React from 'react';
import { LayoutDashboard, User, MessageSquare, CreditCard, Building2, X, Baby } from 'lucide-react';
import { NavItem, Theme } from '../types';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeRoute: string;
  setActiveRoute: (route: string) => void;
  theme: Theme;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '#dashboard' },
  { id: 'profile', label: 'Profile', icon: User, href: '#profile' },
  { id: 'messages', label: 'Messages', icon: MessageSquare, href: '#messages' },
  { id: 'finance', label: 'Finance & Subscriptions', icon: CreditCard, href: '#finance' },
  { id: 'center', label: 'Center Details', icon: Building2, href: '#center' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, activeRoute, setActiveRoute, theme }) => {
  
  // Dynamic styles based on theme
  const getSidebarStyles = () => {
    switch (theme) {
      case 'white':
        return 'bg-white border-r border-slate-200 text-slate-600';
      case 'dark':
        return 'bg-slate-900 border-r border-slate-800 text-slate-400';
      case 'brand':
      default:
        return 'bg-slate-900 text-white';
    }
  };

  const getActiveItemStyles = () => {
    switch (theme) {
      case 'white':
        return 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100';
      case 'dark':
        return 'bg-slate-800 text-blue-400 shadow-lg shadow-black/20';
      case 'brand':
      default:
        return 'bg-blue-600 text-white shadow-lg shadow-blue-900/50';
    }
  };

  const getInactiveItemStyles = () => {
    switch (theme) {
      case 'white':
        return 'text-slate-500 hover:bg-slate-50 hover:text-slate-900';
      case 'dark':
        return 'text-slate-400 hover:bg-slate-800 hover:text-slate-200';
      case 'brand':
      default:
        return 'text-slate-400 hover:bg-slate-800 hover:text-white';
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Content */}
      <aside 
        className={`fixed top-0 left-0 z-30 h-full w-72 transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static flex flex-col ${getSidebarStyles()} ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className={`h-16 flex items-center justify-between px-6 border-b ${theme === 'white' ? 'border-slate-100' : 'border-slate-800'}`}>
          <div className={`flex items-center gap-2 font-bold text-xl tracking-tight ${theme === 'white' ? 'text-slate-800' : 'text-white'}`}>
            <div className="p-1.5 bg-blue-600 rounded-lg">
              <Baby size={20} className="text-white" />
            </div>
            <span>Children<span className="text-blue-400">KARE</span></span>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="lg:hidden text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto custom-scrollbar py-6 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = activeRoute === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveRoute(item.id);
                  if (window.innerWidth < 1024) setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
                  isActive 
                    ? getActiveItemStyles()
                    : getInactiveItemStyles()
                }`}
              >
                <item.icon 
                  size={20} 
                  className={isActive ? (theme === 'white' ? 'text-blue-600' : 'text-white') : ''} 
                />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <div className={`ml-auto w-1.5 h-1.5 rounded-full shadow-sm ${theme === 'white' ? 'bg-blue-600' : 'bg-white'}`} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer Info */}
        <div className={`p-6 border-t ${theme === 'white' ? 'border-slate-100' : 'border-slate-800'}`}>
          <div className={`rounded-xl p-4 ${theme === 'white' ? 'bg-slate-50 border border-slate-100' : 'bg-slate-800'}`}>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Current Plan</p>
            <div className={`flex items-center justify-between mb-2 ${theme === 'white' ? 'text-slate-700' : 'text-white'}`}>
              <span className="font-semibold text-sm">Professional</span>
              <span className="bg-green-500/20 text-green-500 text-[10px] px-2 py-0.5 rounded-full font-bold">ACTIVE</span>
            </div>
            <div className={`w-full h-1.5 rounded-full overflow-hidden ${theme === 'white' ? 'bg-slate-200' : 'bg-slate-700'}`}>
              <div className="bg-blue-500 h-full w-3/4 rounded-full" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};