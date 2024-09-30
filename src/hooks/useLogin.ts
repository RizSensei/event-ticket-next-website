import { customerLogin } from '@@/apis/auth';
import { useMutation } from '@tanstack/react-query';

const useLogin = () => {

    const customerLoginMutation = useMutation({
        mutationFn: customerLogin,
      });

  return {
    customerLoginMutation
  }
}

export default useLogin