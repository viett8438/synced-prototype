import { useNavigate } from 'react-router';
import { SystemChrome } from './SystemChrome';

export default function FinalScreen() {
  const navigate = useNavigate();

  return (
    <SystemChrome state="Calm" sound="[SOUND: sudden silence]">
      <div className="text-center space-y-12 max-w-3xl">
        <div className="space-y-8">
          <h1 className="text-5xl text-white leading-relaxed">
            Everything was synced<br />
            The feeling was not
          </h1>

          <p className="text-gray-500 text-sm">
            1 day archived<br />
            Emotional context: not found
          </p>
        </div>

        <button
          onClick={() => navigate('/archive')}
          className="mt-16 choice-button secondary-choice"
        >
          Return to Archive
        </button>
      </div>
    </SystemChrome>
  );
}
