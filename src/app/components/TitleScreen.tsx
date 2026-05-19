import { useNavigate } from 'react-router';
import { useDay } from '../context/DayContext';
import { SystemChrome } from './SystemChrome';

export default function TitleScreen() {
  const navigate = useNavigate();
  const { resetDay } = useDay();

  const handleStart = () => {
    resetDay();
    navigate('/morning');
  };

  return (
    <SystemChrome state="Calm" sound="[SOUND: low ambient hum]">
      <div className="text-center space-y-8 max-w-2xl">
        <h1 className="text-6xl text-white tracking-tight">Synced</h1>
        <p className="text-xl text-gray-400">
          Everything was synced. The feeling was not.
        </p>
        <button
          onClick={handleStart}
          className="mt-12 px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-colors"
        >
          Begin Day
        </button>
      </div>
    </SystemChrome>
  );
}
