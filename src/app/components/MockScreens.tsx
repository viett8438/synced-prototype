import { MockType, classes } from '../data/interactions';

export function MockScreen({ type }: { type: MockType }) {
  switch (type) {
    case 'iphone-alarm':
      return <PhoneShell title="6:47" subtitle="Alarm" rows={['Calculus 2 problem set due 11:59 PM', 'Biology lab reading still unread']} accent="soft alarm" />;
    case 'iphone-lock':
      return <PhoneShell title="7:15" subtitle="Today" rows={['Calculus 2 in 10 minutes', 'MADD critique at 1:30 PM', 'Reminder: Cognitive Models notebook']} />;
    case 'iphone-notifications':
      return <NotificationStack rows={['Canvas: Biology lab quiz opens at noon', 'Messages: can you send Calc notes?', 'Calendar: MADD studio critique', 'Reminders: Cognitive Models response']} />;
    case 'iphone-screentime':
      return <Report title="Screen Time" value="6h 34m" rows={['Pickups: 89', 'Safari: 2h 11m', 'Messages: 48m', 'Canvas: 37m']} />;
    case 'iphone-camera':
      return <CameraGrid />;
    case 'iphone-battery':
      return <PhoneShell title="10%" subtitle="Low Battery" rows={['Low Power Mode available', 'Sync may pause soon', 'Archive risk increased']} warning />;
    case 'watch-face':
      return <WatchFace rows={['Calculus 2 10:00', 'Stand 11/12', '8,421 steps']} />;
    case 'watch-activity':
      return <WatchRings />;
    case 'watch-heart':
      return <Report title="Heart Rate" value="118 bpm" rows={['Elevated at 3:42 PM', 'Average: 72 bpm', 'Recorded during browser switching']} />;
    case 'ipad-calculus':
      return <Notes title="Calculus 2" rows={['u-substitution review', 'integral of x e^x dx', 'Problem Set 9: 4, 7, 12, 18', 'mistake: forgot constant C']} />;
    case 'ipad-biology':
      return <Notes title="Principles of Biology" rows={['Cell signaling pathway', 'Kinase cascade diagram', 'Lab: enzyme rate vs temperature', 'Highlight: feedback inhibition']} />;
    case 'ipad-madd':
      return <Notes title="Media Arts and Design Practice" rows={['Synced project sketch', 'dark archive interface', 'sound cue: low ambient hum', 'critique notes: reduce repetition']} />;
    case 'ipad-cognitive':
      return <Notes title="Cognitive Models" rows={['Bayesian update example', 'attention as limited resource', 'notebook: reaction_time_model.ipynb', 'run failed: missing value']} />;
    case 'ipad-canvas':
      return <CanvasList compact />;
    case 'mac-canvas':
      return <CanvasList />;
    case 'mac-tabs':
      return <BrowserTabs />;
    case 'mac-email':
      return <Inbox />;
    case 'mac-doc':
      return <DocumentDraft />;
    case 'mac-code':
      return <CodeNotebook />;
    case 'all-notifications':
      return <NotificationStack dense rows={['iPhone: Low battery 10%', 'Watch: Heart rate elevated', 'iPad: Biology reading unfinished', 'MacBook: 37 tabs open', 'Canvas: Calculus 2 due tonight']} />;
    default:
      return null;
  }
}

function PhoneShell({ title, subtitle, rows, warning }: { title: string; subtitle: string; rows: string[]; accent?: string; warning?: boolean }) {
  return (
    <div className="mock-screen phone-mock">
      <div className="flex justify-between text-[10px] text-gray-500"><span>Carrier</span><span>{warning ? '10%' : '82%'}</span></div>
      <div className="text-center py-3">
        <p className={`text-4xl ${warning ? 'text-red-300' : 'text-white'}`}>{title}</p>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
      <div className="space-y-2">
        {rows.map((row) => <div key={row} className={`mock-row ${warning ? 'border-red-400/20 text-red-100/80' : ''}`}>{row}</div>)}
      </div>
    </div>
  );
}

function NotificationStack({ rows, dense }: { rows: string[]; dense?: boolean }) {
  return (
    <div className={`mock-screen space-y-2 ${dense ? 'overlap-stack' : ''}`}>
      {rows.map((row, index) => (
        <div key={row} className="notification-card" style={{ animationDelay: `${index * 80}ms` }}>
          <p className="text-[10px] uppercase text-gray-500">Notification</p>
          <p className="text-xs text-gray-200">{row}</p>
        </div>
      ))}
    </div>
  );
}

function Report({ title, value, rows }: { title: string; value: string; rows: string[] }) {
  return (
    <div className="mock-screen">
      <p className="text-xs text-gray-500 mb-2">{title}</p>
      <p className="text-3xl text-white mb-3">{value}</p>
      <div className="space-y-1">{rows.map((row) => <p key={row} className="text-xs text-gray-400">{row}</p>)}</div>
    </div>
  );
}

function CameraGrid() {
  return (
    <div className="mock-screen">
      <div className="grid grid-cols-3 gap-1">
        {['Calc board', 'Bio slide', 'MADD sketch', 'Watch face', 'Desk', 'Canvas'].map((item) => (
          <div key={item} className="aspect-square bg-white/10 border border-white/10 p-1 text-[9px] text-gray-500 flex items-end">{item}</div>
        ))}
      </div>
    </div>
  );
}

function WatchFace({ rows }: { rows: string[] }) {
  return (
    <div className="mock-screen flex justify-center">
      <div className="w-40 h-40 rounded-[2.2rem] border border-white/20 bg-black p-5 text-center">
        <p className="text-3xl text-white">9:52</p>
        <div className="mt-3 space-y-1">{rows.map((row) => <p key={row} className="text-[10px] text-gray-400">{row}</p>)}</div>
      </div>
    </div>
  );
}

function WatchRings() {
  return (
    <div className="mock-screen flex items-center justify-center gap-5">
      <div className="ring red" /><div className="ring green" /><div className="ring blue" />
      <div className="text-xs text-gray-400"><p>Move 420/500</p><p>Exercise 22/30</p><p>Stand 11/12</p></div>
    </div>
  );
}

function Notes({ title, rows }: { title: string; rows: string[] }) {
  return (
    <div className="mock-screen ruled-note">
      <p className="text-sm text-white mb-2">{title}</p>
      {rows.map((row) => <p key={row} className="note-line">{row}</p>)}
    </div>
  );
}

function CanvasList({ compact }: { compact?: boolean }) {
  return (
    <div className="mock-screen">
      <p className="text-sm text-white mb-3">Canvas Dashboard</p>
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-2'} gap-2`}>
        {classes.map((name) => <div key={name} className="mock-row">{name}<br /><span className="text-[10px] text-gray-500">1 item due</span></div>)}
      </div>
    </div>
  );
}

function BrowserTabs() {
  return (
    <div className="mock-screen">
      <div className="flex gap-1 mb-3 overflow-hidden">
        {['Calc 2', 'MADD', 'Biology', 'Cognitive Models', 'Canvas', '+32'].map((tab) => <span key={tab} className="tab-chip">{tab}</span>)}
      </div>
      <p className="text-xs text-gray-300">Canvas - Assignments</p>
      <p className="text-[10px] text-gray-500 mt-2">Deadline retained. Tabs left open.</p>
    </div>
  );
}

function Inbox() {
  return (
    <div className="mock-screen space-y-2">
      {['Calculus 2: Problem set note', 'Biology Lab: enzyme worksheet', 'MADD: critique groups', 'Cognitive Models: notebook feedback'].map((row) => <div key={row} className="mock-row">{row}</div>)}
    </div>
  );
}

function DocumentDraft() {
  return (
    <div className="mock-screen">
      <p className="text-sm text-white">MADD Project Statement</p>
      <p className="text-xs text-gray-500 mt-3 leading-relaxed">Synced is a digital archive that can recover device behavior but not the internal feeling attached to it...</p>
    </div>
  );
}

function CodeNotebook() {
  return (
    <div className="mock-screen font-mono text-[10px] text-gray-400">
      <p>reaction_time_model.ipynb</p>
      <p className="mt-3 text-slate-200/70">prior = Normal(mu=420, sigma=80)</p>
      <p>attention_switches = 147</p>
      <p className="text-red-300/70">warning: missing emotional_context</p>
    </div>
  );
}
