import React, { useState } from 'react';
import { Menu, Bell, ChevronDown, Search, Palette, Moon, Sun, Check } from 'lucide-react';
import { UserProfile, Theme } from '../types';

interface HeaderProps {
  onMenuClick: () => void;
  user: UserProfile;
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, user, currentTheme, setTheme }) => {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const themeOptions: { id: Theme; label: string; icon: React.ElementType }[] = [
    { id: 'brand', label: 'Navy (Default)', icon: Palette },
    { id: 'white', label: 'White (Light)', icon: Sun },
    { id: 'dark', label: 'Dark Mode', icon: Moon },
  ];

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-10 px-4 lg:px-8 flex items-center justify-between shadow-sm transition-colors duration-300">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 -ml-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg lg:hidden"
        >
          <Menu size={24} />
        </button>
        
        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg w-64 focus-within:ring-2 focus-within:ring-blue-100 dark:focus-within:ring-blue-900 focus-within:border-blue-300 transition-all">
          <Search size={18} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none outline-none text-sm w-full text-slate-700 dark:text-slate-200 placeholder-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Theme Switcher */}
        <div className="relative">
          <button 
            onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
            className="p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2"
          >
            {currentTheme === 'dark' ? <Moon size={20} /> : currentTheme === 'white' ? <Sun size={20} /> : <Palette size={20} />}
            <span className="hidden sm:inline text-xs font-medium uppercase tracking-wider">Theme</span>
          </button>

          {isThemeMenuOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsThemeMenuOpen(false)}></div>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl shadow-xl p-1 z-20">
                {themeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setTheme(option.id);
                      setIsThemeMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      currentTheme === option.id 
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <option.icon size={16} />
                      {option.label}
                    </div>
                    {currentTheme === option.id && <Check size={14} />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>

        {/* Divider */}
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-2 cursor-pointer group">
          <img 
            src={user.avatarUrl} 
            alt={user.name} 
            className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-600"
          />
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors">{user.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{user.role}</p>
          </div>
          <ChevronDown size={16} className="text-slate-400 hidden sm:block group-hover:text-slate-600 dark:group-hover:text-slate-200" />
        </div>
      </div>
    </header>
  );
};