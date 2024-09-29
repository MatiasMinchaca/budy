import { ChevronLeftIcon, SparklesIcon } from '@heroicons/react/24/solid';

type SidebarProps = {
  onClose: () => void;
  darkMode: boolean;
};

export default function Sidebar({ onClose, darkMode }: SidebarProps) {
  return (
    <div
      className={`bg-gray-800 ${darkMode ? 'dark:bg-gray-900' : ''} text-white w-64 flex flex-col h-full`}
    >
      <div className="p-4 text-xl font-bold">Historial</div>
      <div className="flex-grow">{/* Aquí iría la lista del historial */}</div>
      <div className="p-4 space-y-2">
        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg">
          <SparklesIcon className="h-5 w-5 inline-block mr-2" />
          Aumentar Plan
        </button>
        <button
          onClick={onClose}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          <ChevronLeftIcon className="h-5 w-5 mr-2" />
          Ocultar Barra
        </button>
      </div>
    </div>
  );
}
