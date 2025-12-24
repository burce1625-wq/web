

export interface Liquid {
  id: string;
  name: string;
  colorHex: string;
  tailwindColor: string;
  description: string;
}

export interface ExperimentResult {
  type: 'liquid' | 'fossil' | 'hypothesis' | 'hidden-path';
  colorHex?: string;
  name: string;
  description: string;
  
  // Fossil specific
  // 1 = Digging, 2 = Dug, 3 = Assembled
  stage?: number; 

  // Hypothesis specific
  userObservation?: string;
  userHypothesis?: string;
  actualObject?: string;
  actualObjectImage?: string;
  
  // Hidden Path specific
  exitCounts?: { left: number; center: number; right: number };
  predictedStructure?: string;
  actualStructure?: string;
  
  // Legacy / Shared
  isCorrect?: boolean;
}

export interface LogEntry {
  id: string;
  timestamp: Date;
  activityType: 'liquid' | 'fossil' | 'hypothesis' | 'hidden-path';
  inputs: string[]; // Names of inputs (liquids, bone parts, or mystery object ID)
  result: ExperimentResult;
  aiExplanation?: string;
  isLoadingAI?: boolean;
}
