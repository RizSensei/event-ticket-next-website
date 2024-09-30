import { customerRegister } from '@@/apis/auth';
import { useMutation } from '@tanstack/react-query';

const useRegister = () => {

    const customerRegisterMutation = useMutation({
        mutationFn: customerRegister,
      });

  return {
    customerRegisterMutation
  }
}

export default useRegister