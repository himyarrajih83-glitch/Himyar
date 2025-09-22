import React from 'react';

export const MemoryPanel = () => {
    return (
        <div className="flex flex-col h-full bg-aether-bg p-4">
            <h2 className="text-lg font-bold text-aether-primary mb-3">Long-term Memory</h2>

            {/* Search and Filters */}
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Search memories..."
                    className="w-full bg-aether-dark rounded-lg p-2 mb-2 border border-transparent focus:border-aether-secondary focus:ring-0"
                />
                <div className="flex space-x-2">
                    <button className="text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded-full">All</button>
                    <button className="text-xs px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded-full">Notes</button>
                    <button className="text-xs px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded-full">Files</button>
                    <button className="text-xs px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded-full">Links</button>
                </div>
            </div>

            {/* Memory List */}
            <div className="flex-1 overflow-y-auto mb-3 p-2 bg-aether-dark rounded-lg">
                 <p className="text-aether-text-secondary text-center py-4">Memories will be listed here.</p>
                 {/* Placeholder for MemoryItem */}
            </div>

            {/* Add Memory Form */}
            <div>
                 <input
                    type="text"
                    placeholder="Add a new memory..."
                    className="w-full bg-aether-dark rounded-lg p-2 border border-transparent focus:border-aether-primary focus:ring-0"
                />
            </div>
        </div>
    );
};
