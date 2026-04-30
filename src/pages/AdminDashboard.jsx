import React from 'react';
import { 
  LayoutDashboard, BookOpen, Mic2, Library, BarChart3, 
  Settings, LogOut, Info, Image as ImageIcon, Eye, AlertTriangle,
  UploadCloud, Plus, Trash2, Bell, User
} from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans flex flex-col">
      {/* Top Navigation */}
      <nav className="h-16 border-b border-gray-900 px-6 flex items-center justify-between bg-black z-10 relative">
        <div className="text-blood-red font-cinematic font-bold text-xl tracking-widest uppercase">
          HORROR_FORGE
        </div>
        <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-500">
          <span className="hover:text-white cursor-pointer transition-colors">Explore</span>
          <span className="text-blood-red cursor-pointer">Forge</span>
          <span className="hover:text-white cursor-pointer transition-colors">Vault</span>
          <div className="flex items-center gap-4 ml-4">
            <Bell size={16} className="cursor-pointer hover:text-white transition-colors" />
            <User size={16} className="cursor-pointer hover:text-blood-red transition-colors" />
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-900 bg-[#0a0a0a] flex flex-col justify-between py-6">
          <div>
            <div className="px-8 mb-8">
              <h3 className="text-white font-bold tracking-wider text-sm">ARCHIVE_ADMIN</h3>
              <p className="text-blood-red text-[10px] uppercase font-bold tracking-widest mt-1">PROTOCOL: RED</p>
            </div>
            
            <nav className="flex flex-col gap-1">
              <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
              <SidebarItem icon={<BookOpen size={18} />} label="Stories" active />
              <SidebarItem icon={<Mic2 size={18} />} label="Episodes" />
              <SidebarItem icon={<Library size={18} />} label="Library" />
              <SidebarItem icon={<BarChart3 size={18} />} label="Analytics" />
            </nav>
          </div>
          
          <nav className="flex flex-col gap-1 mt-auto">
            <SidebarItem icon={<Settings size={18} />} label="Settings" />
            <SidebarItem icon={<LogOut size={18} />} label="Logout" />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-[#080808]">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-4xl font-cinematic font-bold text-white uppercase mb-2">ADD NEW STORY</h1>
                <p className="text-sm text-gray-500 max-w-xl">
                  Initialize a new narrative protocol. Define the core metadata and establish the atmospheric anchors for your audience.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2 border border-gray-700 hover:border-gray-500 text-xs font-bold uppercase tracking-widest transition-colors">
                  Save Draft
                </button>
                <button className="px-6 py-2 bg-blood-red hover:bg-red-800 text-white text-xs font-bold uppercase tracking-widest transition-colors">
                  Deploy Narrative
                </button>
              </div>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Column (Main Form) */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* BASIC INFO */}
                <div className="bg-[#0f0f0f] border border-gray-900 rounded p-6">
                  <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-4">
                    <Info size={18} className="text-blood-red" />
                    <h2 className="text-white font-bold tracking-wider">BASIC INFO</h2>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Title</label>
                      <input type="text" placeholder="Enter story title..." className="w-full bg-[#141414] border border-gray-800 text-sm px-4 py-2 focus:outline-none focus:border-blood-red text-white" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Subtitle</label>
                      <input type="text" placeholder="The secondary hook..." className="w-full bg-[#141414] border border-gray-800 text-sm px-4 py-2 focus:outline-none focus:border-blood-red text-white" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Genre / Category</label>
                      <select className="w-full bg-[#141414] border border-gray-800 text-sm px-4 py-2 focus:outline-none focus:border-blood-red text-gray-300">
                        <option>Psychological Horror</option>
                        <option>Supernatural</option>
                        <option>Folk Horror</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Content Rating</label>
                      <select className="w-full bg-[#141414] border border-gray-800 text-sm px-4 py-2 focus:outline-none focus:border-blood-red text-gray-300">
                        <option>Adult (18+)</option>
                        <option>Mature (16+)</option>
                        <option>Teen (13+)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Short Description</label>
                    <textarea rows="3" placeholder="A brief, haunting summary for the preview cards..." className="w-full bg-[#141414] border border-gray-800 text-sm px-4 py-2 focus:outline-none focus:border-blood-red text-white resize-none"></textarea>
                  </div>
                </div>

                {/* CONTENT & METADATA */}
                <div className="bg-[#0f0f0f] border border-gray-900 rounded p-6">
                  <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-4">
                    <BookOpen size={18} className="text-blood-red" />
                    <h2 className="text-white font-bold tracking-wider">CONTENT & METADATA</h2>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Long Description / Synopsis</label>
                    <div className="border border-gray-800 bg-[#141414]">
                      {/* Fake Toolbar */}
                      <div className="flex gap-4 p-2 border-b border-gray-800 text-gray-500">
                        <span className="font-bold cursor-pointer hover:text-white">B</span>
                        <span className="italic cursor-pointer hover:text-white">I</span>
                        <span className="cursor-pointer hover:text-white">≡</span>
                        <span className="cursor-pointer hover:text-white">∞</span>
                      </div>
                      <textarea rows="6" placeholder="The full chronicle of the horror to come..." className="w-full bg-transparent text-sm px-4 py-4 focus:outline-none text-white resize-none"></textarea>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Tags (Comma Separated)</label>
                    <input type="text" placeholder="fog, isolated, supernatural, whispers..." className="w-full bg-[#141414] border border-gray-800 text-sm px-4 py-2 focus:outline-none focus:border-blood-red text-white" />
                  </div>
                </div>

                {/* EPISODE MANAGEMENT */}
                <div className="bg-[#0f0f0f] border border-gray-900 rounded p-6">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Mic2 size={18} className="text-blood-red" />
                      <h2 className="text-white font-bold tracking-wider">EPISODE MANAGEMENT</h2>
                    </div>
                    <button className="text-xs border border-blood-red text-blood-red hover:bg-blood-red hover:text-white px-3 py-1 flex items-center gap-1 transition-colors">
                      <Plus size={14} /> ADD EPISODE
                    </button>
                  </div>
                  
                  {/* Episode Row */}
                  <div className="bg-[#141414] border border-gray-800 p-4 flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-black flex items-center justify-center font-bold text-blood-red border border-gray-800">1</div>
                    <input type="text" placeholder="Episode Title" className="flex-1 bg-transparent border-b border-gray-800 focus:border-blood-red focus:outline-none text-sm px-2 py-1 text-white" />
                    <div className="flex items-center gap-2 border-b border-gray-800 px-2 py-1 flex-1">
                      <UploadCloud size={14} className="text-gray-500" />
                      <span className="text-xs text-gray-500 truncate">No file...</span>
                      <span className="text-[10px] text-blood-red cursor-pointer ml-auto uppercase font-bold">Upload</span>
                    </div>
                    <input type="text" placeholder="Duration (e.g. 12:40)" className="w-32 bg-transparent border-b border-gray-800 focus:border-blood-red focus:outline-none text-sm px-2 py-1 text-center text-white" />
                    <Trash2 size={16} className="text-gray-600 hover:text-blood-red cursor-pointer transition-colors" />
                  </div>

                  {/* Empty State */}
                  <div className="border border-dashed border-gray-800 p-8 flex flex-col items-center justify-center text-gray-600">
                    <Mic2 size={24} className="mb-2 opacity-50" />
                    <p className="text-sm italic">The silence is deafening. Add episodes to begin the broadcast.</p>
                  </div>
                </div>

              </div>

              {/* Right Column (Sidebar) */}
              <div className="space-y-6">
                
                {/* COVER MEDIA */}
                <div className="bg-[#0f0f0f] border border-gray-900 rounded p-6">
                  <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-4">
                    <ImageIcon size={18} className="text-blood-red" />
                    <h2 className="text-white font-bold tracking-wider">COVER MEDIA</h2>
                  </div>
                  
                  <div className="border border-dashed border-gray-700 bg-black/50 h-64 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blood-red transition-colors mb-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505635552518-3448ff116af3?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay group-hover:opacity-50 transition-opacity"></div>
                    <UploadCloud size={24} className="text-blood-red mb-2 relative z-10" />
                    <p className="text-sm font-bold text-white relative z-10 uppercase tracking-widest">DROP IMAGE HERE</p>
                    <p className="text-[10px] text-gray-500 relative z-10 mt-1">PNG, JPG up to 10MB</p>
                  </div>

                  <div className="bg-[#141414] p-4 text-xs border border-gray-800">
                    <p className="text-blood-red font-bold mb-2 uppercase tracking-widest text-[10px]">Specifications</p>
                    <ul className="list-disc list-inside text-gray-500 space-y-1">
                      <li>Recommended: 1200 x 1600px</li>
                      <li>Safe area for title: Top 15%</li>
                      <li>Vignette applied automatically</li>
                    </ul>
                  </div>
                </div>

                {/* PROTOCOL STATUS */}
                <div className="bg-[#0f0f0f] border border-gray-900 rounded p-6">
                  <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-4">
                    <Eye size={18} className="text-blood-red" />
                    <h2 className="text-white font-bold tracking-wider">PROTOCOL STATUS</h2>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Current State</span>
                      <span className="bg-[#1a1a1a] text-gray-300 px-3 py-1 text-xs font-bold uppercase tracking-widest border border-gray-800">Draft</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Visibility</span>
                      <div className="flex bg-[#1a1a1a] border border-gray-800 text-xs font-bold uppercase">
                        <button className="px-3 py-1 bg-blood-red text-white">Private</button>
                        <button className="px-3 py-1 text-gray-500 hover:text-white">Public</button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-gray-800">
                    <label className="flex items-center gap-3 text-xs text-gray-400 uppercase tracking-wider cursor-pointer">
                      <input type="checkbox" className="accent-blood-red bg-dark-gray border-gray-800" />
                      ENABLE USER COMMENTS
                    </label>
                    <label className="flex items-center gap-3 text-xs text-gray-400 uppercase tracking-wider cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-blood-red bg-dark-gray border-gray-800" />
                      <span className="text-gray-300">NOTIFY SUBSCRIBERS ON DEPLOY</span>
                    </label>
                  </div>
                </div>

                {/* DANGER ZONE */}
                <div className="bg-[#0a0505] border border-[#2a0a0a] rounded p-6">
                  <p className="text-[10px] text-blood-red font-bold uppercase tracking-widest mb-4">Danger Zone</p>
                  <button className="w-full border border-[#3a0a0a] text-[#8a2a2a] hover:bg-[#1a0505] hover:border-blood-red hover:text-blood-red py-3 text-xs font-bold uppercase tracking-widest transition-all">
                    Archive Project
                  </button>
                </div>

              </div>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => {
  return (
    <div className={`flex items-center gap-4 px-8 py-3 cursor-pointer transition-colors ${
      active 
        ? 'bg-[#150505] border-l-2 border-blood-red text-white' 
        : 'border-l-2 border-transparent text-gray-500 hover:bg-[#111] hover:text-gray-300'
    }`}>
      {icon}
      <span className="text-sm font-medium tracking-wide">{label}</span>
    </div>
  );
};

export default AdminDashboard;
