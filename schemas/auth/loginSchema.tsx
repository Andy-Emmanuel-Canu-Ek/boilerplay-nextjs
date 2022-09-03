import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  user: yup.string().typeError('Agregue un código válido').required('El usuario es requerido'),
  password: yup.string().required('La contraseña es requerida'),
});
