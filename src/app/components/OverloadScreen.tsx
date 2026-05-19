import { Interaction } from '../data/interactions';
import LevelRunner from './LevelRunner';

const overloadInteractions: Interaction[] = [
  {
    id: 'low-battery',
    time: '7:18 PM',
    device: 'iPhone',
    message: 'Low Battery: 10% remaining. Sync may pause.',
    mockType: 'iphone-battery',
    sound: '[SOUND: distorted ping]',
    choices: [
      { label: 'Charge', type: 'primary', toState: 'Overloaded', devices: ['iPhone'], trace: 'BATTERY_019_CHARGING', results: ['Device charging', 'Crash risk reduced', 'Sync remains available', 'Emotional context unavailable'] },
      { label: 'Ignore', type: 'secondary', toState: 'Unstable', devices: ['iPhone'], trace: 'BATTERY_019_IGNORED', results: ['Low battery warning retained', 'Device continues draining', 'Sync interrupted risk increased', 'Emotional context not found'], crashRisk: true },
    ],
  },
  {
    id: 'screen-time',
    time: '7:34 PM',
    device: 'iPhone',
    message: 'Screen Time Report: 6h 34m today, up 47%.',
    mockType: 'iphone-screentime',
    sound: '[SOUND: notification ping]',
    choices: [
      { label: 'View Report', type: 'primary', toState: 'Overloaded', devices: ['iPhone'], trace: 'SCREEN_TIME_020_VIEWED', results: ['Usage data reviewed', 'Pickups counted', 'Self-monitoring trace added', 'Emotional context unavailable'] },
      { label: 'Dismiss', type: 'secondary', toState: 'Unstable', devices: ['iPhone'], trace: 'SCREEN_TIME_020_DISMISSED', results: ['Usage pattern ignored', 'Warning retained', 'Screen time increased', 'Emotional context not found'], crashRisk: true },
    ],
  },
  {
    id: 'multi-notifications',
    time: '8:02 PM',
    device: 'All Devices',
    message: 'Multiple notifications stack across iPhone, Watch, iPad, and MacBook.',
    mockType: 'all-notifications',
    sound: '[SOUND: layered notifications]',
    choices: [
      { label: 'Clear All', type: 'primary', toState: 'Overloaded', devices: ['iPhone', 'Apple Watch', 'iPad', 'MacBook'], trace: 'NOTIFICATIONS_021_CLEARED', results: ['Alerts cleared', 'Cross-device sync executed', 'Attention reset attempted', 'Emotional context unavailable'] },
      { label: 'Open One', type: 'secondary', toState: 'Unstable', devices: ['iPhone', 'iPad'], trace: 'NOTIFICATIONS_021_OPENED_ONE', results: ['Single notification opened', 'Others remain pending', 'Attention redirected', 'Emotional context not found'], crashRisk: true },
      { label: 'Ignore', type: 'secondary', toState: 'Unstable', devices: ['iPhone', 'Apple Watch', 'iPad', 'MacBook'], trace: 'NOTIFICATIONS_021_IGNORED', results: ['Notifications stored', 'All devices remain active', 'Overload state unstable', 'Emotional context not found'], crashRisk: true },
    ],
  },
  {
    id: 'watch-summary',
    time: '8:23 PM',
    device: 'Apple Watch',
    message: 'Body summary: 8,421 steps, 11/12 stand hours, elevated heart rate.',
    mockType: 'watch-heart',
    sound: '[SOUND: Apple Watch buzz]',
    choices: [
      { label: 'View', type: 'primary', toState: 'Overloaded', devices: ['Apple Watch'], trace: 'BODY_022_VIEWED', results: ['Body data reviewed', 'Daily activity acknowledged', 'Physical trace complete', 'Emotional context unavailable'] },
      { label: 'Dismiss', type: 'secondary', toState: 'Unstable', devices: ['Apple Watch'], trace: 'BODY_022_DISMISSED', results: ['Summary dismissed', 'Body data recorded anyway', 'Feeling unavailable', 'Emotional context not found'] },
    ],
  },
  {
    id: 'deadline-repeat',
    time: '9:15 PM',
    device: 'MacBook',
    message: 'Deadline reminder repeats: Calculus 2 and Cognitive Models due before midnight.',
    mockType: 'mac-canvas',
    sound: '[SOUND: layered notifications]',
    choices: [
      { label: 'Work', type: 'primary', toState: 'Overloaded', devices: ['MacBook', 'iPhone'], trace: 'DEADLINE_023_WORKED', results: ['Work session resumed', 'Deadline acknowledged', 'Unfinished items reduced', 'Emotional context unavailable'] },
      { label: 'Snooze Again', type: 'secondary', toState: 'Unstable', devices: ['MacBook', 'iPhone', 'Apple Watch'], trace: 'DEADLINE_023_SNOOZED_AGAIN', results: ['Reminder repeated', 'Deadline unresolved', 'Future interruption scheduled', 'Emotional context not found'], crashRisk: true },
    ],
  },
  {
    id: 'final-sync',
    time: '10:47 PM',
    device: 'All Devices',
    message: 'Final sync prompt. The archive is ready to compile the day.',
    mockType: 'all-notifications',
    sound: '[SOUND: distorted ping]',
    choices: [
      { label: 'Sync Day', type: 'primary', toState: 'Overloaded', devices: ['iPhone', 'Apple Watch', 'iPad', 'MacBook'], trace: 'DAY_024_SYNCED', results: ['One day archived', 'Device traces compiled', 'Sync Summary generated', 'Emotional context not found'] },
      { label: 'Keep Going', type: 'secondary', toState: 'Unstable', devices: ['iPhone', 'Apple Watch', 'iPad', 'MacBook'], trace: 'DAY_024_CONTINUED', results: ['Archive compilation delayed', 'Devices remain active', 'Crash risk increased', 'Emotional context not found'], crashRisk: true },
    ],
  },
];

export default function OverloadScreen() {
  return (
    <LevelRunner
      level="Overload"
      interactions={overloadInteractions}
      transitionTime="10:59 PM"
      transitionTitle="Everything was synced."
      transitionSubtitle="Nothing was still."
      activeDevices={['iPhone', 'Apple Watch', 'iPad', 'MacBook']}
      nextPath="/archive"
      nextLabel="View Archive"
    />
  );
}
