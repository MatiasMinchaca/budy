// Chatbot.tsx
"use client";

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './header';
import ChatInput from './chatInput';

type ChatbotProps = {
    isInitialized: boolean;
};

export default function Chatbot({ isInitialized }: ChatbotProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
            {/* Sidebar with animation */}
            <div
                className={`fixed inset-y-0 left-0 z-30 transform transition-all duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <Sidebar onClose={() => setSidebarOpen(false)} darkMode={darkMode} />
            </div>

            {/* Chat area */}
            <div className="flex-grow flex flex-col bg-[#004C8C59] dark:bg-gray-900">
                <Header
                    onOpenSidebar={() => setSidebarOpen(true)}
                    sidebarOpen={sidebarOpen}
                    darkMode={darkMode}
                    onToggleDarkMode={toggleDarkMode}
                />

                {/* Chat messages area */}
                <main className="flex-grow overflow-y-auto p-4">
                    <div className="max-w-3xl mx-auto space-y-4">
                        {/* mensajes*/}
                    </div>
                </main>

                {/* Input area */}
                <footer className="p-4">
                    <ChatInput darkMode={darkMode} isInitialized={isInitialized} />
                </footer>
            </div>
        </div>
    );
}
