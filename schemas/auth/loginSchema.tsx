import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Escribe un correo electrónico válido').required('El usuario es requerido'),
  password: yup.string().required('La contraseña es requerida'),
});
