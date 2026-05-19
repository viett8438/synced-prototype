import { createHashRouter } from "react-router";
import TitleScreen from "./components/TitleScreen.tsx";
import MorningDashboard from "./components/MorningDashboard.tsx";
import ClassDashboard from "./components/ClassDashboard.tsx";
import WorkDashboard from "./components/WorkDashboard.tsx";
import OverloadScreen from "./components/OverloadScreen.tsx";
import ArchiveDashboard from "./components/ArchiveDashboard.tsx";
import IPhoneArchive from "./components/IPhoneArchive.tsx";
import AppleWatchArchive from "./components/AppleWatchArchive.tsx";
import IPadArchive from "./components/IPadArchive.tsx";
import MacBookArchive from "./components/MacBookArchive.tsx";
import SyncSummary from "./components/SyncSummary.tsx";
import FinalScreen from "./components/FinalScreen.tsx";

export const router = createHashRouter([
  {
    path: "/",
    Component: TitleScreen,
  },
  {
    path: "/morning",
    Component: MorningDashboard,
  },
  {
    path: "/class",
    Component: ClassDashboard,
  },
  {
    path: "/work",
    Component: WorkDashboard,
  },
  {
    path: "/overload",
    Component: OverloadScreen,
  },
  {
    path: "/archive",
    Component: ArchiveDashboard,
  },
  {
    path: "/archive/iphone",
    Component: IPhoneArchive,
  },
  {
    path: "/archive/watch",
    Component: AppleWatchArchive,
  },
  {
    path: "/archive/ipad",
    Component: IPadArchive,
  },
  {
    path: "/archive/macbook",
    Component: MacBookArchive,
  },
  {
    path: "/sync-summary",
    Component: SyncSummary,
  },
  {
    path: "/final",
    Component: FinalScreen,
  },
]);
