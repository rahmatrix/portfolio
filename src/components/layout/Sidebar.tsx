import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FileText,
  FolderGit2,
  User,
  Award,
  Github,
  Settings,
  X,
  PanelLeft,
} from 'lucide-react';

interface SidebarProps {
  isMobileOpen: boolean;
  onMobileClose: () => void;
  isExplorerOpen: boolean;
  onToggleExplorer: () => void;
}

const mainNavLinks = [
  { to: '/', label: 'Home', icon: FileText },
  { to: '/projects', label: 'Projects', icon: FolderGit2 },
  { to: '/about', label: 'About', icon: User },
  { to: '/certificates', label: 'Certificates', icon: Award },
];

const bottomNavLinks = [
  {
    href: 'https://github.com/rahmatrix',
    label: 'GitHub',
    icon: Github,
  },
  { to: '/settings', label: 'Settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({
  isMobileOpen,
  onMobileClose,
  isExplorerOpen,
  onToggleExplorer,
}) => {
  const location = useLocation();
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center p-3 text-sm rounded-lg hover:bg-header ${
      isActive ? 'bg-header' : ''
    }`;

  const handleActivityClick = (path: string) => {
    if (location.pathname === path) {
      onToggleExplorer();
    } else if (!isExplorerOpen) {
      onToggleExplorer();
    }
  };

  const sidebarContent = (
    <div className="flex h-full">
      <div className="w-16 bg-sidebar border-r border-main flex flex-col justify-between items-center py-4">
        <div className="flex flex-col space-y-4 items-center">
            <button
            onClick={onToggleExplorer}
            title="Toggle Explorer"
            className="text-main hover:text-white mb-2"
          >
            <PanelLeft className="w-7 h-7" />
          </button>
          {mainNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              title={link.label}
            >
              <link.icon className="w-7 h-7 hover:text-white" />
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          {bottomNavLinks.map((link) =>
            'href' in link ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
              >
                <link.icon className="w-7 h-7 hover:text-white" />
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                title={link.label}
              >
                <link.icon className="w-7 h-7 hover:text-white" />
              </NavLink>
            )
          )}
        </div>
      </div>
      {isExplorerOpen && (
        <div className="flex-1 bg-background p-4 w-48 overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold uppercase text-main">
              Explorer
            </h2>
            <button
              onClick={onMobileClose}
              className="md:hidden p-1 hover:bg-header rounded-lg"
            >
              <X size={18} />
            </button>
          </div>
          <nav className="flex flex-col space-y-1">
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={navLinkClass}
                onClick={onMobileClose}
              >
                <link.icon className="w-4 h-4 mr-3" />
                <span>{link.label}</span>
              </NavLink>
            ))}
        </nav>
        </div>
      )}
    </div>
  );

    return (
      <>
      <div
        className={`hidden md:flex flex-shrink-0 transition-all duration-300 ${
          isExplorerOpen ? 'w-64' : 'w-16'
        }`}
            >
              {sidebarContent}
      </div>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={onMobileClose}
          ></div>
          {/* Sidebar */}
          <div className="fixed left-0 top-0 h-full w-64 bg-sidebar shadow-xl">
            {sidebarContent}
          </div>
          </div>
        )}
      </>
    );
};

export default Sidebar;