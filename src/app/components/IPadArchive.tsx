import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useDay } from '../context/DayContext';
import { MockScreen } from './MockScreens';
import { SystemChrome } from './SystemChrome';

export default function IPadArchive() {
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
          <h1 className="text-4xl text-white">iPad Archive</h1>
          <p className="text-gray-400">Notes / School</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Notes</p>
            <MockScreen type="ipad-calculus" />
            <div className="text-xs text-gray-400 space-y-1">
              <p>Calculus 2 - integration by parts</p>
              <p>Last edited: 10:47 AM</p>
            </div>
            <p className="text-gray-400 text-sm">I held the notes.</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Canvas Readings</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2 text-sm text-gray-400">
              <p className="text-white">Current Readings</p>
              <p className="text-xs text-gray-500">- Principles of Biology: cell signaling</p>
              <p className="text-xs text-gray-500">- Cognitive Models: Bayesian inference</p>
              <p className="text-xs text-gray-500">- MADD: interaction critique notes</p>
            </div>
            <div className="text-xs text-gray-500 space-y-1 pt-2">
              <p>Reading time: 2h 12m</p>
              <p>Pages: 47</p>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">PDF Annotations</p>
            <MockScreen type="ipad-biology" />
            <p className="text-xs text-gray-400">39 highlights / 14 comments</p>
            <p className="text-gray-400 text-sm">Academic attention archived.</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4">
            <p className="text-white font-medium">Class Materials</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <p className="text-gray-400">Media Arts and Design Practice</p>
                <p className="text-gray-600">Active</p>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p className="text-gray-400">Principles of Biology</p>
                <p className="text-gray-600">Active</p>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p className="text-gray-400">Cognitive Models</p>
                <p className="text-gray-600">Active</p>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p className="text-gray-400">Calculus 2</p>
                <p className="text-gray-600">Active</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4 md:col-span-2">
            <p className="text-white font-medium">Apple Pencil Activity</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl text-white mb-1">6</p>
                  <p className="text-gray-400 text-sm">notes edited</p>
                </div>
                <div>
                  <p className="text-3xl text-white mb-1">39</p>
                  <p className="text-gray-400 text-sm">annotations</p>
                </div>
                <div>
                  <p className="text-3xl text-white mb-1">3h 45m</p>
                  <p className="text-gray-400 text-sm">active time</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4 md:col-span-2">
            <p className="text-white font-medium">Notability Timeline</p>
            <MockScreen type="ipad-madd" />
          </div>
        </div>
      </div>
    </SystemChrome>
  );
}
