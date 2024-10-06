import { customerLogin } from "@@/apis/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useLogin = () => {
  const queryClient = useQueryClient();

  const customerLoginMutation = useMutation({
    mutationFn: customerLogin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["customer-profile", "invoice"],
      });
      queryClient.refetchQueries({ queryKey: ["customer-profile", "invoice"] });
    },
  });

  return {
    customerLoginMutation,
  };
};

export default useLogin;
