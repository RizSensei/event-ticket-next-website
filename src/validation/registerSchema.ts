import * as Yup from 'yup';

export const registerSchema = Yup.object({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().required('Please enter your email'),
    password: Yup.string().required('Please enter your password'),
  });