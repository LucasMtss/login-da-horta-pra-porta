import * as Yup from 'yup';
import { cpf } from 'cpf-cnpj-validator';

export const signUpValidator = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
    .required('Campo obrigatório')
    .email('Endereço de email inválido'),
  cpf: Yup.string()
    .test('validate-cpf', 'CPF inválido', value => {
      if (value && cpf.isValid(value)) return true;
      return false;
    })
    .required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});
