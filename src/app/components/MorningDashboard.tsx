import { Interaction } from '../data/interactions';
import LevelRunner from './LevelRunner';

const morningInteractions: Interaction[] = [
  {
    id: 'alarm',
    time: '6:47 AM',
    device: 'iPhone',
    message: 'Alarm. Calculus 2 problem set still due tonight.',
    mockType: 'iphone-alarm',
    sound: '[SOUND: soft alarm]',
    choices: [
      { label: 'Wake Up', type: 'primary', toState: 'Calm', devices: ['iPhone', 'Apple Watch'], trace: 'WAKE_001_CONFIRMED', results: ['Day started', 'First movement detected', 'Deadline retained', 'Emotional context unavailable'] },
      { label: 'Snooze', type: 'secondary', toState: 'Active', devices: ['iPhone', 'Apple Watch'], trace: 'REMINDER_001_SNOOZED', results: ['Future interruption scheduled', 'Wake trace delayed', 'Deadline retained', 'Emotional context unavailable'] },
    ],
  },
  {
    id: 'watch-buzz',
    time: '7:02 AM',
    device: 'Apple Watch',
    message: 'Apple Watch buzz. Heart rate and first stand hour recorded.',
    mockType: 'watch-face',
    sound: '[SOUND: Apple Watch buzz]',
    choices: [
      { label: 'Check', type: 'primary', toState: 'Active', devices: ['Apple Watch'], trace: 'BODY_DATA_ACCESSED', results: ['Body data opened', 'Stand reminder acknowledged', 'Movement trace saved', 'Emotional context unavailable'] },
      { label: 'Ignore', type: 'secondary', toState: 'Active', devices: ['Apple Watch'], trace: 'WATCH_002_IGNORED', results: ['Reminder ignored', 'Body data continued recording', 'Future buzz retained', 'Emotional context unavailable'] },
    ],
  },
  {
    id: 'calendar',
    time: '7:15 AM',
    device: 'iPhone',
    message: 'Calendar alert: Calculus 2 in 10 minutes.',
    mockType: 'iphone-lock',
    sound: '[SOUND: notification ping]',
    choices: [
      { label: 'Open', type: 'primary', toState: 'Active', devices: ['iPhone'], trace: 'SCHEDULE_003_OPENED', results: ['Attention redirected', 'Class schedule reviewed', 'New trace added', 'Emotional context unavailable'] },
      { label: 'Dismiss', type: 'secondary', toState: 'Fragmented', devices: ['iPhone'], trace: 'SCHEDULE_003_DISMISSED', results: ['Calendar retained in background', 'Reminder pressure increased', 'Trace saved', 'Emotional context unavailable'] },
    ],
  },
  {
    id: 'message',
    time: '7:28 AM',
    device: 'iPhone',
    message: 'Message preview asks for the Calculus 2 notes.',
    mockType: 'iphone-notifications',
    sound: '[SOUND: notification ping]',
    choices: [
      { label: 'Reply', type: 'primary', toState: 'Fragmented', devices: ['iPhone'], trace: 'MESSAGE_004_REPLIED', results: ['Conversation opened', 'Attention redirected', 'Calculus 2 note request stored', 'Emotional context unavailable'] },
      { label: 'Ignore', type: 'secondary', toState: 'Fragmented', devices: ['iPhone'], trace: 'MESSAGE_004_UNREAD', results: ['Message marked unread', 'Social context deferred', 'Future interruption scheduled', 'Emotional context unavailable'] },
    ],
  },
  {
    id: 'camera-memory',
    time: '8:41 AM',
    device: 'iPhone',
    message: 'Camera roll memory appears between screenshots of Biology slides and MADD sketches.',
    mockType: 'iphone-camera',
    sound: '[SOUND: low ambient hum]',
    choices: [
      { label: 'Save', type: 'primary', toState: 'Fragmented', devices: ['iPhone'], trace: 'MEMORY_005_SAVED', results: ['Screenshot memory saved', 'Camera roll trace added', 'Academic images retained', 'Emotional context unavailable'] },
      { label: 'Scroll Past', type: 'secondary', toState: 'Fragmented', devices: ['iPhone'], trace: 'MEMORY_005_SKIPPED', results: ['Memory viewed', 'Scroll recorded', 'Image not marked important', 'Emotional context unavailable'] },
    ],
  },
];

export default function MorningDashboard() {
  return (
    <LevelRunner
      level="Morning"
      interactions={morningInteractions}
      transitionTime="9:47 AM"
      transitionTitle="I saw you wake up."
      transitionSubtitle="Morning traces compiled across iPhone and Apple Watch."
      activeDevices={['iPhone', 'Apple Watch']}
      nextPath="/class"
    />
  );
}
