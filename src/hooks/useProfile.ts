import { fetchCustomerProfile } from "@@/apis/auth";
import { useQuery } from "@tanstack/react-query";
import { fetchAllInvoices } from "../apis/invoice";

const useProfile = () => {
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

  return {
    fetchCustomerProfileQuery,
    fetchAllInvoicesQuery,
  };
};

export default useProfile;
