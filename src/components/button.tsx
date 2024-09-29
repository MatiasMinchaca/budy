import type { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick: (() => Promise<void>) | (() => void);
    disabled?: boolean;
}

export const Button = ({ children, onClick, disabled = false }: ButtonProps) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-cyan-200">
            <button
                onClick={onClick}
                disabled={disabled}
                className={`flex items-center justify-center gap-2 text-black border-black border-[3px] transition-all rounded-lg py-2 px-6 my-4 font-semibold bg-white shadow-lg hover:scale-105 transform duration-200 ease-in-out ${disabled ? 'opacity-25 cursor-not-allowed' : 'hover:bg-cyan-300 active:bg-cyan-400'}`}
            >
                {children}
            </button>
        </div>
    );
};
