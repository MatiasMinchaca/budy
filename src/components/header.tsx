import { UserCircleIcon, ChevronRightIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Logout } from './logout';

type HeaderProps = {
    onOpenSidebar: () => void;
    sidebarOpen: boolean;
    darkMode: boolean;
    onToggleDarkMode: () => void;
}

export default function Header({ onOpenSidebar, sidebarOpen, darkMode, onToggleDarkMode }: HeaderProps) {
    return (
        <header className="bg-white dark:bg-gray-900 bg-opacity-90 p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center">
                <button
                    onClick={onOpenSidebar}
                    className="mr-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </button>
                <div className="w-12 h-12 bg-yellow-400 dark:bg-yellow-600 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                    <span className="text-2xl">🐶</span>
                </div>
                <h1 className="ml-3 text-2xl font-bold text-gray-800 dark:text-white">Budy Chat</h1>
            </div>
            <div className="flex items-center space-x-4">
                <button
                    onClick={onToggleDarkMode}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
                >
                    {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                </button>
                <Logout />
                {/* <UserCircleIcon className="h-8 w-8 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300 cursor-pointer" /> */}
            </div>
        </header>
    )
}