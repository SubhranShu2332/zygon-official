import React from 'react';
import { Home, Heart, PlusCircle, MessageCircle, Search, Menu } from 'lucide-react';

const Navigation = () => {
  return (
    <>
      {/* Mobile Tab Bar - shows only on small screens */}
      <nav className="fixed bottom-0 left-0 right-0 p-4 md:hidden">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <TabButton icon={<Home size={24} />} label="Fun " />
          <TabButton icon={<Heart size={24} />} label="Cultural " />
          <TabButton icon={<PlusCircle size={24} />} label="Technical " />
          <TabButton icon={<MessageCircle size={24} />} label="Sports Events"  />
        </div>
      </nav>

      {/* Desktop Sidebar - shows only on medium screens and up */}
      <nav className="hidden md:flex fixed left-0 top-0 bottom-0 w-64 bg-white shadow-lg flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-purple-500">Dashboard</h1>
        </div>
        
        <div className="flex-1 p-4">
          <SidebarButton icon={<Home size={20} />} label="Home" />
          <SidebarButton icon={<Heart size={20} />} label="Favorites" active />
          <SidebarButton icon={<PlusCircle size={20} />} label="Add new" />
          <SidebarButton icon={<MessageCircle size={20} />} label="Chat" />
          <SidebarButton icon={<Search size={20} />} label="Search" />
        </div>

        <div className="p-4 border-t">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-500 transition-colors w-full">
            <Menu size={20} />
            <span>Menu</span>
          </button>
        </div>
      </nav>
    </>
  );
};

// Mobile tab button component
const TabButton = ({ icon, label, active = false }) => (
  <button className="flex flex-col items-center">
    <div className={`${active ? 'text-cyan-300' : 'text-white'}`}>
      {icon}
    </div>
    <span className={`text-xs mt-1 ${active ? 'text-cyan-300' : 'text-white'}`}>
      {label}
    </span>
  </button>
);

// Desktop sidebar button component
const SidebarButton = ({ icon, label, active = false }) => (
  <button 
    className={`
      flex items-center space-x-3 w-full p-3 rounded-lg mb-2
      ${active 
        ? 'bg-purple-100 text-purple-500' 
        : 'text-gray-600 hover:bg-purple-50 hover:text-purple-500'
      }
      transition-colors
    `}
  >
    <span>{icon}</span>
    <span className="font-medium">{label}</span>
  </button>
);

export default Navigation;