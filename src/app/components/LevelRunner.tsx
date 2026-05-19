import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Interaction, ChoiceOutcome, DeviceName, SystemState } from '../data/interactions';
import { useDay } from '../context/DayContext';
import ChoiceScreen from './ChoiceScreen';
import ConsequenceScreen from './ConsequenceScreen';
import CrashScreen from './CrashScreen';
import { DeviceStatusGrid, SystemChrome } from './SystemChrome';

interface LevelRunnerProps {
  level: string;
  interactions: Interaction[];
  transitionTime: string;
  transitionTitle: string;
  transitionSubtitle: string;
  activeDevices: DeviceName[];
  nextPath: string;
  nextLabel?: string;
}

export default function LevelRunner({
  level,
  interactions,
  transitionTime,
  transitionTitle,
  transitionSubtitle,
  activeDevices,
  nextPath,
  nextLabel = 'Continue',
}: LevelRunnerProps) {
  const navigate = useNavigate();
  const { addChoice, updateSystemState, systemState, getStats } = useDay();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<ChoiceOutcome | null>(null);
  const [fromState, setFromState] = useState<SystemState>('Calm');
  const [phase, setPhase] = useState<'choice' | 'consequence' | 'crash' | 'transition'>('choice');
  const current = interactions[index];

  const handleChoice = (label: string) => {
    const outcome = current.choices.find((choice) => choice.label === label);
    if (!outcome) return;

    const stats = getStats();
    const before = systemState;
    setFromState(before);
    setSelected(outcome);
    addChoice({
      action: outcome.label,
      devices: outcome.devices,
      level,
      fromState: before,
      toState: outcome.toState,
      trace: outcome.trace,
      results: outcome.results,
    });
    updateSystemState(outcome.toState);

    if (outcome.crashRisk && (before === 'Overloaded' || before === 'Unstable' || stats.overloadActions >= 4)) {
      setPhase('crash');
      return;
    }

    setPhase('consequence');
  };

  const continueAfterConsequence = () => {
    if (index + 1 >= interactions.length) {
      setPhase('transition');
      return;
    }
    setIndex(index + 1);
    setSelected(null);
    setPhase('choice');
  };

  if (phase === 'crash') {
    return (
      <CrashScreen
        onResume={() => setPhase('consequence')}
        onPartialArchive={() => navigate('/archive')}
        onForceSync={() => navigate('/sync-summary')}
      />
    );
  }

  if (phase === 'transition') {
    return (
      <SystemChrome state={systemState} sound={level === 'Overload' ? '[SOUND: layered notifications]' : '[SOUND: low ambient hum]'} logs={systemState === 'Overloaded' || systemState === 'Unstable'}>
        <div className="max-w-6xl mx-auto space-y-12 w-full">
          <div className="text-center space-y-4 py-12">
            <p className="text-gray-500 text-sm">{transitionTime}</p>
            <h2 className="text-3xl text-gray-300">{transitionTitle}</h2>
            <p className="text-gray-500 text-sm">{transitionSubtitle}</p>
          </div>

          <DeviceStatusGrid active={activeDevices} state={systemState} />

          <div className="text-center pt-8">
            <button onClick={() => navigate(nextPath)} className={`choice-button primary-choice ${systemState === 'Unstable' ? 'unstable-button' : ''}`}>
              {nextLabel}
            </button>
          </div>
        </div>
      </SystemChrome>
    );
  }

  if (phase === 'consequence' && selected) {
    return (
      <ConsequenceScreen
        choice={selected.label}
        devices={selected.devices}
        results={selected.results}
        fromState={fromState}
        toState={selected.toState}
        trace={selected.trace}
        sound={current.sound}
        onContinue={continueAfterConsequence}
      />
    );
  }

  return (
    <ChoiceScreen
      time={current.time}
      device={current.device}
      message={current.message}
      mockType={current.mockType}
      sound={current.sound}
      systemState={systemState}
      buttons={current.choices.map((choice) => ({ label: choice.label, type: choice.type || 'secondary' }))}
      onChoice={handleChoice}
    />
  );
}
