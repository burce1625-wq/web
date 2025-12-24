

import React, { useState } from 'react';
import { FlaskConical, Bone, Beaker, HelpCircle, Split } from 'lucide-react';
import { LogEntry } from './types';
import { ExperimentLog } from './components/ExperimentLog';
import { LiquidLab } from './components/LiquidLab';
import { FossilDig } from './components/FossilDig';
import { HypothesisTester } from './components/HypothesisTester';
import { HiddenPath } from './components/HiddenPath';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'liquid' | 'fossil' | 'hypothesis' | 'hidden-path'>('liquid');
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const addLog = (entry: LogEntry) => {
    setLogs(prev => [entry, ...prev]);
  };

  const updateLog = (id: string, explanation: string) => {
    setLogs(prev => prev.map(log => 
      log.id === id 
        ? { ...log, aiExplanation: explanation, isLoadingAI: false }
        : log
    ));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg transition-colors ${
              activeTab === 'liquid' ? 'bg-indigo-600' : 
              activeTab === 'fossil' ? 'bg-amber-600' : 
              activeTab === 'hypothesis' ? 'bg-violet-600' : 
              'bg-emerald-600'
            }`}>
              <FlaskConical className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 tracking-tight">Bilimin Doğası</h1>
              <p className="text-xs text-slate-500 font-medium">Sanal Laboratuvar & Keşif</p>
            </div>
          </div>
          
          <button 
            onClick={() => window.location.reload()}
            className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
          >
            Sıfırla & Yenile
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Activity Area */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Tab Navigation */}
          <div className="bg-slate-200/50 p-1 rounded-xl flex gap-1 mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('liquid')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 whitespace-nowrap
                ${activeTab === 'liquid' 
                  ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
            >
              <Beaker className="w-4 h-4" />
              Sıvı Lab.
            </button>
            <button
              onClick={() => setActiveTab('fossil')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 whitespace-nowrap
                ${activeTab === 'fossil' 
                  ? 'bg-white text-amber-700 shadow-sm ring-1 ring-slate-200' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
            >
              <Bone className="w-4 h-4" />
              Fosil Kazısı
            </button>
            <button
              onClick={() => setActiveTab('hypothesis')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 whitespace-nowrap
                ${activeTab === 'hypothesis' 
                  ? 'bg-white text-violet-700 shadow-sm ring-1 ring-slate-200' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
            >
              <HelpCircle className="w-4 h-4" />
              Hipotez Testi
            </button>
            <button
              onClick={() => setActiveTab('hidden-path')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 whitespace-nowrap
                ${activeTab === 'hidden-path' 
                  ? 'bg-white text-emerald-700 shadow-sm ring-1 ring-slate-200' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
            >
              <Split className="w-4 h-4" />
              Gizli Yol
            </button>
          </div>

          {/* Activity Content */}
          <div className="min-h-[500px]">
            {activeTab === 'liquid' ? (
              <div className="animate-fade-in">
                <LiquidLab addLog={addLog} updateLog={updateLog} />
              </div>
            ) : activeTab === 'fossil' ? (
              <div className="animate-fade-in">
                <FossilDig addLog={addLog} updateLog={updateLog} />
              </div>
            ) : activeTab === 'hypothesis' ? (
              <div className="animate-fade-in">
                <HypothesisTester addLog={addLog} updateLog={updateLog} />
              </div>
            ) : (
              <div className="animate-fade-in">
                <HiddenPath addLog={addLog} updateLog={updateLog} />
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Observation Log */}
        <div className="lg:col-span-5 h-full">
          <div className="sticky top-24">
            <ExperimentLog logs={logs} />
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;
