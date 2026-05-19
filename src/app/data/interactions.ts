export type SystemState = 'Calm' | 'Active' | 'Fragmented' | 'Overloaded' | 'Unstable';

export type DeviceName = 'iPhone' | 'Apple Watch' | 'iPad' | 'MacBook' | 'All Devices';

export type MockType =
  | 'iphone-alarm'
  | 'iphone-lock'
  | 'iphone-notifications'
  | 'iphone-screentime'
  | 'iphone-camera'
  | 'iphone-battery'
  | 'watch-face'
  | 'watch-activity'
  | 'watch-heart'
  | 'ipad-calculus'
  | 'ipad-biology'
  | 'ipad-madd'
  | 'ipad-cognitive'
  | 'ipad-canvas'
  | 'mac-canvas'
  | 'mac-tabs'
  | 'mac-email'
  | 'mac-doc'
  | 'mac-code'
  | 'all-notifications';

export interface ChoiceOutcome {
  label: string;
  type?: 'primary' | 'secondary';
  toState: SystemState;
  devices: DeviceName[];
  trace: string;
  results: string[];
  crashRisk?: boolean;
}

export interface Interaction {
  id: string;
  time: string;
  device: DeviceName;
  message: string;
  mockType: MockType;
  sound: string;
  choices: ChoiceOutcome[];
}

export const stateOrder: SystemState[] = ['Calm', 'Active', 'Fragmented', 'Overloaded', 'Unstable'];

export const systemLogs = [
  'TRACE_021 SAVED',
  'REMINDER_004 SNOOZED',
  'DEVICE_SYNC ACTIVE',
  'EMOTIONAL_CONTEXT: NOT FOUND',
  'OVERLOAD_STATE: UNSTABLE',
  'ARCHIVE_COMPILATION FAILED',
  'ATTENTION_REDIRECTED',
  'BODY_DATA RECORDED',
  'DEADLINE_UNRESOLVED',
  'SCREEN_TIME INCREASED',
];

export const classes = [
  'Calculus 2',
  'Media Arts and Design Practice',
  'Principles of Biology',
  'Cognitive Models',
];
