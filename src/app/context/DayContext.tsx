import { createContext, useContext, useState, ReactNode } from 'react';
import { SystemState } from '../data/interactions';

interface Choice {
  action: string;
  devices: string[];
  level: string;
  fromState?: SystemState;
  toState?: SystemState;
  trace?: string;
  results?: string[];
}

interface DayContextType {
  choices: Choice[];
  systemState: SystemState;
  addChoice: (choice: Choice) => void;
  updateSystemState: (state: SystemState) => void;
  resetDay: () => void;
  getStats: () => {
    notificationsOpened: number;
    notificationsIgnored: number;
    screenshotsSaved: number;
    tabsOpen: number;
    notesEdited: number;
    remindersSnoozed: number;
    overloadActions: number;
  };
}

const DayContext = createContext<DayContextType | undefined>(undefined);

export function DayProvider({ children }: { children: ReactNode }) {
  const [choices, setChoices] = useState<Choice[]>([]);
  const [systemState, setSystemState] = useState<SystemState>('Calm');

  const addChoice = (choice: Choice) => {
    setChoices(prev => [...prev, choice]);
  };

  const updateSystemState = (state: SystemState) => {
    setSystemState(state);
  };

  const resetDay = () => {
    setChoices([]);
    setSystemState('Calm');
  };

  const getStats = () => {
    const notificationsOpened = choices.filter(c =>
      c.action.includes('Open') || c.action.includes('Check') || c.action.includes('Reply')
    ).length;

    const notificationsIgnored = choices.filter(c =>
      c.action.includes('Ignore') || c.action.includes('Dismiss')
    ).length;

    const screenshotsSaved = choices.filter(c =>
      c.action.includes('Screenshot') || c.action.includes('Save')
    ).length;

    const tabsOpen = choices.filter(c =>
      c.action.includes('Open New Tab') || c.action.includes('Keep Open')
    ).length;

    const notesEdited = choices.filter(c =>
      c.action.includes('Notes') ||
      c.action.includes('Highlight') ||
      c.action.includes('Run Code') ||
      c.action.includes('Accept Sync')
    ).length;

    const remindersSnoozed = choices.filter(c =>
      c.action.includes('Snooze') || c.action.includes('Remind Me Later')
    ).length;

    const overloadActions = choices.filter(c =>
      c.action.includes('Snooze') ||
      c.action.includes('Keep Open') ||
      c.action.includes('Ignore') ||
      c.action.includes('Remind Me Later')
    ).length;

    return {
      notificationsOpened,
      notificationsIgnored,
      screenshotsSaved,
      tabsOpen: 37 + tabsOpen,
      notesEdited,
      remindersSnoozed,
      overloadActions,
    };
  };

  return (
    <DayContext.Provider value={{
      choices,
      systemState,
      addChoice,
      updateSystemState,
      resetDay,
      getStats
    }}>
      {children}
    </DayContext.Provider>
  );
}

export function useDay() {
  const context = useContext(DayContext);
  if (!context) {
    throw new Error('useDay must be used within DayProvider');
  }
  return context;
}
