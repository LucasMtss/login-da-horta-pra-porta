import { useCallback, useState } from 'react';
import * as Yup from 'yup';

import logo from 'assets/images/img/logoHorta.png';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useAuth } from 'hooks/auth';
import getValidationErrors from 'utils/getValidationErrors';
import { signInValidator } from 'validators/signIn';
import { useToast } from 'hooks/toast';

import {
  Container,
  ContainerButton,
  ContainerInput,
  ContainerLogin,
  Logo,
} from './styles';

export function SignIn(): JSX.Element {
  const { addError } = useToast();

  const { signIn, loading } = useAuth();
  const [errors, setErrors] = useState({});

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = useCallback(async () => {
    try {
      setErrors({});

      await signInValidator.validate({ cpf, password }, { abortEarly: false });

      signIn({ cpf, password });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setErrors(getValidationErrors(err));
        return;
      }

      addError('Não foi possível realizar o login');
    }
  }, [cpf, password, signIn, addError]);

  return (
    <Container>
      <Logo src={logo} alt="Da Horta pra Fora" />
      <ContainerLogin>
        <h2>Bem vindo</h2>

        <ContainerInput>
          <Input
            name="cpf"
            errors={errors}
            value={cpf}
            placeholder="CPF"
            type="masked"
            mask="999.999.999-99"
            onChange={e => setCpf(e.target.value)}
          />
        </ContainerInput>

        <ContainerInput>
          <Input
            name="password"
            type="password"
            errors={errors}
            value={password}
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
        </ContainerInput>

        <span className="forgot-password">Esqueci a senha</span>

        <ContainerButton>
          <Button size="large" onClick={() => handleSignIn()}>
            {loading ? 'Carregando' : 'Entrar'}
          </Button>
        </ContainerButton>
        <ContainerButton>
          <Button size="regular" onClick={() => handleSignIn()}>
            Cadastrar
          </Button>
        </ContainerButton>
      </ContainerLogin>
    </Container>
  );
}
