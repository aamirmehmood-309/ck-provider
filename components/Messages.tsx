import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Paperclip, 
  Smile, 
  Send, 
  MoreVertical, 
  Phone, 
  Video, 
  CheckCheck,
  Circle
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'me' | 'them';
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
}

interface ChatSession {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  online: boolean;
  type: 'parent' | 'support';
  messages: Message[];
}

const MOCK_CHATS: ChatSession[] = [
  {
    id: '1',
    name: 'Jessica Bloom',
    avatar: 'https://picsum.photos/id/101/100/100',
    lastMessage: 'Is the toddler program still open for registration?',
    time: '10:45 AM',
    unreadCount: 2,
    online: true,
    type: 'parent',
    messages: [
      { id: 'm1', text: 'Hi, I saw your center today.', sender: 'them', timestamp: '10:40 AM', status: 'read' },
      { id: 'm2', text: 'Is the toddler program still open for registration?', sender: 'them', timestamp: '10:45 AM', status: 'read' },
    ]
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://picsum.photos/id/102/100/100',
    lastMessage: 'Thanks for the update!',
    time: 'Yesterday',
    unreadCount: 0,
    online: false,
    type: 'parent',
    messages: [
      { id: 'm3', text: 'Your child had a great day today!', sender: 'me', timestamp: '4:30 PM', status: 'read' },
      { id: 'm4', text: 'Thanks for the update!', sender: 'them', timestamp: '4:35 PM', status: 'read' },
    ]
  },
  {
    id: '3',
    name: 'ChildrenKARE Support',
    avatar: 'https://picsum.photos/id/103/100/100',
    lastMessage: 'Your licensing update is being processed.',
    time: '9:15 AM',
    unreadCount: 1,
    online: true,
    type: 'support',
    messages: [
      { id: 'm5', text: 'Hello, I need help with my license upload.', sender: 'me', timestamp: 'Yesterday', status: 'read' },
      { id: 'm6', text: 'Your licensing update is being processed.', sender: 'them', timestamp: '9:15 AM', status: 'read' },
    ]
  },
  {
    id: '4',
    name: 'Technical Assistant',
    avatar: 'https://picsum.photos/id/104/100/100',
    lastMessage: 'How can I assist you with the dashboard today?',
    time: '2 days ago',
    unreadCount: 0,
    online: true,
    type: 'support',
    messages: [
      { id: 'm7', text: 'How can I assist you with the dashboard today?', sender: 'them', timestamp: 'Mon', status: 'read' },
    ]
  },
];

export const Messages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'parent' | 'support'>('parent');
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const filteredChats = MOCK_CHATS.filter(chat => chat.type === activeTab);
  const selectedChat = MOCK_CHATS.find(chat => chat.id === selectedChatId);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedChat?.messages]);

  const handleSendMessage = () => {
    if (!inputText.trim() || !selectedChatId) return;
    // In a real app, we'd update the state/database here
    setInputText('');
  };

  return (
    <div className="flex h-[calc(100vh-12rem)] bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-colors">
      
      {/* Sidebar - 30% */}
      <div className="w-full md:w-80 lg:w-96 flex flex-col border-r border-slate-100 dark:border-slate-800 shrink-0">
        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Messages</h2>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
            />
          </div>

          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <button 
              onClick={() => setActiveTab('parent')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'parent' 
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              Parents
            </button>
            <button 
              onClick={() => setActiveTab('support')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'support' 
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              Support
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {filteredChats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChatId(chat.id)}
              className={`w-full flex items-center gap-4 p-4 transition-all border-l-4 ${
                selectedChatId === chat.id 
                ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-500' 
                : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="relative shrink-0">
                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover border border-slate-200 dark:border-slate-700" />
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
                )}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate">{chat.name}</h4>
                  <span className="text-[10px] text-slate-400 font-medium">{chat.time}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate pr-2">{chat.lastMessage}</p>
              </div>
              {chat.unreadCount > 0 && (
                <div className="bg-emerald-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                  {chat.unreadCount}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area - 70% */}
      <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950/50 relative">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="h-16 px-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 transition-colors">
              <div className="flex items-center gap-4">
                <img src={selectedChat.avatar} alt={selectedChat.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">{selectedChat.name}</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Circle size={8} className={`${selectedChat.online ? 'fill-emerald-500 text-emerald-500' : 'fill-slate-300 text-slate-300'}`} />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                      {selectedChat.online ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all">
                  <Video size={18} />
                </button>
                <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all">
                  <Phone size={18} />
                </button>
                <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg transition-all">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
              {selectedChat.messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] md:max-w-[70%] px-4 py-2.5 rounded-2xl text-sm shadow-sm relative group ${
                    msg.sender === 'me' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700'
                  }`}>
                    <p className="leading-relaxed">{msg.text}</p>
                    <div className={`flex items-center justify-end gap-1.5 mt-1 ${msg.sender === 'me' ? 'text-blue-200' : 'text-slate-400'}`}>
                      <span className="text-[9px] font-bold uppercase tracking-tighter">{msg.timestamp}</span>
                      {msg.sender === 'me' && <CheckCheck size={12} className={msg.status === 'read' ? 'text-emerald-300' : 'text-blue-200'} />}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shrink-0 transition-colors">
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 p-2 rounded-2xl border border-slate-100 dark:border-slate-700 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors">
                  <Smile size={20} />
                </button>
                <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors">
                  <Paperclip size={20} />
                </button>
                <input 
                  type="text" 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message..." 
                  className="flex-1 bg-transparent border-none outline-none text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400"
                />
                <button 
                  onClick={handleSendMessage}
                  className={`p-2.5 rounded-xl transition-all ${
                    inputText.trim() 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-100 hover:bg-blue-500' 
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed scale-95'
                  }`}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400 rounded-full flex items-center justify-center mb-6">
              <MessageSquare size={40} className="opacity-50" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Your Conversations</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm">
              Select a parent or support agent from the left to start chatting. Keep your center communications organized and responsive.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

import { MessageSquare } from 'lucide-react'; // Needed for the empty state
