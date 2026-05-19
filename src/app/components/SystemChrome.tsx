import { ReactNode } from 'react';
import { SystemState, systemLogs } from '../data/interactions';

interface SystemChromeProps {
  children: ReactNode;
  state: SystemState;
  sound?: string;
  logs?: boolean;
  className?: string;
}

export function SystemChrome({ children, state, sound, logs, className = '' }: SystemChromeProps) {
  const unstable = state === 'Unstable';
  const showLogs = logs || state === 'Overloaded' || state === 'Unstable';

  return (
    <div className={`system-shell state-${state.toLowerCase()} ${unstable ? 'unstable-text' : ''} ${className}`}>
      {showLogs && <SystemLogs />}
      <div className="system-topline">
        <StateIndicator state={state} />
        {sound && <span className="sound-label">{sound}</span>}
      </div>
      {children}
    </div>
  );
}

export function StateIndicator({ state }: { state: SystemState }) {
  return (
    <div className="state-indicator" aria-label={`System state ${state}`}>
      <span className="state-dot" />
      <span>System State</span>
      <strong>{state}</strong>
    </div>
  );
}

export function SystemLogs() {
  return (
    <div className="system-logs" aria-hidden="true">
      {[...systemLogs, ...systemLogs].map((line, index) => (
        <p key={`${line}-${index}`}>{line}</p>
      ))}
    </div>
  );
}

export function DeviceStatusGrid({
  active,
  state,
}: {
  active: string[];
  state: SystemState;
}) {
  const devices = [
    { name: 'iPhone', shape: 'rounded-xl' },
    { name: 'Apple Watch', shape: 'rounded-full' },
    { name: 'iPad', shape: 'rounded-lg' },
    { name: 'MacBook', shape: 'rounded' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {devices.map((device) => {
        const isActive = active.includes(device.name);
        return (
          <div key={device.name} className={`device-card ${isActive ? 'is-active' : 'is-sleeping'} ${state === 'Overloaded' || state === 'Unstable' ? 'warning-card' : ''}`}>
            <div className={`w-8 h-8 ${device.shape} ${isActive ? 'bg-white/25' : 'border border-white/15'}`} />
            <div>
              <p className={isActive ? 'text-white' : 'text-gray-600'}>{device.name}</p>
              <p className="text-xs text-gray-500">{isActive ? 'Active' : 'Asleep'}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
