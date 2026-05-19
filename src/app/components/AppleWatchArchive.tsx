import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useDay } from '../context/DayContext';
import { MockScreen } from './MockScreens';
import { SystemChrome } from './SystemChrome';

export default function AppleWatchArchive() {
  const navigate = useNavigate();
  const { systemState } = useDay();

  return (
    <SystemChrome state={systemState} sound="[SOUND: low ambient hum]">
      <div className="max-w-4xl mx-auto space-y-8">
        <button
          onClick={() => navigate('/archive')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Archive
        </button>

        <div className="space-y-4">
          <h1 className="text-4xl text-white">Apple Watch Archive</h1>
          <p className="text-gray-400">Body / Time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Watch Face</p>
            <MockScreen type="watch-face" />
            <p className="text-gray-400 text-sm">I counted the walk.</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Activity Rings</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-center">
              <div className="space-y-3 text-center">
                <div className="flex gap-3 justify-center">
                  <div className="w-20 h-20 rounded-full border-4 border-white/25"></div>
                  <div className="w-16 h-16 rounded-full border-4 border-slate-300/20 mt-2"></div>
                  <div className="w-12 h-12 rounded-full border-4 border-slate-500/25 mt-4"></div>
                </div>
                <p className="text-gray-500 text-xs">Move / Exercise / Stand</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Steps</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-4xl text-white mb-2">8,421</p>
              <p className="text-gray-400 text-sm">steps today</p>
              <div className="mt-4 h-20 bg-white/5 rounded flex items-end gap-1">
                {[40, 60, 55, 80, 45, 70, 65, 90, 75, 85, 95, 88].map((height, i) => (
                  <div key={i} className="flex-1 bg-white/15 rounded-t" style={{ height: `${height}%` }}></div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Heart Rate</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
              <div>
                <p className="text-3xl text-white">72</p>
                <p className="text-gray-400 text-sm">bpm average</p>
              </div>
              <div className="text-xs text-gray-500 space-y-1">
                <p>Resting: 62 bpm</p>
                <p>Walking: 84 bpm</p>
                <p>High: 118 bpm (3:42 PM)</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Body recorded. Feeling unavailable.</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4 md:col-span-2">
            <p className="text-white font-medium">Stand Reminders</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="grid grid-cols-12 gap-2">
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className={`h-8 rounded flex items-center justify-center text-xs ${
                      i < 11 ? 'bg-slate-400/20 text-slate-200/70' : 'bg-white/5 text-gray-600'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-3">11/12 hours stood</p>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4 md:col-span-2">
            <p className="text-white font-medium">Movement Data</p>
            <MockScreen type="watch-activity" />
          </div>
        </div>
      </div>
    </SystemChrome>
  );
}
