import { useNavigate } from 'react-router';
import { useDay } from '../context/DayContext';
import { SystemChrome } from './SystemChrome';

export default function ArchiveDashboard() {
  const navigate = useNavigate();
  const { getStats, systemState, resetDay } = useDay();
  const stats = getStats();

  return (
    <SystemChrome state={systemState} sound="[SOUND: low ambient hum]" logs={systemState === 'Overloaded' || systemState === 'Unstable'}>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-6 py-12">
          <h1 className="text-4xl text-white">Archive</h1>
          <p className="text-gray-400">Wednesday, May 6, 2026</p>

          <div className="text-sm text-gray-500 space-y-1 pt-8">
            <p>4 devices active</p>
            <p>{stats.notificationsOpened + stats.notificationsIgnored} notifications</p>
            <p>{stats.screenshotsSaved} screenshots saved</p>
            <p>8,421 steps</p>
            <p>{stats.tabsOpen} tabs open</p>
            <p className="text-red-300/60 pt-2">Emotional context: not found</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div
            onClick={() => navigate('/archive/iphone')}
            className="bg-white/10 border border-white/20 rounded-3xl p-8 space-y-4 cursor-pointer hover:bg-white/15 transition-all"
          >
            <div className="w-12 h-12 bg-white/20 rounded-2xl"></div>
            <div className="space-y-2">
              <p className="text-2xl text-white font-medium">iPhone</p>
              <p className="text-gray-400">Memory / Attention</p>
            </div>
          </div>

          <div
            onClick={() => navigate('/archive/watch')}
            className="bg-white/10 border border-white/20 rounded-3xl p-8 space-y-4 cursor-pointer hover:bg-white/15 transition-all"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full"></div>
            <div className="space-y-2">
              <p className="text-2xl text-white font-medium">Apple Watch</p>
              <p className="text-gray-400">Body / Time</p>
            </div>
          </div>

          <div
            onClick={() => navigate('/archive/ipad')}
            className="bg-white/10 border border-white/20 rounded-3xl p-8 space-y-4 cursor-pointer hover:bg-white/15 transition-all"
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl"></div>
            <div className="space-y-2">
              <p className="text-2xl text-white font-medium">iPad</p>
              <p className="text-gray-400">Notes / School</p>
            </div>
          </div>

          <div
            onClick={() => navigate('/archive/macbook')}
            className="bg-white/10 border border-white/20 rounded-3xl p-8 space-y-4 cursor-pointer hover:bg-white/15 transition-all"
          >
            <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
            <div className="space-y-2">
              <p className="text-2xl text-white font-medium">MacBook</p>
              <p className="text-gray-400">Work / Tabs</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 space-y-4">
          <button
            onClick={() => navigate('/sync-summary')}
            className="px-6 py-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-full border border-white/10 transition-colors text-sm"
          >
            View Sync Summary
          </button>

          <div>
            <button
              onClick={() => {
                resetDay();
                navigate('/');
              }}
              className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-gray-500 hover:text-gray-400 rounded-full border border-white/5 transition-colors text-xs"
            >
              Restart Day
            </button>
          </div>
        </div>
      </div>
    </SystemChrome>
  );
}
