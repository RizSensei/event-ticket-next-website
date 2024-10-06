/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchCustomerProfile, updateProfilePicture } from "@@/apis/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAllInvoices } from "../apis/invoice";
import toast from "react-hot-toast";

const useProfile = () => {
  const queryClient = useQueryClient();

  const fetchCustomerProfileQuery = useQuery({
    queryKey: ["customer-profile"],
    queryFn: fetchCustomerProfile,
    staleTime: Infinity,
  });

  const fetchAllInvoicesQuery = useQuery({
    queryKey: ["invoices"],
    queryFn: fetchAllInvoices,
    staleTime: Infinity,
  });

  const updateProfilePictureMutation = useMutation({
    mutationFn: updateProfilePicture,
    onSuccess:() => {
      queryClient.invalidateQueries({ queryKey: ["customer-profile"] });
      queryClient.refetchQueries({ queryKey: ["customer-profile"] });
      toast.success("Profile Image updated")
    },
    onError: (error:any) => {
      toast.error(error.response.data.message);
    },
  })

  return {
    fetchCustomerProfileQuery,
    fetchAllInvoicesQuery,
    updateProfilePictureMutation
  };
};

export default useProfile;
