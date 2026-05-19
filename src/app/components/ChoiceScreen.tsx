import { MockType, SystemState } from '../data/interactions';
import { MockScreen } from './MockScreens';
import { SystemChrome } from './SystemChrome';

interface ChoiceButton {
  label: string;
  type: 'primary' | 'secondary';
}

interface ChoiceScreenProps {
  time: string;
  device: string;
  message: string;
  placeholder?: string;
  mockType?: MockType;
  sound?: string;
  systemState?: SystemState;
  buttons: ChoiceButton[];
  onChoice: (choice: string) => void;
}

export default function ChoiceScreen({
  time,
  device,
  message,
  placeholder,
  mockType,
  sound,
  systemState = 'Calm',
  buttons,
  onChoice
}: ChoiceScreenProps) {
  const isWarning = systemState === 'Overloaded' || systemState === 'Unstable' || message.toLowerCase().includes('battery');

  return (
    <SystemChrome state={systemState} sound={sound} logs={isWarning}>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <p className="text-gray-500 text-xs mb-2">{time}</p>
        </div>

        <div className={`choice-card ${isWarning ? 'warning-card' : ''}`}>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isWarning ? 'bg-red-400/70' : 'bg-white/60'}`}></div>
            <p className="text-white text-sm">{device}</p>
          </div>

          <p className="text-gray-300 text-sm">{message}</p>

          {mockType ? <MockScreen type={mockType} /> : placeholder ? <div className="mock-screen"><p className="text-gray-500 text-xs">{placeholder}</p></div> : null}
        </div>

        <div className="flex gap-3">
          {buttons.map((button, i) => (
            <button
              key={i}
              onClick={() => onChoice(button.label)}
              className={`choice-button ${systemState === 'Unstable' ? 'unstable-button' : ''} ${
                button.type === 'primary'
                  ? 'primary-choice'
                  : 'secondary-choice'
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </SystemChrome>
  );
}
