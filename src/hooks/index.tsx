import { BrowserRouter } from 'react-router-dom';
import { ToastProvider as NotificationsProvider } from 'react-toast-notifications';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

interface AppProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <BrowserRouter>
      <NotificationsProvider>
        <ToastProvider>
          <AuthProvider>{children}</AuthProvider>
        </ToastProvider>
      </NotificationsProvider>
    </BrowserRouter>
  );
};
