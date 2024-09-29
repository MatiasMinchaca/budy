// Chatbot.tsx
'use client';

import { useChat } from 'ai/react';
import { DogIcon } from 'lucide-react';
import { FormEvent, useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown';

import { cn } from '@/lib/utils';

import Sidebar from './Sidebar';
import ChatInput from './chatInput';

export default function Chatbot() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } = useChat({
    api: 'http://127.0.0.1:5050/api',
  });

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading) {
      stop();
      return;
    }

    handleSubmit(e);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="flex h-screen bg-[#004C8C59]">
      {/* Sidebar with animation */}
      <div
        className={`fixed inset-y-0 left-0 z-30 transform transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} darkMode={darkMode} />
      </div>

      {/* Chat area */}
      <div className="flex-grow flex flex-col max-w-3xl mx-auto pt-10 dark:bg-gray-900">
        {/*  <Header
          onOpenSidebar={() => setSidebarOpen(true)}
          sidebarOpen={sidebarOpen}
          darkMode={darkMode}
          onToggleDarkMode={toggleDarkMode}
        /> */}

        {/* Chat messages area */}
        <main className="flex-grow overflow-y-auto p-4">
          <div className="space-y-4 h-full" ref={chatRef}>
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-gray-800">
                  <DogIcon size={32} />
                </div>
                <div className="text-gray-800">
                  Si necesitas ayuda o queres saber algo, solo hazmelo saber!
                </div>
              </div>
            )}
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
                    <DogIcon size={22} />
                  </span>
                )}
                <div
                  className={cn(
                    m.role === 'user'
                      ? 'bg-gray-700 text-white rounded-full rounded-br-none w-fit py-2 px-4'
                      : 'bg-gray-600 text-white py-2 px-4 rounded-3xl rounded-tl-none w-fit',
                  )}
                >
                  <Markdown>{m.content}</Markdown>
                </div>
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
          />
        </footer>
      </div>
    </div>
  );
}
