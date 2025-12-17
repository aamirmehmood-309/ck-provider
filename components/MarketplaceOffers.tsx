import React from 'react';
import { Card } from './Card';
import { Check, X, Undo, MoreHorizontal, Search } from 'lucide-react';

interface Offer {
  id: string;
  parentName: string;
  childAge: string;
  serviceType: string;
  amount: string;
  status: 'Pending' | 'Accepted' | 'Rejected';
  date: string;
}

const OFFERS: Offer[] = [
  { id: 'OFF-1024', parentName: 'Michael Chen', childAge: '2.5 Years', serviceType: 'Full-time', amount: '$1,450', status: 'Pending', date: 'Oct 28, 2023' },
  { id: 'OFF-1025', parentName: 'Jessica Bloom', childAge: '1.2 Years', serviceType: 'Part-time', amount: '$950', status: 'Accepted', date: 'Oct 27, 2023' },
  { id: 'OFF-1026', parentName: 'David Miller', childAge: '4 Years', serviceType: 'Preschool', amount: '$1,200', status: 'Rejected', date: 'Oct 26, 2023' },
  { id: 'OFF-1027', parentName: 'Sarah Connor', childAge: '3.5 Years', serviceType: 'Full-time', amount: '$1,450', status: 'Pending', date: 'Oct 25, 2023' },
  { id: 'OFF-1028', parentName: 'James Wilson', childAge: '2 Years', serviceType: 'Infant Care', amount: '$1,600', status: 'Pending', date: 'Oct 25, 2023' },
];

export const MarketplaceOffers: React.FC = () => {
  return (
    <Card className="overflow-hidden" noPadding>
      <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-800 dark:text-white text-lg">All Marketplace Offers</h3>
          <p className="text-sm text-slate-500">Manage incoming requests from parents in your area</p>
        </div>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search offers..." 
            className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm w-full focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all outline-none text-slate-700 dark:text-slate-200"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
          <thead className="bg-slate-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 uppercase text-xs font-bold">
            <tr>
              <th className="px-6 py-4">Offer ID</th>
              <th className="px-6 py-4">Parent Name</th>
              <th className="px-6 py-4">Child Age</th>
              <th className="px-6 py-4">Service</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {OFFERS.map((offer) => (
              <tr key={offer.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
                <td className="px-6 py-4 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">{offer.id}</td>
                <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-100">{offer.parentName}</td>
                <td className="px-6 py-4">{offer.childAge}</td>
                <td className="px-6 py-4">
                  <span className="text-slate-500 dark:text-slate-400 text-xs">{offer.serviceType}</span>
                </td>
                <td className="px-6 py-4 font-bold text-slate-800 dark:text-white">{offer.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                    offer.status === 'Accepted' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                    offer.status === 'Rejected' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400' :
                    'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                  }`}>
                    {offer.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500 text-xs">{offer.date}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-md transition-all shadow-sm" title="Accept">
                      <Check size={14} />
                    </button>
                    <button className="p-1.5 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-md transition-all shadow-sm" title="Reject">
                      <X size={14} />
                    </button>
                    <button className="p-1.5 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md transition-all shadow-sm" title="Counter Offer">
                      <Undo size={14} className="scale-x-[-1]" />
                    </button>
                    <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-md transition-colors">
                      <MoreHorizontal size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-slate-50 dark:bg-slate-700/30 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
        <p className="text-xs text-slate-500">Showing 5 of 24 results</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-xs font-medium text-slate-600 dark:text-slate-300 disabled:opacity-50" disabled>Previous</button>
          <button className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-xs font-medium text-slate-600 dark:text-slate-300">Next</button>
        </div>
      </div>
    </Card>
  );
};