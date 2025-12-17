import React, { useState } from 'react';
import { Card } from './Card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

type FilterType = 'Weekly' | 'Monthly' | 'Yearly';

const DATA = {
  Weekly: [
    { name: 'Mon', total: 12, wins: 8, lost: 4 },
    { name: 'Tue', total: 19, wins: 12, lost: 7 },
    { name: 'Wed', total: 15, wins: 10, lost: 5 },
    { name: 'Thu', total: 22, wins: 15, lost: 7 },
    { name: 'Fri', total: 30, wins: 20, lost: 10 },
    { name: 'Sat', total: 10, wins: 5, lost: 5 },
    { name: 'Sun', total: 8, wins: 4, lost: 4 },
  ],
  Monthly: [
    { name: 'W1', total: 80, wins: 50, lost: 30 },
    { name: 'W2', total: 95, wins: 65, lost: 30 },
    { name: 'W3', total: 110, wins: 70, lost: 40 },
    { name: 'W4', total: 130, wins: 85, lost: 45 },
  ],
  Yearly: [
    { name: 'Q1', total: 400, wins: 280, lost: 120 },
    { name: 'Q2', total: 550, wins: 400, lost: 150 },
    { name: 'Q3', total: 600, wins: 420, lost: 180 },
    { name: 'Q4', total: 750, wins: 500, lost: 250 },
  ],
};

export const ChartsSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('Weekly');
  const data = DATA[filter];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">Offer Performance</h3>
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
          {(['Weekly', 'Monthly', 'Yearly'] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                filter === f
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Total Offers Chart */}
        <Card className="flex flex-col h-[320px]" noPadding>
          <div className="p-4 border-b border-slate-50 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Offers</p>
            <h4 className="text-2xl font-bold text-slate-800 dark:text-white mt-1">
              {data.reduce((acc, item) => acc + item.total, 0)}
            </h4>
          </div>
          <div className="flex-1 w-full p-2 min-h-0">
            <ResponsiveContainer width="100%" height="100%" debounce={1}>
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  itemStyle={{ color: '#60a5fa' }}
                />
                <Area type="monotone" dataKey="total" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorTotal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Wins Chart */}
        <Card className="flex flex-col h-[320px]" noPadding>
          <div className="p-4 border-b border-slate-50 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Wins</p>
            <h4 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
              {data.reduce((acc, item) => acc + item.wins, 0)}
            </h4>
          </div>
          <div className="flex-1 w-full p-2 min-h-0">
            <ResponsiveContainer width="100%" height="100%" debounce={1}>
              <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                   itemStyle={{ color: '#10b981' }}
                />
                <Bar dataKey="wins" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Lost Chart */}
        <Card className="flex flex-col h-[320px]" noPadding>
          <div className="p-4 border-b border-slate-50 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lost</p>
            <h4 className="text-2xl font-bold text-rose-600 dark:text-rose-400 mt-1">
              {data.reduce((acc, item) => acc + item.lost, 0)}
            </h4>
          </div>
          <div className="flex-1 w-full p-2 min-h-0">
            <ResponsiveContainer width="100%" height="100%" debounce={1}>
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                   itemStyle={{ color: '#fb7185' }}
                />
                <Area type="monotone" dataKey="lost" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};