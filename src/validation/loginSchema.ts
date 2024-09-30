import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string().required('Please enter your email'),
    password: Yup.string().required('Please enter your password'),
  });