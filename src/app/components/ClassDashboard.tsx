import { Interaction } from '../data/interactions';
import LevelRunner from './LevelRunner';

const classInteractions: Interaction[] = [
  {
    id: 'ipad-notes',
    time: '10:15 AM',
    device: 'iPad',
    message: 'iPad notes open during Calculus 2.',
    mockType: 'ipad-calculus',
    sound: '[SOUND: keyboard typing]',
    choices: [
      { label: 'Continue Notes', type: 'primary', toState: 'Active', devices: ['iPad'], trace: 'NOTE_006_EDITED', results: ['Apple Pencil active', 'Calculus 2 notes edited', 'Academic trace added', 'Emotional context unavailable'] },
      { label: 'Switch App', type: 'secondary', toState: 'Fragmented', devices: ['iPad', 'iPhone'], trace: 'APP_SWITCH_006', results: ['Notes interrupted', 'Attention redirected', 'Device switching increased', 'Emotional context unavailable'] },
    ],
  },
  {
    id: 'calc-problem',
    time: '10:33 AM',
    device: 'iPad',
    message: 'Calculus 2 problem set page remains open.',
    mockType: 'ipad-calculus',
    sound: '[SOUND: low ambient hum]',
    choices: [
      { label: 'Work', type: 'primary', toState: 'Active', devices: ['iPad'], trace: 'CALC_007_WORKED', results: ['Problem set progress saved', 'Deadline pressure reduced', 'Notes edited', 'Emotional context unavailable'] },
      { label: 'Put Off', type: 'secondary', toState: 'Fragmented', devices: ['iPad', 'MacBook'], trace: 'CALC_007_DEFERRED', results: ['Deadline retained', 'Unfinished item stored', 'Future interruption scheduled', 'Emotional context unavailable'] },
    ],
  },
  {
    id: 'biology-reading',
    time: '10:51 AM',
    device: 'iPad',
    message: 'Principles of Biology reading asks for a highlight.',
    mockType: 'ipad-biology',
    sound: '[SOUND: low ambient hum]',
    choices: [
      { label: 'Highlight', type: 'primary', toState: 'Active', devices: ['iPad'], trace: 'BIO_008_HIGHLIGHTED', results: ['PDF annotation saved', 'Biology reading trace added', 'Screenshot available', 'Emotional context unavailable'] },
      { label: 'Skip', type: 'secondary', toState: 'Fragmented', devices: ['iPad'], trace: 'BIO_008_SKIPPED', results: ['Reading progress incomplete', 'Deadline unresolved', 'Trace saved', 'Emotional context unavailable'] },
    ],
  },
  {
    id: 'madd-project',
    time: '11:03 AM',
    device: 'iPad',
    message: 'Media Arts and Design Practice reminder: Synced project critique.',
    mockType: 'ipad-madd',
    sound: '[SOUND: notification ping]',
    choices: [
      { label: 'Open', type: 'primary', toState: 'Fragmented', devices: ['iPad'], trace: 'MADD_009_OPENED', results: ['Project sketch opened', 'Notes interrupted', 'Design trace added', 'Emotional context unavailable'] },
      { label: 'Remind Me Later', type: 'secondary', toState: 'Fragmented', devices: ['iPad', 'iPhone'], trace: 'MADD_009_SNOOZED', results: ['Future interruption scheduled', 'Deadline retained', 'Reminder duplicated', 'Emotional context unavailable'] },
    ],
  },
  {
    id: 'cognitive-notebook',
    time: '11:18 AM',
    device: 'MacBook',
    message: 'Cognitive Models notebook is still running in another tab.',
    mockType: 'mac-code',
    sound: '[SOUND: keyboard typing]',
    choices: [
      { label: 'Run Code', type: 'primary', toState: 'Fragmented', devices: ['MacBook', 'iPad'], trace: 'COG_010_EXECUTED', results: ['Notebook executed', 'Model output stored', 'Another trace added', 'Emotional context unavailable'] },
      { label: 'Close Tab', type: 'secondary', toState: 'Active', devices: ['MacBook'], trace: 'COG_010_CLOSED', results: ['Notebook closed', 'Browser clutter reduced', 'Unfinished item removed', 'Emotional context unavailable'] },
    ],
  },
  {
    id: 'watch-stand',
    time: '11:26 AM',
    device: 'Apple Watch',
    message: 'Stand reminder arrives during class.',
    mockType: 'watch-activity',
    sound: '[SOUND: Apple Watch buzz]',
    choices: [
      { label: 'Stand', type: 'primary', toState: 'Active', devices: ['Apple Watch'], trace: 'BODY_011_STOOD', results: ['Stand hour completed', 'Movement detected', 'Body data recorded', 'Emotional context unavailable'] },
      { label: 'Dismiss', type: 'secondary', toState: 'Fragmented', devices: ['Apple Watch'], trace: 'BODY_011_DISMISSED', results: ['Stand reminder dismissed', 'Body data retained', 'Future buzz scheduled', 'Emotional context unavailable'] },
    ],
  },
  {
    id: 'phone-during-notes',
    time: '11:34 AM',
    device: 'iPhone',
    message: 'Three notifications arrive while notes are open.',
    mockType: 'iphone-notifications',
    sound: '[SOUND: layered notifications]',
    choices: [
      { label: 'Check Phone', type: 'secondary', toState: 'Fragmented', devices: ['iPhone', 'iPad'], trace: 'ATTENTION_012_REDIRECTED', results: ['Attention redirected', 'Notes interrupted', 'New trace added', 'Emotional context unavailable'] },
      { label: 'Stay Focused', type: 'primary', toState: 'Active', devices: ['iPhone', 'iPad'], trace: 'ATTENTION_012_HELD', results: ['Notifications stored unread', 'Notes continued', 'Focus trace retained', 'Emotional context unavailable'] },
    ],
  },
];

export default function ClassDashboard() {
  return (
    <LevelRunner
      level="Class"
      interactions={classInteractions}
      transitionTime="12:15 PM"
      transitionTitle="I saved what you were supposed to remember."
      transitionSubtitle="School traces collected from Calculus 2, Biology, MADD, and Cognitive Models."
      activeDevices={['iPhone', 'Apple Watch', 'iPad']}
      nextPath="/work"
    />
  );
}
