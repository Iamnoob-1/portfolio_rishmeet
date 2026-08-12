import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';
import { cliCommands, personalInfo } from '../../data/portfolioData';

export default function DeveloperTerminal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState([
    { type: 'system', text: 'Welcome to rishmeet-cli v2.0.0 [x86_64-pc-linux-gnu]' },
    { type: 'system', text: 'Type "help" to view available terminal commands.' },
  ]);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...logs, { type: 'user', text: `rishmeet@vit:~$ ${cmd}` }];

    if (cmd === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    if (cliCommands[cmd]) {
      newLogs.push({ type: 'output', text: cliCommands[cmd] });
    } else {
      newLogs.push({
        type: 'error',
        text: `Command not found: "${cmd}". Type "help" for available commands.`
      });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-3xl h-[550px] glass-panel rounded-2xl border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden text-slate-100 font-mono">
        
        {/* Terminal Header Bar */}
        <div className="bg-slate-900/90 px-4 py-3 border-b border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs text-cyan-400 font-bold ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5" />
              npx rishmeet-cli ~ bash
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output Logs */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 text-xs leading-relaxed bg-slate-950/90">
          {logs.map((log, idx) => (
            <div
              key={idx}
              className={`${
                log.type === 'user'
                  ? 'text-cyan-300 font-bold'
                  : log.type === 'error'
                  ? 'text-rose-400'
                  : log.type === 'system'
                  ? 'text-purple-300'
                  : 'text-slate-200'
              }`}
            >
              {log.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommand} className="bg-slate-900/90 p-3 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 text-xs font-bold">rishmeet@vit:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'bio', 'projects', 'dsa', 'contact'..."
            className="flex-1 bg-transparent text-xs text-cyan-200 focus:outline-none placeholder-slate-600"
          />
          <button type="submit" className="p-1.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
}
