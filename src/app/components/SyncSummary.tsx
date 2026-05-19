import { useNavigate } from 'react-router';
import { useDay } from '../context/DayContext';
import { SystemChrome } from './SystemChrome';

export default function SyncSummary() {
  const navigate = useNavigate();
  const { getStats, systemState } = useDay();
  const stats = getStats();

  return (
    <SystemChrome state={systemState} sound="[SOUND: low ambient hum]" logs={systemState === 'Overloaded' || systemState === 'Unstable'}>
      <div className="max-w-2xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl text-white">Today's Sync Summary</h1>
          <p className="text-gray-500 text-sm">SYSTEM REPORT / Wednesday, May 6, 2026</p>
        </div>

        <div className="system-card">
          <div className="space-y-3 text-lg">
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Devices active</span>
              <span className="text-white">4</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Notifications opened</span>
              <span className="text-white">{stats.notificationsOpened}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Notifications ignored</span>
              <span className="text-white">{stats.notificationsIgnored}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Screenshots saved</span>
              <span className="text-white">{stats.screenshotsSaved}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Tabs left open</span>
              <span className="text-white">{stats.tabsOpen}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Notes edited</span>
              <span className="text-white">{stats.notesEdited}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Reminders snoozed</span>
              <span className="text-white">{stats.remindersSnoozed}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Steps recorded</span>
              <span className="text-white">8,421</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">Days archived</span>
              <span className="text-white">1</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">System state</span>
              <span className="text-white">{systemState}</span>
            </div>
            <div className="flex justify-between py-2 pt-4">
              <span className="text-gray-500">Emotional context</span>
              <span className="text-red-300/60">not found</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/final')}
            className="choice-button primary-choice"
          >
            Continue
          </button>
        </div>
      </div>
    </SystemChrome>
  );
}
