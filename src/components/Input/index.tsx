import { CSSProperties, useCallback, useEffect, useState } from 'react';
import { CurrencyInputProps } from 'react-currency-input-field/dist/components/CurrencyInputProps';
import { Props } from 'react-input-mask';

import {
  Container,
  TextInput,
  TextInputMask,
  CurrencyInput,
  ErrorMessage,
} from './styles';

interface IError {
  [key: string]: string;
}

interface InputProps extends Omit<Props, 'mask'> {
  name: string;
  errors?: IError;
  style?: CSSProperties | undefined;
  mask?: string | Array<string | RegExp>;
  type?: string;
  prefix?: string | undefined;
  onValueChange?: () => void;
}

export function Input({
  name, // nome único para o input. Obrigatório para o gerenciamento de erros.
  errors = {}, // lista de erros com chave (nome do campo) e valor (mensagem de erro).
  style,
  mask = '', // máscara utilizada no mask-input
  type = 'text', // define o tipo do input. Para texto comum, não passar nada. Maiores infos na doc das libs
  prefix = '', // Prefixo da máscara de moeda (type: currency)
  onValueChange, // Mesma utilizade do onChangeText. Essa prop é utilizada apenas para a máscara de moeda
  ...rest
}: InputProps): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    if (errors[name]) setIsErrored(true);
    else setIsErrored(false);
  }, [errors, name]);

  const getTextInput = useCallback(
    () => (
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type={type}
        {...rest}
      />
    ),
    [rest, type],
  );

  const getMaskedInput = useCallback(
    () => (
      <TextInputMask
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        mask={mask}
        maskPlaceholder={null}
        {...rest}
      />
    ),
    [mask, rest],
  );

  const getCurrencyInput = useCallback(
    () => (
      <CurrencyInput
        groupSeparator="."
        decimalSeparator=","
        prefix={prefix}
        decimalsLimit={2}
        onValueChange={onValueChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...(rest as CurrencyInputProps)}
      />
    ),
    [prefix, rest, onValueChange],
  );

  const mountInput = useCallback(() => {
    if (type === 'currency') return getCurrencyInput();
    if (type === 'masked') return getMaskedInput();
    return getTextInput();
  }, [type, getCurrencyInput, getMaskedInput, getTextInput]);

  return (
    <Container style={style} isFocused={isFocused} isErrored={isErrored}>
      {mountInput()}
      <ErrorMessage>{isErrored && errors[name]}</ErrorMessage>
    </Container>
  );
}
