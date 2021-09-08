import {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import api from 'services/api';
import { signInFake } from 'services/singInFake';
import { User } from 'interfaces/user';
import { Token } from 'interfaces/token';
import axios from 'axios';
import { TOKEN, USER } from 'constants/environment';
import { useToast } from './toast';

interface SignInCredentials {
  cpf: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn: (credentials: SignInCredentials) => void;
  signOut: () => void;
}

interface IAuthProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface IData {
  token: Token;
  user: User;
}

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: IAuthProviderProps): JSX.Element => {
  const [data, setData] = useState({} as IData);
  const [loading, setLoading] = useState(false);
  const { handleApiError, addError, addSuccess } = useToast();

  useEffect(() => {
    function loadStoragedData() {
      const token = localStorage.getItem(TOKEN);
      const user = localStorage.getItem(USER);

      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        setData({ token: JSON.parse(token), user: JSON.parse(user) });
      }
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(
    async ({ cpf, password }) => {
      try {
        setLoading(true);
        const response = await signInFake(cpf, password);

        localStorage.setItem(TOKEN, JSON.stringify(response.data.token));
        localStorage.setItem(USER, JSON.stringify(response.data.user));

        api.defaults.headers.authorization = `Bearer ${response.data.token.access_token}`;

        setData({
          token: response.data.token,
          user: response.data.user,
        });
        addSuccess('Login realizado com sucesso');
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 400) {
            addError('Usuário e/ou senha inválidos');
          } else {
            handleApiError(err);
          }
        }
        addError('Erro ao realizar login');
      } finally {
        setLoading(false);
      }
    },
    [handleApiError, addError, addSuccess],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER);
    setData({} as IData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
