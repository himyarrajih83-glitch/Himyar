import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// The AetherProvider will be properly implemented and wrapped here in a future step.
// For now, we render the App directly.

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
