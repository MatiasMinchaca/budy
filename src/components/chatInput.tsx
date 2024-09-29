// ChatInput.tsx
import { useState } from 'react';
import { uploadFile } from '@junobuild/core-peer';
import { ArrowUpIcon, PaperClipIcon } from '@heroicons/react/24/solid';
import { nanoid } from "nanoid";

type ChatInputProps = {
    darkMode: boolean;
    isInitialized: boolean;
};

export default function ChatInput({ darkMode, isInitialized }: ChatInputProps) {
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
                if (isInitialized) {
                    const result = await uploadFile({
                        data: file,
                        collection: "pdfs",
                        token: nanoid()
                    });
                    console.log('Archivo subido:', result);
                } else {
                    console.error('Juno no está inicializado');
                }
            }
            setMessage('');
            setFile(null);
        } catch (error) {
            console.error('Error al subir el archivo:', error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto relative">
            <div className="relative">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full p-4 pr-20 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-0 transition-all duration-300 ${darkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                        }`}
                    placeholder="Escribe tu mensaje aquí..."
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <label htmlFor="file-upload" className="p-2 rounded-full bg-transparent hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors duration-300 cursor-pointer">
                        <PaperClipIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <input id="file-upload" type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
                    </label>
                    <button
                        onClick={handleSubmit}
                        className={`p-2 rounded-full ${message || file ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'} transition-colors duration-300`}
                        disabled={!message && !file}
                    >
                        <ArrowUpIcon className={`h-5 w-5 ${message || file ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`} />
                    </button>
                </div>
            </div>
        </div>
    );
}
