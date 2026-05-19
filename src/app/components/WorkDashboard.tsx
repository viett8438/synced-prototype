import { Interaction } from '../data/interactions';
import LevelRunner from './LevelRunner';

const workInteractions: Interaction[] = [
  {
    id: 'canvas-work',
    time: '2:34 PM',
    device: 'MacBook',
    message: 'Canvas dashboard shows all four classes active.',
    mockType: 'mac-canvas',
    sound: '[SOUND: keyboard typing]',
    choices: [
      { label: 'Work on Assignment', type: 'primary', toState: 'Fragmented', devices: ['MacBook'], trace: 'CANVAS_013_WORKED', results: ['Assignment focus resumed', 'Canvas trace saved', 'Progress stored', 'Emotional context unavailable'] },
      { label: 'Open New Tab', type: 'secondary', toState: 'Fragmented', devices: ['MacBook'], trace: 'TAB_013_OPENED', results: ['Browser clutter increased', 'Assignment paused', 'Unfinished item stored', 'Emotional context unavailable'] },
    ],
  },
  {
    id: 'email',
    time: '3:12 PM',
    device: 'MacBook',
    message: 'Email notification: Biology lab worksheet clarification.',
    mockType: 'mac-email',
    sound: '[SOUND: notification ping]',
    choices: [
      { label: 'Open', type: 'secondary', toState: 'Fragmented', devices: ['MacBook'], trace: 'EMAIL_014_OPENED', results: ['Email opened', 'Attention redirected', 'Biology lab trace added', 'Emotional context unavailable'] },
      { label: 'Ignore', type: 'primary', toState: 'Fragmented', devices: ['MacBook'], trace: 'EMAIL_014_UNREAD', results: ['Email marked unread', 'Future interruption scheduled', 'Canvas focus retained', 'Emotional context unavailable'] },
    ],
  },
  {
    id: 'tabs',
    time: '3:47 PM',
    device: 'MacBook',
    message: 'Browser tabs multiply across Calculus 2, MADD, Biology, and Cognitive Models.',
    mockType: 'mac-tabs',
    sound: '[SOUND: low ambient hum]',
    choices: [
      { label: 'Close Tabs', type: 'primary', toState: 'Fragmented', devices: ['MacBook'], trace: 'TABS_015_CLOSED', results: ['Browser simplified', 'Unfinished items reduced', 'System resources freed', 'Emotional context unavailable'] },
      { label: 'Keep Open', type: 'secondary', toState: 'Overloaded', devices: ['MacBook'], trace: 'TABS_015_RETAINED', results: ['Browser clutter increased', 'Deadline retained', 'Unfinished items stored', 'Emotional context unavailable'], crashRisk: true },
    ],
  },
  {
    id: 'note-sync',
    time: '4:15 PM',
    device: 'MacBook',
    message: 'iPad note from Media Arts and Design Practice wants to sync to MacBook.',
    mockType: 'ipad-madd',
    sound: '[SOUND: notification ping]',
    choices: [
      { label: 'Accept Sync', type: 'primary', toState: 'Fragmented', devices: ['iPad', 'MacBook'], trace: 'SYNC_016_ACCEPTED', results: ['Cross-device note synced', 'MADD project trace added', 'Data synchronized', 'Emotional context unavailable'] },
      { label: 'Not Now', type: 'secondary', toState: 'Overloaded', devices: ['iPad', 'MacBook'], trace: 'SYNC_016_DEFERRED', results: ['Sync deferred', 'Devices remain unsynced', 'Future prompt scheduled', 'Emotional context unavailable'] },
    ],
  },
  {
    id: 'deadline',
    time: '5:03 PM',
    device: 'MacBook',
    message: 'Calendar deadline: Cognitive Models response due at 11:59 PM.',
    mockType: 'mac-doc',
    sound: '[SOUND: notification ping]',
    choices: [
      { label: 'Start Task', type: 'primary', toState: 'Fragmented', devices: ['MacBook', 'iPhone'], trace: 'DEADLINE_017_STARTED', results: ['Task started', 'Deadline acknowledged', 'Work state active', 'Emotional context unavailable'] },
      { label: 'Snooze Reminder', type: 'secondary', toState: 'Overloaded', devices: ['MacBook', 'iPhone'], trace: 'DEADLINE_017_SNOOZED', results: ['Future interruption scheduled', 'Deadline retained', 'Reminder duplicated', 'Emotional context unavailable'] },
    ],
  },
  {
    id: 'distraction',
    time: '6:21 PM',
    device: 'MacBook',
    message: 'A social video tab opens beside Calculus 2 and Canvas.',
    mockType: 'mac-tabs',
    sound: '[SOUND: layered notifications]',
    choices: [
      { label: 'Open', type: 'secondary', toState: 'Overloaded', devices: ['MacBook'], trace: 'DISTRACTION_018_OPENED', results: ['Attention redirected', 'Work interrupted', 'Browser clutter increased', 'Emotional context unavailable'] },
      { label: 'Resist', type: 'primary', toState: 'Fragmented', devices: ['MacBook'], trace: 'DISTRACTION_018_RESISTED', results: ['Distraction resisted', 'Work continued', 'Open tabs retained', 'Emotional context unavailable'] },
    ],
  },
];

export default function WorkDashboard() {
  return (
    <LevelRunner
      level="Work"
      interactions={workInteractions}
      transitionTime="6:45 PM"
      transitionTitle="You moved from screen to screen."
      transitionSubtitle="Work traces now overlap with school traces."
      activeDevices={['iPhone', 'Apple Watch', 'iPad', 'MacBook']}
      nextPath="/overload"
    />
  );
}
