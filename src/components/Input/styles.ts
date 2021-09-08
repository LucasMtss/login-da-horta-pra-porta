import styled, { css } from 'styled-components';
import Masked from 'react-input-mask';
import Currency from 'react-currency-input-field';
import { colors } from 'styles/colors';

interface InputProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<InputProps>`
  position: relative;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--white);
  background: transparent;

  ${props => {
    if (props.isErrored)
      return css`
        border-color: var(--danger);
      `;
    return css``;
  }}

  width: 100%;
  height: 2.64rem;
`;

const textInputDefaultStyle = css`
  padding-left: 0.5rem;
  font-size: 1.4rem;
  color: var(--white);
  height: 100%;
  width: 100%;
  background: transparent;
  border: 0;
`;

export const TextInput = styled.input`
  ${textInputDefaultStyle};

  ::placeholder {
    color: var(--white);
  }
`;

export const TextInputMask = styled(Masked)`
  ${textInputDefaultStyle};

  ::placeholder {
    color: var(--white);
  }
`;

export const CurrencyInput = styled(Currency)`
  ::placeholder {
    color: var(--white);
  }

  ${textInputDefaultStyle};
`;

export const ErrorMessage = styled.span`
  position: absolute;
  font-size: 0.8rem;
  color: ${colors.danger};
  bottom: -1.1rem;
  left: 0.5rem;
`;
