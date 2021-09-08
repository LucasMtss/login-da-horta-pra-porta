import { Button } from 'components/Button';
import { useAuth } from 'hooks/auth';
import { MdMood } from 'react-icons/md';
import { Container } from './styles';

export function HomePage(): JSX.Element {
  const { signOut } = useAuth();
  return (
    <Container>
      <div className="header">
        <MdMood fill="#fff" /> <span>Seja bem-vindo</span>
        <div className="container-button">
          <Button name="logout" size="regular" onClick={() => signOut()}>
            Sair
          </Button>
        </div>
      </div>
    </Container>
  );
}
