// ChatInput.tsx
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { uploadFile } from '@junobuild/core-peer';
import { nanoid } from 'nanoid';
import { useState } from 'react';

type ChatInputProps = {
  darkMode: boolean;
  onSubmitMessage: (event: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
};

export default function ChatInput({
  darkMode,
  onSubmitMessage,
  value,
  handleInputChange,
}: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files ? e.target.files[0] : null;
    setFile(uploadedFile);
  };

  const handleSubmit = async () => {
    if (!message && !file) return;

    try {
      if (file) {
        const result = await uploadFile({
          data: file,
          collection: 'pdfs',
          token: nanoid(),
        });
        console.log('Archivo subido:', result);
      }
      setMessage('');
      setFile(null);
    } catch (error) {
      console.error('Error al subir el archivo:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto relative">
      <form className="relative" onSubmit={onSubmitMessage}>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          className={`w-full p-4 pr-20 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-0 transition-all duration-300 ${
            darkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
          }`}
          placeholder="Escribe tu mensaje aquí..."
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
          {/*  <label
            htmlFor="file-upload"
            className="p-2 rounded-full bg-transparent hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors duration-300 cursor-pointer"
          >
            <PaperClipIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              id="file-upload"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileChange}
            />
          </label> */}
          <button
            className={`p-2 rounded-full ${value ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'} transition-colors duration-300`}
            disabled={!value}
            type="submit"
          >
            <ArrowUpIcon
              className={`h-5 w-5 ${message || file ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
