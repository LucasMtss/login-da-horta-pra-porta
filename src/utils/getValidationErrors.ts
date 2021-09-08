import * as Yup from 'yup';

interface IValidationError {
  [key: string]: string;
}

export default function getValidationErrors(
  err: Yup.ValidationError,
): IValidationError {
  const validationErrors = {} as IValidationError;

  err.inner.forEach(error => {
    validationErrors[error.path as string] = error.message;
  });

  return validationErrors;
}
