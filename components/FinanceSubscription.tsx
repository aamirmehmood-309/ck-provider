import React, { useState } from 'react';
import { 
  CreditCard, 
  Building2, 
  Check, 
  Plus, 
  Trash2, 
  FileText, 
  Download, 
  ShieldCheck, 
  AlertCircle, 
  Wallet,
  ArrowUpRight,
  Info,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { Card } from './Card';

interface PaymentMethod {
  id: string;
  type: 'card' | 'bank';
  brand?: string;
  last4: string;
  isDefault: boolean;
  expiry?: string;
  bankName?: string;
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Failed';
}

export const FinanceSubscription: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'card' | 'bank'>('card');
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    { id: '1', type: 'card', brand: 'Visa', last4: '4242', isDefault: true, expiry: '12/26' },
    { id: '2', type: 'bank', bankName: 'Chase Bank', last4: '8812', isDefault: false },
  ]);

  const transactions: Transaction[] = [
    { id: 'INV-001', date: 'Oct 01, 2023', description: 'Professional Plan Monthly Subscription', amount: '$49.00', status: 'Paid' },
    { id: 'INV-002', date: 'Sep 01, 2023', description: 'Professional Plan Monthly Subscription', amount: '$49.00', status: 'Paid' },
    { id: 'INV-003', date: 'Aug 01, 2023', description: 'Professional Plan Monthly Subscription', amount: '$49.00', status: 'Paid' },
  ];

  const plans = [
    {
      name: 'Free Plan',
      price: '$0',
      active: false,
      features: ['Basic Profile', 'Limited Messages', '1 Authorized User'],
      color: 'slate'
    },
    {
      name: 'Professional',
      price: '$49',
      active: true,
      features: ['Full Profile Customization', 'Unlimited Messages', 'Marketing Support', '5 Authorized Users', 'Priority Support'],
      color: 'blue'
    },
    {
      name: 'Enterprise',
      price: '$199',
      active: false,
      features: ['Custom Domains', 'Advanced Analytics', 'Unlimited Users', 'Dedicated Account Manager', 'API Access'],
      color: 'emerald'
    }
  ];

  const handleSetDefault = (id: string) => {
    setPaymentMethods(methods => methods.map(m => ({
      ...m,
      isDefault: m.id === id
    })));
  };

  const handleRemove = (id: string) => {
    setPaymentMethods(methods => methods.filter(m => m.id !== id));
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* 1️⃣ Hero / Banner Section */}
      <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
        <img 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200" 
          alt="Finance Hero" 
          className="w-full h-full object-cover opacity-50 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Finance & Subscription</h1>
          <p className="text-slate-300 text-sm md:text-base font-medium mt-2 max-w-lg">
            Manage your billing cycles, payment methods, and subscription tiers to keep your center running smoothly.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 💳 Subscription Plan Section */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative flex flex-col h-full border-2 transition-all ${
                plan.active 
                ? 'border-blue-500 shadow-xl shadow-blue-500/10' 
                : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
              }`}>
                {plan.active && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    Current Plan
                  </div>
                )}
                <div className="mb-6">
                  <h4 className="text-lg font-black text-slate-800 dark:text-white">{plan.name}</h4>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                    <span className="text-slate-500 text-sm">/month</span>
                  </div>
                </div>
                <div className="flex-1 space-y-3 mb-8">
                  {plan.features.map(feature => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400 leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-3 rounded-xl font-black text-sm transition-all ${
                  plan.active 
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800' 
                  : 'bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800'
                }`}>
                  {plan.active ? 'Active' : 'Upgrade Plan'}
                </button>
              </Card>
            ))}
          </div>

          {/* 💰 Financial Setup Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 dark:text-white px-2">Financial Setup</h3>
            
            <Card noPadding>
              <div className="flex border-b border-slate-100 dark:border-slate-700">
                <button 
                  onClick={() => setActiveTab('card')}
                  className={`flex-1 py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all border-b-2 ${
                    activeTab === 'card' 
                    ? 'border-blue-500 text-blue-600 bg-blue-50/30 dark:bg-blue-900/10' 
                    : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                >
                  <CreditCard size={16} /> Credit Card
                </button>
                <button 
                  onClick={() => setActiveTab('bank')}
                  className={`flex-1 py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all border-b-2 ${
                    activeTab === 'bank' 
                    ? 'border-blue-500 text-blue-600 bg-blue-50/30 dark:bg-blue-900/10' 
                    : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                >
                  <Building2 size={16} /> US Bank Account (ACH)
                </button>
              </div>

              <div className="p-8">
                {activeTab === 'card' ? (
                  <form className="space-y-6 max-w-2xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex gap-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" alt="Visa" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" alt="Mastercard" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" className="h-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" alt="Amex" />
                      </div>
                      <div className="h-px flex-1 bg-slate-100 dark:border-slate-700"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cardholder Name</label>
                        <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-500/20" />
                      </div>
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Card Number</label>
                        <div className="relative">
                          <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-500/20" />
                          <CreditCard size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Expiry Date</label>
                        <input type="text" placeholder="MM / YY" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-500/20" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">CVV</label>
                        <input type="text" placeholder="123" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-500/20" />
                      </div>
                    </div>
                    <button className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
                      <Plus size={18} /> Add Credit Card
                    </button>
                  </form>
                ) : (
                  <form className="space-y-6 max-w-2xl mx-auto">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 flex items-start gap-3 mb-8">
                      <Info size={18} className="text-blue-500 shrink-0 mt-0.5" />
                      <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 leading-relaxed">
                        ACH transfers take 3-5 business days to verify. You will see two small deposits in your account to confirm ownership.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Account Holder Name</label>
                        <input type="text" placeholder="STEM Child Care Inc" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-500/20" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Routing Number</label>
                        <input type="text" placeholder="123456789" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-500/20" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Account Number</label>
                        <input type="text" placeholder="0000000000" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-500/20" />
                      </div>
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Account Type</label>
                        <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none">
                          <option>Checking</option>
                          <option>Savings</option>
                        </select>
                      </div>
                    </div>
                    <button className="w-full md:w-auto px-8 py-3 bg-slate-900 dark:bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2">
                      <Building2 size={18} /> Add Bank Account
                    </button>
                  </form>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* 📄 Sidebar (Saved Methods & Billing History) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Saved Payment Methods */}
          <div className="space-y-6">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Wallet size={14} className="text-blue-500" /> Saved Methods
            </h4>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className={`p-5 rounded-2xl border transition-all ${
                  method.isDefault 
                  ? 'bg-white dark:bg-slate-800 border-blue-200 dark:border-blue-900 shadow-lg shadow-blue-500/5' 
                  : 'bg-slate-50 dark:bg-slate-900 border-transparent hover:border-slate-200 dark:hover:border-slate-700'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                        {method.type === 'card' ? <CreditCard size={20} className="text-blue-500" /> : <Building2 size={20} className="text-slate-400" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold text-slate-800 dark:text-white">
                            {method.type === 'card' ? method.brand : method.bankName}
                          </p>
                          {method.isDefault && (
                            <span className="text-[8px] font-black bg-blue-500 text-white px-1.5 py-0.5 rounded uppercase tracking-tighter">Default</span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 font-medium">•••• •••• •••• {method.last4}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {!method.isDefault && (
                        <button 
                          onClick={() => handleSetDefault(method.id)}
                          className="p-1.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-all"
                          title="Set as Default"
                        >
                          <Check size={14} />
                        </button>
                      )}
                      <button 
                        onClick={() => handleRemove(method.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-md transition-all"
                        title="Remove"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  {method.type === 'card' && (
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700">
                      <Calendar size={12} className="text-slate-300" />
                      <span className="text-[10px] font-bold text-slate-400">Expires {method.expiry}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Billing History Card */}
          <div className="space-y-6">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <FileText size={14} className="text-emerald-500" /> Recent Invoices
            </h4>
            <Card noPadding className="shadow-xl shadow-slate-900/5">
              <div className="divide-y divide-slate-100 dark:divide-slate-700">
                {transactions.map((tx) => (
                  <div key={tx.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{tx.id}</span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">{tx.amount}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate pr-4">{tx.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${tx.status === 'Paid' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                        <span className="text-[10px] font-black text-slate-400 uppercase">{tx.status}</span>
                      </div>
                      <button className="text-[10px] font-black text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                        <Download size={10} /> PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 text-xs font-black text-slate-400 uppercase tracking-widest border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                Full Billing History <ArrowUpRight size={14} />
              </button>
            </Card>
          </div>

          <div className="p-5 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-800 flex items-start gap-3">
            <ShieldCheck size={20} className="text-emerald-500 shrink-0 mt-1" />
            <div>
              <p className="text-xs font-black text-emerald-800 dark:text-emerald-400 uppercase tracking-widest mb-1">Secure Billing</p>
              <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 leading-relaxed">
                All transactions are encrypted and processed via Stripe. We do not store full card numbers on our servers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
