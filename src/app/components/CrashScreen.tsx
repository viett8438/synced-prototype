import { SystemChrome } from './SystemChrome';

interface CrashScreenProps {
  onResume: () => void;
  onPartialArchive: () => void;
  onForceSync: () => void;
}

export default function CrashScreen({ onResume, onPartialArchive, onForceSync }: CrashScreenProps) {
  return (
    <SystemChrome state="Unstable" sound="[SOUND: distorted ping]" logs className="crash-flash">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto border-2 border-red-500/30 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-red-500/60 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-2xl text-white">Sync Interrupted</h2>
          <p className="text-gray-500 text-sm">Too many unresolved traces.</p>
        </div>

        <div className="system-card warning-card subtle-shake">
          <p className="text-gray-400 text-sm">The day could not be summarized cleanly.</p>
          <p className="text-gray-500 text-sm">Devices remain active.</p>
          <p className="text-gray-500 text-sm">Emotional context could not be recovered.</p>
          <p className="text-gray-600 text-xs mt-4">Please continue from last stable state.</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={onResume}
            className="choice-button primary-choice w-full unstable-button"
          >
            Resume Day
          </button>
          <button
            onClick={onPartialArchive}
            className="choice-button secondary-choice w-full unstable-button"
          >
            View Partial Archive
          </button>
          <button
            onClick={onForceSync}
            className="choice-button secondary-choice w-full unstable-button"
          >
            Force Sync
          </button>
        </div>
      </div>
    </SystemChrome>
  );
}
