import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HeroBanner, AnnouncementsCard, GuideSection, StatusCard } from './components/DashboardCards';
import { ChartsSection } from './components/ChartsSection';
import { MarketplaceOffers } from './components/MarketplaceOffers';
import { SearchDemand } from './components/SearchDemand';
import { CenterProfile } from './components/CenterProfile';
import { CenterDetails } from './components/CenterDetails';
import { Messages } from './components/Messages';
import { FinanceSubscription } from './components/FinanceSubscription';
import { UserProfile, Theme } from './types';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('dashboard');
  const [theme, setTheme] = useState<Theme>('brand');

  const user: UserProfile = {
    name: 'Sarah Jenkins',
    role: 'Center Director',
    avatarUrl: 'https://picsum.photos/id/64/200/200',
  };

  const renderPlaceholder = (route: string) => (
    <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-800 rounded-xl border border-dashed border-slate-300 dark:border-slate-600 transition-colors">
      <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
        <div className="animate-pulse bg-slate-300 dark:bg-slate-500 w-8 h-8 rounded-full"></div>
      </div>
      <h3 className="text-xl font-bold text-slate-400 dark:text-slate-500">Section Under Construction</h3>
      <p className="text-slate-400 dark:text-slate-500 mt-2">The {route} module is currently being built.</p>
      <button 
        onClick={() => setActiveRoute('dashboard')}
        className="mt-6 px-4 py-2 text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-lg font-medium transition-colors"
      >
        Return to Dashboard
      </button>
    </div>
  );

  const renderContent = () => {
    switch (activeRoute) {
      case 'dashboard':
        return (
          <div className="space-y-10 pb-10">
            <HeroBanner />
            <ChartsSection />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="col-span-1">
                <AnnouncementsCard />
              </div>
              <div className="col-span-1">
                <GuideSection />
              </div>
              <div className="col-span-1">
                <StatusCard />
              </div>
            </div>
            <div className="w-full">
              <SearchDemand />
            </div>
            <div className="w-full">
              <MarketplaceOffers />
            </div>
            <div className="w-full">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <h3 className="font-bold text-slate-800 dark:text-white text-lg">Recent Student Inquiries</h3>
                  <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
                    <thead className="bg-slate-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 uppercase text-xs">
                      <tr>
                        <th className="px-6 py-4 font-bold">Child Name</th>
                        <th className="px-6 py-4 font-bold">Program</th>
                        <th className="px-6 py-4 font-bold">Status</th>
                        <th className="px-6 py-4 font-bold">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-100">Emma Wilson</td>
                        <td className="px-6 py-4">Toddler Program</td>
                        <td className="px-6 py-4"><span className="px-2.5 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-[10px] font-black tracking-wider uppercase">Pending</span></td>
                        <td className="px-6 py-4 text-xs">Oct 24, 2023</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-100">Noah Brown</td>
                        <td className="px-6 py-4">Preschool</td>
                        <td className="px-6 py-4"><span className="px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-[10px] font-black tracking-wider uppercase">Approved</span></td>
                        <td className="px-6 py-4 text-xs">Oct 23, 2023</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-100">Liam Smith</td>
                        <td className="px-6 py-4">Infant Care</td>
                        <td className="px-6 py-4"><span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-[10px] font-black tracking-wider uppercase">Enrolled</span></td>
                        <td className="px-6 py-4 text-xs">Oct 21, 2023</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      case 'profile':
        return <CenterProfile />;
      case 'center':
        return <CenterDetails />;
      case 'messages':
        return <Messages />;
      case 'finance':
        return <FinanceSubscription />;
      default:
        return renderPlaceholder(activeRoute);
    }
  };

  const getPageTitle = () => {
    switch (activeRoute) {
      case 'profile': return 'Center Profile';
      case 'messages': return 'Messages';
      case 'center': return 'Center Details';
      case 'finance': return 'Finance & Subscriptions';
      default: return 'Provider Dashboard';
    }
  };

  const getPageSubtitle = () => {
    switch (activeRoute) {
      case 'profile': return 'Manage your internal center profile, programs, and staff';
      case 'messages': return 'Chat with parents and ChildrenKARE support';
      case 'center': return 'Preview your public-facing center listing';
      case 'finance': return 'Manage billing, payments, and subscription plans';
      default: return `Welcome back, ${user.name.split(' ')[0]}`;
    }
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden font-sans transition-colors duration-300">
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
          theme={theme}
        />

        <div className="flex-1 flex flex-col h-full overflow-hidden w-full">
          <Header 
            onMenuClick={() => setIsSidebarOpen(true)} 
            user={user}
            currentTheme={theme}
            setTheme={setTheme}
          />

          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 custom-scrollbar">
            <div className="max-w-7xl mx-auto space-y-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white transition-colors">
                    {getPageTitle()}
                  </h1>
                  <p className="text-slate-500 dark:text-slate-400 mt-1 transition-colors">
                    {getPageSubtitle()}
                  </p>
                </div>
              </div>
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;