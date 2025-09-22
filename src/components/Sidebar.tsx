import React from 'react';
import { View } from '../types';
import { IconCortex, IconDashboard, IconAtelier, IconWeaver } from './icons';

interface SidebarProps {
    activeView: View;
    setActiveView: (view: View) => void;
}

const navItems = [
    { view: View.Cortex, Icon: IconCortex, label: 'Cortex' },
    { view: View.Dashboard, Icon: IconDashboard, label: 'Dashboard' },
    { view: View.Atelier, Icon: IconAtelier, label: 'Atelier' },
    { view: View.Weaver, Icon: IconWeaver, label: 'Weaver' },
];

export const Sidebar = ({ activeView, setActiveView }: SidebarProps) => {
    return (
        <aside className="w-16 bg-aether-dark flex flex-col items-center py-4 space-y-6">
            {/* Logo Placeholder */}
            <div className="w-10 h-10 bg-aether-primary rounded-full animate-glowing-pulse" />

            <nav className="flex flex-col items-center space-y-4">
                {navItems.map(({ view, Icon, label }) => (
                    <button
                        key={view}
                        onClick={() => setActiveView(view)}
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                            activeView === view
                                ? 'bg-aether-primary text-white'
                                : 'text-aether-text-secondary hover:bg-aether-bg hover:text-aether-text-primary'
                        }`}
                        aria-label={label}
                        title={label}
                    >
                        <Icon className="w-7 h-7" />
                    </button>
                ))}
            </nav>
        </aside>
    );
};
