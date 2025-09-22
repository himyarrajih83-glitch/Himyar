import React, { useState, useEffect } from 'react';
import { View } from './types';
import { Sidebar } from './components/Sidebar';
import { IconHelp } from './components/icons';

// Placeholder for the view components
const ViewRenderer = ({ activeView }: { activeView: View }) => {
    return (
        <div className="flex-1 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-aether-text-secondary opacity-20">
                {activeView}
            </h1>
        </div>
    );
}

export const App = () => {
    const [activeView, setActiveView] = useState<View>(View.Cortex);

    // Global keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === '?' && event.shiftKey) {
                console.log('Open Help Modal');
                // Later: openHelpModal();
            }
            if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                console.log('Open Oracle');
                // Later: openOracle();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="flex h-screen bg-aether-bg text-aether-text-primary font-sans">
            <Sidebar activeView={activeView} setActiveView={setActiveView} />
            <main className="flex-1 flex flex-col">
                {/* Header */}
                <header className="flex items-center justify-between h-16 px-6 border-b border-gray-800">
                    <div className="flex items-center space-x-4">
                         <h1 className="text-2xl font-bold text-aether-primary">أثير</h1>
                    </div>
                    <button className="p-2 rounded-full text-aether-text-secondary hover:bg-gray-800 hover:text-aether-text-primary">
                        <IconHelp className="w-6 h-6" />
                    </button>
                </header>

                {/* Main Content */}
                <ViewRenderer activeView={activeView} />
            </main>
        </div>
    );
};
