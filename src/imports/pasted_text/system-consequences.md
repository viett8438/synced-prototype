Add a conditional crash / system interruption mechanic and consequence screens after each choice.

I want the prototype to feel like the Apple ecosystem is reacting to the viewer’s choices. After each interaction choice, show a brief consequence screen before moving to the next event. This screen should summarize which devices were affected and what happened as a result of the choice.

The consequence screen should not feel like a game score screen. It should feel like a system status update, sync log, or device report.

Consequence screen structure:
- Title: “Sync Log” or “System Response”
- Choice made: [example: Snoozed alarm]
- Devices affected: iPhone, Apple Watch, iPad, MacBook
- Result:
  - Trace saved
  - Reminder delayed
  - Attention redirected
  - Overload increased
  - Body data recorded
  - Deadline retained
  - Emotional context unavailable
- Button: Continue

Use short, system-like wording.

Example consequence screens:

1. If viewer chooses “Snooze” on the iPhone alarm:
Title: Sync Log
Choice: Alarm snoozed
Devices affected: iPhone, Apple Watch
Result:
- Late start trace added
- Apple Watch schedule pressure increased
- Morning state: delayed
- Emotional context: unavailable
Button: Continue

2. If viewer chooses “Wake Up”:
Title: Sync Log
Choice: Alarm dismissed
Devices affected: iPhone, Apple Watch
Result:
- Day started
- First movement detected
- Morning state: stable
- Emotional context: unavailable
Button: Continue

3. If viewer chooses “Check Phone” during class:
Title: Sync Log
Choice: Notification opened
Devices affected: iPhone, iPad
Result:
- Attention redirected
- Class notes interrupted
- New trace added to archive
- Focus state: fragmented
Button: Continue

4. If viewer chooses “Stay Focused”:
Title: Sync Log
Choice: Notification ignored
Devices affected: iPhone, iPad
Result:
- Notification stored unread
- Notes continued
- Focus state: maintained
- Emotional context: unavailable
Button: Continue

5. If viewer chooses “Keep Tabs Open”:
Title: Sync Log
Choice: Tabs left open
Devices affected: MacBook
Result:
- Browser clutter increased
- Deadline still active
- Overload state: rising
- Unfinished items stored
Button: Continue

6. If viewer chooses “Snooze Reminder”:
Title: Sync Log
Choice: Reminder snoozed
Devices affected: iPhone, MacBook, Apple Watch
Result:
- Reminder duplicated across devices
- Deadline retained
- Future interruption scheduled
- Overload state: rising
Button: Continue

7. If viewer chooses “Sync Day”:
Title: Sync Log
Choice: Day synced
Devices affected: iPhone, Apple Watch, iPad, MacBook
Result:
- 1 day archived
- Device traces compiled
- Sync Summary generated
- Emotional context: not found
Button: View Archive

Also add a conditional “System Crash” or “Sync Error” screen that appears occasionally, depending on the viewer’s path. It should not happen on every run. It should appear more likely if the viewer repeatedly chooses options that increase overload, such as:
- Snooze
- Ignore
- Keep Open
- Open New Tab
- Check Phone
- Remind Me Later
- Snooze Again
- Keep Going
- Dismiss Screen Time
- Ignore Low Battery

The crash screen should feel like a calm but unsettling system failure, not a colorful error page.

Crash screen title options:
- Sync Interrupted
- System Overload
- Archive Error
- Emotional Context Not Found
- Day Failed to Compile

Crash screen text examples:
- “Too many unresolved traces.”
- “The day could not be summarized cleanly.”
- “Devices remain active.”
- “Emotional context could not be recovered.”
- “Please continue from last stable state.”

Crash screen buttons:
- “Resume Day”
- “View Partial Archive”
- “Force Sync”

Crash screen behavior:
- Resume Day returns to the next event in the current level.
- View Partial Archive sends the viewer to a partial Archive Dashboard with some missing or glitched sections.
- Force Sync skips to Today’s Sync Summary but marks the archive as incomplete.

If Figma cannot create true random crashes, simulate it with optional path-based crashes. For example:
- If the viewer chooses “Keep Going” during overload, send them to the crash screen.
- If the viewer chooses “Snooze Again” after already snoozing reminders, send them to the crash screen.
- If the viewer chooses “Ignore Low Battery,” send them to the crash screen or show a warning first.
- If the viewer chooses “Open One” during multiple notifications, open nested notifications and then possibly crash.

Add a subtle “System State” indicator throughout the day:
- Calm
- Active
- Fragmented
- Overloaded
- Unstable

The system state should update after choices. Consequence screens should mention the state change.

Example:
System State: Calm → Active
System State: Active → Fragmented
System State: Fragmented → Overloaded
System State: Overloaded → Unstable

When System State reaches “Unstable,” the crash screen can appear.

Keep the design consistent:
- black background
- dark gray cards
- thin borders
- white/gray text
- muted blue-gray accents
- minimal system-like language
- no bright game-like visuals

The crash screen should still feel elegant and Apple-inspired, but colder and more unsettling.