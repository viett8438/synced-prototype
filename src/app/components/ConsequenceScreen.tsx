import { SystemState } from '../data/interactions';
import { SystemChrome } from './SystemChrome';

interface ConsequenceScreenProps {
  choice: string;
  devices: string[];
  results: string[];
  fromState?: SystemState;
  toState?: SystemState;
  systemState?: SystemState;
  trace?: string;
  sound?: string;
  onContinue: () => void;
}

export default function ConsequenceScreen({
  choice,
  devices,
  results,
  fromState,
  toState,
  systemState,
  trace,
  sound = '[SOUND: low ambient hum]',
  onContinue
}: ConsequenceScreenProps) {
  const currentState = toState || systemState || 'Active';
  const warning = currentState === 'Overloaded' || currentState === 'Unstable';

  return (
    <SystemChrome state={currentState} sound={sound} logs={warning}>
      <div className="max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <p className="text-gray-500 text-xs uppercase tracking-[0.28em]">Sync Log</p>
          <p className="text-white text-sm">Choice: {choice}</p>
        </div>

        <div className={`system-card ${warning ? 'warning-card' : ''}`}>
          <div>
            <p className="text-gray-500 text-xs mb-2">Devices affected</p>
            <p className="text-gray-400 text-sm">{devices.join(', ')}</p>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-2">System state</p>
            <p className="text-gray-300 text-sm">{fromState || 'Calm'} <span className={warning ? 'text-red-300' : 'text-gray-500'}>-&gt;</span> {currentState}</p>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-2">Trace added</p>
            <p className={`text-sm ${warning ? 'text-red-200/80' : 'text-gray-400'}`}>{trace || 'TRACE_SAVED'}</p>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-2">Result</p>
            <div className="space-y-1">
              {results.map((result, i) => (
                <p key={i} className="text-gray-400 text-sm">- {result}</p>
              ))}
            </div>
          </div>

          {currentState && (
            <div className="pt-2 border-t border-white/10">
              <p className={`text-xs ${warning ? 'text-red-300/70' : 'text-gray-500'}`}>Emotional context: not found</p>
            </div>
          )}
        </div>

        <button
          onClick={onContinue}
          className={`choice-button primary-choice w-full ${currentState === 'Unstable' ? 'unstable-button' : ''}`}
        >
          Continue
        </button>
      </div>
    </SystemChrome>
  );
}
