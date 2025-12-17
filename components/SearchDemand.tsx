import React, { useState, useMemo } from 'react';
import { Card } from './Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { MapPin, ChevronDown } from 'lucide-react';

const USA_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", 
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", 
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", 
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const BASE_DEMAND_DATA = [
  { name: 'Daycares', value: 45, color: '#3b82f6' },
  { name: 'Preschools', value: 25, color: '#10b981' },
  { name: 'Childcare', value: 20, color: '#6366f1' },
  { name: 'Infant Daycares', value: 10, color: '#f59e0b' },
];

export const SearchDemand: React.FC = () => {
  const [selectedState, setSelectedState] = useState("California");

  // Simulate data changing slightly based on the state for visual feedback
  const demandData = useMemo(() => {
    const seed = selectedState.length;
    return BASE_DEMAND_DATA.map((item, idx) => ({
      ...item,
      value: Math.max(5, item.value + (seed % (idx + 2)) - 2)
    }));
  }, [selectedState]);

  return (
    <Card className="flex flex-col h-full overflow-visible">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h3 className="font-bold text-slate-800 dark:text-white text-xl">Search Demand Trend</h3>
          <p className="text-sm text-slate-500 mt-1">Consumer search intent for childcare services (Last 3 Months)</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
              <MapPin size={16} />
            </div>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none cursor-pointer transition-all min-w-[200px]"
            >
              {USA_STATES.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Chart Column */}
        <div className="lg:col-span-7 h-[350px] relative">
          <ResponsiveContainer width="100%" height="100%" debounce={1}>
            <PieChart>
              <Pie
                data={demandData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={8}
                dataKey="value"
                animationBegin={0}
                animationDuration={800}
              >
                {demandData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '12px', 
                  color: '#fff',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
                itemStyle={{ color: '#fff', fontSize: '13px' }}
                formatter={(value: number) => [`${value}%`, 'Market Share']}
              />
            </PieChart>
          </ResponsiveContainer>
          
          {/* Centered label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">In {selectedState}</span>
            <span className="text-slate-800 dark:text-white text-3xl font-black">100%</span>
            <span className="text-slate-400 text-[10px] font-medium">Total Demand</span>
          </div>
        </div>

        {/* Legend/Details Column */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
            <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-blue-500 rounded-full"></span>
              Category Breakdown
            </h4>
            <div className="space-y-5">
              {demandData.map((item) => (
                <div key={item.name} className="group cursor-default">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out" 
                      style={{ 
                        backgroundColor: item.color, 
                        width: `${item.value}%`,
                        boxShadow: `0 0 10px ${item.color}40`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100/50 dark:border-blue-800/20">
            <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
              <strong>Pro Insight:</strong> Search volume for <b>{demandData[0].name}</b> in {selectedState} has increased by 12% since last month.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};