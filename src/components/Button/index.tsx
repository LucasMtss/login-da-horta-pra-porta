import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: string;
  size?: 'small' | 'regular' | 'large';
}

export function Button({
  loading = false,
  children,
  size = 'small',
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Container size={size} disabled={loading} {...rest}>
      <span>{loading ? 'Carregando...' : children}</span>
    </Container>
  );
}
