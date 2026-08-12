import React, { useState } from 'react';
import { X, ShieldAlert, Cpu, Activity, Sparkles, CheckCircle2, AlertTriangle, Lock } from 'lucide-react';

export default function CryptoIDSSimulatorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [selectedScenario, setSelectedScenario] = useState('syn_flood');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const scenarios = {
    syn_flood: {
      name: 'Scenario 1: High-Rate SYN Flood Attack',
      threatType: 'Distributed Denial of Service (DDoS)',
      riskScore: 98.4,
      isAnomaly: true,
      features: {
        flow_duration_ms: 5400,
        packet_rate_pps: 14200,
        syn_flag_count: 8900,
        ack_flag_count: 12,
        payload_entropy: 1.2,
        bytes_sent: 512000,
        dest_port: 80,
      },
      geminiSummary: 'HIGH SEVERITY ALERT: Scikit-learn RandomForest classified this 5-second flow window as a SYN Flood anomaly with 98.4% confidence. Gemini AI Countermeasure: Rate-limit SYN packets on port 80 via iptables, issue BGP blackhole routing for source subnet 198.51.100.0/24, and log event to AES-256-GCM encrypted database.'
    },
    port_scan: {
      name: 'Scenario 2: Stealth Port Scan Probe',
      threatType: 'Reconnaissance & Scan',
      riskScore: 91.2,
      isAnomaly: true,
      features: {
        flow_duration_ms: 1200,
        packet_rate_pps: 450,
        syn_flag_count: 320,
        ack_flag_count: 0,
        payload_entropy: 0.8,
        bytes_sent: 18400,
        dest_port: 'Multiple (21, 22, 80, 443, 8080)',
      },
      geminiSummary: 'MEDIUM SEVERITY ALERT: Sequential TCP connection attempts detected across 5 destination ports within 1.2 seconds. Gemini AI Countermeasure: Automatically trigger IP ban rule on firewall for 3600s and enable honeypot redirection.'
    },
    data_exfil: {
      name: 'Scenario 3: Encrypted Data Exfiltration',
      threatType: 'Data Loss / Exfiltration',
      riskScore: 96.8,
      isAnomaly: true,
      features: {
        flow_duration_ms: 4800,
        packet_rate_pps: 8200,
        syn_flag_count: 15,
        ack_flag_count: 8100,
        payload_entropy: 7.95, // High entropy indicates encrypted payload
        bytes_sent: 45000000,
        dest_port: 8443,
      },
      geminiSummary: 'CRITICAL ALERT: Abnormally high entropy payload (7.95/8.0) with 45MB outbound volume detected over port 8443. Gemini AI Countermeasure: Terminate connection socket immediately, flag host for forensic memory dump, alert security operations center.'
    },
    normal_traffic: {
      name: 'Scenario 4: Standard HTTPS User Session',
      threatType: 'Benign Traffic Flow',
      riskScore: 2.1,
      isAnomaly: false,
      features: {
        flow_duration_ms: 5000,
        packet_rate_pps: 45,
        syn_flag_count: 2,
        ack_flag_count: 88,
        payload_entropy: 4.1,
        bytes_sent: 24500,
        dest_port: 443,
      },
      geminiSummary: 'BENIGN FLOW: Flow behavior matches expected HTTPS browser traffic baseline. Standard TLS 1.3 handshake and normal payload distribution. No threat mitigation required.'
    }
  };

  const current = scenarios[selectedScenario];

  const handleScenarioChange = (key) => {
    setIsAnalyzing(true);
    setSelectedScenario(key);
    setTimeout(() => setIsAnalyzing(false), 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-cyan-500/30 p-6 shadow-2xl text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl font-mono font-bold text-slate-100 flex items-center gap-2">
                Crypto-IDS Live Threat Simulator
                <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-normal border border-cyan-500/30">
                  FastAPI + scikit-learn + Gemini AI
                </span>
              </h2>
              <p className="text-xs font-mono text-slate-400">
                19-Feature Flow Aggregator & Real-Time Anomaly Inference Engine
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-6 space-y-6">
          
          {/* Scenario Selector */}
          <div>
            <label className="block text-xs font-mono text-cyan-300 mb-2 font-semibold">
              SELECT SIMULATED NETWORK ATTACK SCENARIO:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {Object.keys(scenarios).map((key) => {
                const sc = scenarios[key];
                const active = selectedScenario === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleScenarioChange(key)}
                    className={`p-3 rounded-xl text-left font-mono text-xs transition-all border ${
                      active
                        ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold">{sc.name.split(':')[0]}</div>
                    <div className="text-[11px] truncate text-slate-300">{sc.threatType}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Analysis Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left: scikit-learn Features & Confidence Gauge */}
            <div className="md:col-span-5 p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  scikit-learn Model Output
                </span>
                <span className="text-[10px] font-mono text-slate-500">StandardScaler + RF</span>
              </div>

              {/* Threat Confidence Meter */}
              <div className="text-center p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-1">CLASSIFICATION CONFIDENCE</div>
                <div className={`text-3xl font-mono font-extrabold ${current.isAnomaly ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {current.riskScore}%
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      current.isAnomaly ? 'bg-gradient-to-r from-amber-500 to-rose-500' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${current.riskScore}%` }}
                  />
                </div>
                <div className="mt-2 text-xs font-mono font-bold flex items-center justify-center gap-1">
                  {current.isAnomaly ? (
                    <span className="text-rose-400 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> ANOMALOUS HIGH-RISK FLOW
                    </span>
                  ) : (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> BENIGN SYSTEM TRAFFIC
                    </span>
                  )}
                </div>
              </div>

              {/* Feature Vector Table */}
              <div>
                <div className="text-[11px] font-mono text-slate-400 mb-1">EXTRACTED 5s FLOW FEATURES (19 Total)</div>
                <div className="bg-slate-950 rounded-lg p-2.5 space-y-1.5 font-mono text-[11px] border border-slate-800">
                  {Object.entries(current.features).map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-slate-900/60 pb-1">
                      <span className="text-slate-500">{k}:</span>
                      <span className="text-cyan-300 font-semibold">{v.toString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Google Gemini AI Real-time Incident Synthesis */}
            <div className="md:col-span-7 p-4 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-purple-950/40 border border-purple-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-2">
                <span className="text-xs font-mono font-semibold text-purple-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Google Gemini (Generative AI) Auto-Summary
                </span>
                <span className="text-[10px] font-mono text-purple-400 bg-purple-950 px-2 py-0.5 rounded border border-purple-500/30">
                  REAL-TIME LLM SYNTHESIS
                </span>
              </div>

              {isAnalyzing ? (
                <div className="py-12 flex flex-col items-center justify-center space-y-3">
                  <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs font-mono text-cyan-400">Processing flow telemetry via Gemini API...</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-slate-950/80 border border-purple-500/20 text-xs font-mono text-slate-200 leading-relaxed">
                    {current.geminiSummary}
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
                    <div className="text-[11px] font-mono font-semibold text-cyan-400 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      Security & Storage Pipeline
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 space-y-1">
                      <div>• Encrypted Storage: <span className="text-slate-200">AES-256-GCM SQL Database</span></div>
                      <div>• Backend Infrastructure: <span className="text-slate-200">Async FastAPI + WebSockets (5s windows)</span></div>
                      <div>• Analyst Review Reduction: <span className="text-emerald-400">~65% Time Saved</span></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-500">
          <div>Crypto-IDS Simulation Framework | Built with Python & scikit-learn</div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all"
          >
            Close Simulator
          </button>
        </div>

      </div>
    </div>
  );
}
