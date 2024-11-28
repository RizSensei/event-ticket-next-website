/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchCustomerEventsInvitations, fetchCustomerProfile, updateProfilePicture } from "@@/apis/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAllInvoices } from "../apis/invoice";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "@@/context/AuthContext";

const useProfile = () => {
  const queryClient = useQueryClient();
  const { isAuthenticated } = useContext(AuthContext);

  const fetchCustomerProfileQuery = useQuery({
    queryKey: ["customer-profile"],
    queryFn: fetchCustomerProfile,
    staleTime: Infinity,
    enabled: !!isAuthenticated
  });

  const fetchAllInvoicesQuery = useQuery({
    queryKey: ["invoices"],
    queryFn: fetchAllInvoices,
    staleTime: Infinity,
    enabled: !!isAuthenticated
  });

  const fetchAllEventsInvitation = useQuery({
    queryKey: ["events-invitaions"],
    queryFn: fetchCustomerEventsInvitations,
    staleTime: Infinity,
    enabled: !!isAuthenticated,
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
    fetchAllEventsInvitation,
    updateProfilePictureMutation
  };
};

export default useProfile;
