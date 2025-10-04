import React, { useState, useRef, useEffect } from 'react';
import { PaletteIcon } from './icons/Icons';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

export const ThemeSwitcher: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const switcherRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={switcherRef} className="fixed bottom-8 right-24 z-50">
            <style>{`
                .theme-panel {
                    transform-origin: bottom right;
                }
            `}</style>
            <div 
                className={`theme-panel absolute bottom-full right-0 mb-4 w-48 p-2 rounded-lg 
                            bg-[var(--card-background-color)] backdrop-blur-md border border-[var(--border-color)]
                            shadow-lg shadow-black/30
                            transition-all duration-300 ease-in-out
                            ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
            >
                <ul className="space-y-1">
                    {Object.entries(themes).map(([key, themeConfig]) => (
                        <li key={key}>
                            <button
                                onClick={() => {
                                    setTheme(key);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors
                                            ${theme === key 
                                                ? 'bg-[var(--primary-color)]/20 text-[var(--primary-color)] font-semibold' 
                                                : 'text-[var(--text-color)] hover:bg-[var(--primary-color)]/10'}`}
                            >
                                {themeConfig.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`p-3 rounded-full bg-[var(--primary-color)]/50 backdrop-blur-sm
                            text-white shadow-lg shadow-[var(--primary-color)]/30
                            transition-all duration-300 ease-in-out
                            hover:bg-[var(--primary-color)]/80 hover:scale-110 hover:shadow-[var(--primary-color)]/50
                            ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                aria-label="Change theme"
                title="Change theme"
            >
                <PaletteIcon className="w-6 h-6" />
            </button>
        </div>
    );
};
