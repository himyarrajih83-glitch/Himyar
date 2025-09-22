import React from 'react';

// Placeholder imports for components that will be created in the next steps.
// I will create these components in a new `src/components/cortex` directory
// and the AetherOSView in the `views` directory.
import { ChatPanel } from '../components/cortex/ChatPanel';
import { MemoryPanel } from '../components/cortex/MemoryPanel';
import { AetherOSView } from './AetherOSView';

export const CortexView = () => {
    return (
        <div className="flex flex-1 h-full">
            {/* Left Panel */}
            <div className="w-[450px] flex-shrink-0 flex flex-col border-r border-gray-800">
                {/* Chat Panel */}
                <div className="h-[65%] border-b border-gray-800">
                    <ChatPanel />
                </div>
                {/* Memory Panel */}
                <div className="h-[35%]">
                    <MemoryPanel />
                </div>
            </div>

            {/* Main Content: AetherOS */}
            <div className="flex-1">
                <AetherOSView />
            </div>
        </div>
    );
};
