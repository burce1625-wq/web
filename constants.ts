

import { Liquid } from './types';

export const AVAILABLE_LIQUIDS: Liquid[] = [
  {
    id: 'blue',
    name: 'Mavi Çözelti',
    colorHex: '#3b82f6', // blue-500
    tailwindColor: 'bg-blue-500',
    description: 'Bakır sülfat çözeltisini andıran mavi sıvı.'
  },
  {
    id: 'red',
    name: 'Kırmızı Çözelti',
    colorHex: '#ef4444', // red-500
    tailwindColor: 'bg-red-500',
    description: 'Asidik indikatör benzeri kırmızı sıvı.'
  },
  {
    id: 'yellow',
    name: 'Sarı Çözelti',
    colorHex: '#eab308', // yellow-500
    tailwindColor: 'bg-yellow-500',
    description: 'Potasyum kromat benzeri sarı sıvı.'
  },
  {
    id: 'clear',
    name: 'Şeffaf Çözelti',
    colorHex: '#f1f5f9', // slate-100 (represents water/clear)
    tailwindColor: 'bg-slate-100',
    description: 'Saf su veya nötr bir çözücü.'
  }
];

export const MIX_MAP: Record<string, string> = {
  'blue-red': '#9333ea', // purple
  'red-blue': '#9333ea',
  
  'blue-yellow': '#22c55e', // green
  'yellow-blue': '#22c55e',
  
  'red-yellow': '#f97316', // orange
  'yellow-red': '#f97316',
  
  'blue-blue': '#3b82f6',
  'red-red': '#ef4444',
  'yellow-yellow': '#eab308',
  'clear-clear': '#f1f5f9',
};

export const getColorName = (hex: string): string => {
  switch (hex) {
    case '#9333ea': return 'Mor Karışım';
    case '#22c55e': return 'Yeşil Karışım';
    case '#f97316': return 'Turuncu Karışım';
    case '#3b82f6': return 'Mavi Çözelti (Değişmedi)';
    case '#ef4444': return 'Kırmızı Çözelti (Değişmedi)';
    case '#eab308': return 'Sarı Çözelti (Değişmedi)';
    case '#f1f5f9': return 'Şeffaf (Seyreltik)';
    default: 
      // Handle dilution cases broadly
      if (hex.startsWith('#3b82f6')) return 'Açık Mavi (Seyreltik)';
      if (hex.startsWith('#ef4444')) return 'Açık Kırmızı (Seyreltik)';
      if (hex.startsWith('#eab308')) return 'Açık Sarı (Seyreltik)';
      return 'Bilinmeyen Karışım';
  }
};

export interface MysteryObject {
  id: string;
  name: string;
  soundDescription: string;
  image: string;
}

export const MYSTERY_OBJECTS: MysteryObject[] = [
  {
    id: 'beads',
    name: 'Renkli Boncuklar',
    soundDescription: 'Şıkır şıkır, çok sayıda küçük çarpma sesi.',
    image: 'https://i.imgur.com/lX3YQxx.png'
  },
  {
    id: 'coins',
    name: 'Madeni Paralar',
    soundDescription: 'Şıngır şıngır metalik sesler!',
    image: 'https://i.imgur.com/cg5yJ9g.png'
  },
  {
    id: 'stones',
    name: 'Çakıl Taşları',
    soundDescription: 'Tak tuk! Sert ve ağır çarpma sesleri.',
    image: 'https://i.imgur.com/9tEtEtx.png'
  },
  {
    id: 'legos',
    name: 'Lego Parçaları',
    soundDescription: 'Çıtır pıtır plastik sesleri.',
    image: 'https://i.imgur.com/8V2p01W.png'
  }
];

export interface HiddenPathStructure {
  id: string;
  name: string;
  description: string;
  // Probabilities for Left, Center, Right (sums to 1.0 approx)
  weights: [number, number, number]; 
  svgPath: string; // Used to draw the structure inside the box on reveal
}

export const HIDDEN_PATHS: HiddenPathStructure[] = [
  {
    id: 'ramp-left',
    name: 'Sola Eğimli Rampa',
    description: 'Bilyeleri sola kaydıran düz bir yüzey.',
    weights: [0.9, 0.1, 0.0], // Mostly Left
    svgPath: 'M 180 50 L 20 150 L 180 150 Z' // Triangle pointing down-left
  },
  {
    id: 'ramp-right',
    name: 'Sağa Eğimli Rampa',
    description: 'Bilyeleri sağa kaydıran düz bir yüzey.',
    weights: [0.0, 0.1, 0.9], // Mostly Right
    svgPath: 'M 20 50 L 180 150 L 20 150 Z' // Triangle pointing down-right
  },
  {
    id: 'pyramid',
    name: 'Piramit (Dağıtıcı)',
    description: 'Ortadan gelen bilyeyi iki yana dağıtan sivri yapı.',
    weights: [0.45, 0.1, 0.45], // Split Left/Right
    svgPath: 'M 100 50 L 20 150 L 180 150 Z' // Triangle pointing up (pyramid)
  },
  {
    id: 'funnel',
    name: 'Huni (Toplayıcı)',
    description: 'Geniş ağızlı, bilyeleri ortaya toplayan yapı.',
    weights: [0.1, 0.8, 0.1], // Mostly Center
    svgPath: 'M 20 50 L 80 150 L 120 150 L 180 50 Z' // Funnel shape
  }
];
