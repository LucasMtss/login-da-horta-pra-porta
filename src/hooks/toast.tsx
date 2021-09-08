import { createContext, useCallback, useContext } from 'react';

import { useToasts } from 'react-toast-notifications';
import { AxiosResponse } from 'axios';

interface IRequestError {
  status?: number;
  message: string;
  response?: AxiosResponse;
}

interface ToastContextData {
  addSuccess: (text: string) => void;
  addError: (text: string) => void;
  addWarning: (text: string) => void;
  addInfo: (text: string) => void;
  handleApiError: (error: IRequestError) => void;
}

interface IToastProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ToastContext = createContext({} as ToastContextData);

const ToastProvider = ({ children }: IToastProviderProps): JSX.Element => {
  const { addToast } = useToasts();

  const addSuccess = useCallback(
    text => {
      addToast(text, { autoDismiss: true, appearance: 'success' });
    },
    [addToast],
  );

  const addError = useCallback(
    text => {
      addToast(text, { autoDismiss: true, appearance: 'error' });
    },
    [addToast],
  );

  const addWarning = useCallback(
    text => {
      addToast(text, { autoDismiss: true, appearance: 'warning' });
    },
    [addToast],
  );

  const addInfo = useCallback(
    text => {
      addToast(text, { autoDismiss: true, appearance: 'info' });
    },
    [addToast],
  );

  const handleApiError = useCallback(
    (error: IRequestError) => {
      const { response, message } = error;

      if (response?.data?.error) {
        addError(response.data.error.message);
      }

      if (!message) addError('Ocorreu um erro inesperado!');
      if (message === 'Network Error' || message.includes('timeout')) {
        addError(
          'Não foi possível acessar o servidor, por favor verifique sua conexão',
        );
      }

      addError('Ocorreu um erro inesperado!');
    },
    [addError],
  );

  return (
    <ToastContext.Provider
      value={{ addSuccess, addError, addWarning, addInfo, handleApiError }}
    >
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
