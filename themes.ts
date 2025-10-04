export interface Theme {
  name: string;
  colors: {
    '--background-color': string;
    '--text-color': string;
    '--text-muted-color': string;
    '--primary-color': string;
    '--secondary-color': string;
    '--card-background-color': string;
    '--border-color': string;
    '--hue-primary': string;
    '--hue-secondary': string;
  };
}

export const themes: Record<string, Theme> = {
  cyberpunk: {
    name: 'Cyberpunk',
    colors: {
      '--background-color': '#1a052a',
      '--text-color': '#e5e7eb',
      '--text-muted-color': '#9ca3af',
      '--primary-color': '#22d3ee',
      '--secondary-color': '#c026d3',
      '--card-background-color': 'rgba(17, 24, 39, 0.5)',
      '--border-color': 'rgba(55, 65, 81, 0.5)',
      '--hue-primary': '190',
      '--hue-secondary': '280',
    },
  },
  dark: {
    name: 'Dark',
    colors: {
      '--background-color': '#0f172a',
      '--text-color': '#e2e8f0',
      '--text-muted-color': '#94a3b8',
      '--primary-color': '#38bdf8',
      '--secondary-color': '#818cf8',
      '--card-background-color': 'rgba(30, 41, 59, 0.5)',
      '--border-color': 'rgba(51, 65, 85, 0.5)',
      '--hue-primary': '200',
      '--hue-secondary': '230',
    },
  },
  retro: {
    name: 'Retro',
    colors: {
      '--background-color': '#2d1b25',
      '--text-color': '#f5e6e8',
      '--text-muted-color': '#d1b9c2',
      '--primary-color': '#ffc233',
      '--secondary-color': '#f97583',
      '--card-background-color': 'rgba(76, 52, 64, 0.5)',
      '--border-color': 'rgba(102, 75, 87, 0.5)',
      '--hue-primary': '45',
      '--hue-secondary': '350',
    },
  },
  moon: {
    name: 'Moon',
    colors: {
      '--background-color': '#1e1b4b',
      '--text-color': '#e0e7ff',
      '--text-muted-color': '#a5b4fc',
      '--primary-color': '#c4b5fd',
      '--secondary-color': '#7dd3fc',
      '--card-background-color': 'rgba(49, 46, 129, 0.5)',
      '--border-color': 'rgba(67, 56, 202, 0.5)',
      '--hue-primary': '250',
      '--hue-secondary': '200',
    },
  },
  rgb: {
    name: 'RGB',
    colors: {
      '--background-color': '#111111',
      '--text-color': '#ffffff',
      '--text-muted-color': '#bbbbbb',
      '--primary-color': '#00ff00',
      '--secondary-color': '#ff0000',
      '--card-background-color': 'rgba(28, 28, 28, 0.5)',
      '--border-color': 'rgba(50, 50, 50, 0.5)',
      '--hue-primary': '120',
      '--hue-secondary': '0',
    },
  },
  sunset: {
    name: 'Sunset',
    colors: {
      '--background-color': '#1f0d1b',
      '--text-color': '#fed7aa',
      '--text-muted-color': '#fca5a5',
      '--primary-color': '#fb923c',
      '--secondary-color': '#f472b6',
      '--card-background-color': 'rgba(76, 29, 149, 0.3)',
      '--border-color': 'rgba(139, 92, 246, 0.4)',
      '--hue-primary': '30',
      '--hue-secondary': '330',
    },
  },
  ocean: {
    name: 'Ocean',
    colors: {
      '--background-color': '#0c2a3a',
      '--text-color': '#a7f3d0',
      '--text-muted-color': '#67e8f9',
      '--primary-color': '#5eead4',
      '--secondary-color': '#7dd3fc',
      '--card-background-color': 'rgba(15, 59, 81, 0.5)',
      '--border-color': 'rgba(14, 116, 144, 0.5)',
      '--hue-primary': '170',
      '--hue-secondary': '190',
    },
  },
  forest: {
    name: 'Forest',
    colors: {
      '--background-color': '#1a2e22',
      '--text-color': '#d4d4d8',
      '--text-muted-color': '#a1a1aa',
      '--primary-color': '#4ade80',
      '--secondary-color': '#a3e635',
      '--card-background-color': 'rgba(23, 56, 42, 0.5)',
      '--border-color': 'rgba(34, 197, 94, 0.4)',
      '--hue-primary': '145',
      '--hue-secondary': '80',
    },
  },
};