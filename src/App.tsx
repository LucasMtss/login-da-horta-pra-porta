import { AppProvider } from 'hooks';
import { Routes } from './routes';
import { GlobalStyles } from './styles/global';

export function App(): JSX.Element {
  return (
    <>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyles />
    </>
  );
}
