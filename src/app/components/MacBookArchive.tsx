import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useDay } from '../context/DayContext';
import { MockScreen } from './MockScreens';
import { SystemChrome } from './SystemChrome';

export default function MacBookArchive() {
  const navigate = useNavigate();
  const { systemState } = useDay();

  return (
    <SystemChrome state={systemState} sound="[SOUND: low ambient hum]" logs={systemState === 'Overloaded' || systemState === 'Unstable'}>
      <div className="max-w-4xl mx-auto space-y-8">
        <button
          onClick={() => navigate('/archive')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Archive
        </button>

        <div className="space-y-4">
          <h1 className="text-4xl text-white">MacBook Archive</h1>
          <p className="text-gray-400">Work / Tabs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4 md:col-span-2">
            <p className="text-white font-medium">Browser Tabs</p>
            <MockScreen type="mac-tabs" />
            <p className="text-gray-400 text-sm">I kept the tabs open.</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Email</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
              <div>
                <p className="text-3xl text-white">18</p>
                <p className="text-gray-400 text-sm">unread messages</p>
              </div>
              <div className="text-xs text-gray-500 space-y-1 pt-2">
                <p>Calculus 2 - problem set correction</p>
                <p>Principles of Biology - lab worksheet</p>
                <p>MADD - critique schedule</p>
                <p>Cognitive Models - notebook feedback</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Deadlines</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <p className="text-gray-400">Cognitive Models response</p>
                <p className="text-red-400">11:59 PM</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400">Calculus 2 problem set</p>
                <p className="text-red-300/70">Tonight</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400">Biology lab prep</p>
                <p className="text-gray-500">Tomorrow</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400">Portfolio review</p>
                <p className="text-gray-500">Next week</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">I watched the deadlines multiply.</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Desktop</p>
            <div className="bg-white/5 border border-white/10 rounded-xl h-48 p-4">
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }, (_, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded h-12"></div>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-400">34 files / High clutter</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Documents</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2 text-xs text-gray-500">
              <p className="text-gray-400">Recent files:</p>
              <p>MADD_Synced_Project_Statement.docx</p>
              <p>CognitiveModels_Response_Draft.pages</p>
              <p>Calculus2_PS9_Work.txt</p>
              <p>Screenshot_2026-05-06.png</p>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4 md:col-span-2">
            <p className="text-white font-medium">Canvas Activity</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="grid grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl text-white mb-1">5</p>
                  <p className="text-gray-400 text-sm">deadlines today</p>
                </div>
                <div>
                  <p className="text-3xl text-white mb-1">12</p>
                  <p className="text-gray-400 text-sm">unread announcements</p>
                </div>
                <div>
                  <p className="text-3xl text-white mb-1">4</p>
                  <p className="text-gray-400 text-sm">courses active</p>
                </div>
                <div>
                  <p className="text-3xl text-white mb-1">8</p>
                  <p className="text-gray-400 text-sm">submissions this week</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4 md:col-span-2">
            <p className="text-white font-medium">Application Switching</p>
            <MockScreen type="mac-code" />
          </div>
        </div>
      </div>
    </SystemChrome>
  );
}
