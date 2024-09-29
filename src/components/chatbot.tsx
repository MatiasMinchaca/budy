// Chatbot.tsx
'use client';

import { initSatellite } from '@junobuild/core-peer';
import { useChat } from 'ai/react';
import { BotIcon } from 'lucide-react';
import { FormEvent, useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown';

import { cn } from '@/lib/utils';

import Sidebar from './Sidebar';
import ChatInput from './chatInput';
import Header from './header';

export default function Chatbot() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } = useChat({
    api: 'https://lmnwkf0r-5050.brs.devtunnels.ms/api/ask-query',
  });

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeSatellite = async () => {
      try {
        await initSatellite({
          workers: {
            auth: true,
          },
        });
        setIsInitialized(true);
        console.log('Juno initialized successfully');
      } catch (error) {
        console.error('Error initializing satellite:', error);
      }
    };

    initializeSatellite();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading) {
      stop();
      return;
    }

    console.log({ e });

    handleSubmit(e, {});
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`flex h-screen`}>
      {/* Sidebar with animation */}
      <div
        className={`fixed inset-y-0 left-0 z-30 transform transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
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
          <div className="max-w-3xl mx-auto space-y-4" ref={chatRef}>
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  'whitespace-pre-wrap flex flex-col gap-1',
                  m.role === 'user' ? 'items-end' : 'flex-row gap-3',
                )}
              >
                {m.role === 'assistant' && (
                  <span className="border border-gray-600 h-fit inline-block w-fit p-1 rounded-full">
                    <BotIcon size={22} />
                  </span>
                )}
                <p
                  className={cn(
                    m.role === 'user'
                      ? 'bg-gray-700 rounded-full w-fit py-2 px-4'
                      : 'bg-transparent',
                  )}
                >
                  <Markdown>{m.content}</Markdown>
                </p>
              </div>
            ))}
          </div>
        </main>

        {/* Input area */}
        <footer className="p-4">
          <ChatInput
            onSubmitMessage={onSubmit}
            value={input}
            handleInputChange={handleInputChange}
            darkMode={darkMode}
            isInitialized={isInitialized}
          />
        </footer>
      </div>
    </div>
  );
}
