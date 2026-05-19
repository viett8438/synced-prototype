import { RouterProvider } from 'react-router';
import { router } from './routes';
import { DayProvider } from './context/DayContext';

export default function App() {
  return (
    <DayProvider>
      <RouterProvider router={router} />
    </DayProvider>
  );
}