import React from 'react';

export const ChatPanel = () => {
    return (
        <div className="flex flex-col h-full bg-aether-bg p-4">
            {/* Message Display Area */}
            <div className="flex-1 overflow-y-auto mb-4 p-2 bg-aether-dark rounded-lg">
                <p className="text-aether-text-secondary text-center py-4">Chat history will appear here.</p>
                {/* Placeholder for ChatMessageItem */}
            </div>

            {/* Drag and Drop Zone */}
            <div className="absolute inset-0 border-2 border-dashed border-aether-primary rounded-lg flex items-center justify-center bg-aether-bg bg-opacity-80 pointer-events-none opacity-0 transition-opacity duration-300">
                <p className="text-aether-primary font-bold">Drop files to attach</p>
            </div>

            {/* Input Area */}
            <div className="relative">
                <textarea
                    className="w-full bg-aether-dark rounded-lg p-3 pr-28 resize-none border border-transparent focus:border-aether-primary focus:ring-0 transition-colors"
                    placeholder="Type your message to Aether..."
                    rows={3}
                />
                <div className="absolute bottom-2 right-2 flex items-center space-x-2">
                    <button title="Attach File" className="p-1 text-aether-text-secondary hover:text-aether-primary">
                        {/* Placeholder for Paperclip Icon */}
                        📎
                    </button>
                    <button title="Use Microphone" className="p-1 text-aether-text-secondary hover:text-aether-primary">
                        {/* Placeholder for Mic Icon */}
                        🎤
                    </button>
                    <button title="Paste from Clipboard" className="p-1 text-aether-text-secondary hover:text-aether-primary">
                        {/* Placeholder for Clipboard Icon */}
                        📋
                    </button>
                </div>
            </div>
        </div>
    );
};
