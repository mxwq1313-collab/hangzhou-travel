import { RouterProvider } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { router } from './router';

/**
 * 应用根组件
 * Root component — provides Language context and Router
 */
export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}