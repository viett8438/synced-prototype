import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useDay } from '../context/DayContext';
import { MockScreen } from './MockScreens';
import { SystemChrome } from './SystemChrome';

export default function IPhoneArchive() {
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
          <h1 className="text-4xl text-white">iPhone Archive</h1>
          <p className="text-gray-400">Memory / Attention</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Screenshots</p>
            <MockScreen type="ipad-calculus" />
            <p className="text-gray-400 text-sm">I saved the screenshot.</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Camera Roll</p>
            <MockScreen type="iphone-camera" />
            <p className="text-gray-400 text-sm">You opened this again.</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Messages</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
              <p className="text-gray-400 text-xs">11:23 AM</p>
              <p className="text-gray-500 text-sm">[Message preview]</p>
              <p className="text-gray-400 text-xs">2:47 PM</p>
              <p className="text-gray-500 text-sm">[Message preview]</p>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Notifications</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2 text-xs text-gray-500">
              <p>Canvas: Assignment due tonight</p>
              <p>Mail: 14 new messages</p>
              <p>Calendar: Meeting in 15 min</p>
              <p>Reminders: 5 tasks overdue</p>
              <p>Canvas: Principles of Biology lab due</p>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Screen Time</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
              <p className="text-3xl text-white">6h 34m</p>
              <div className="text-xs text-gray-400 space-y-1">
                <p>App switching: 147 times</p>
                <p>Pickups: 89</p>
                <p>Most used: Safari, Messages, Canvas</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Lock Screen</p>
            <MockScreen type="iphone-lock" />
          </div>
        </div>
      </div>
    </SystemChrome>
  );
}
