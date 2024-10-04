import { fetchInvoice } from "@@/apis/invoice";
import { useQuery } from "@tanstack/react-query";

export interface InvoiceParameter {
  id?: number | string | string[] | undefined;
}

const useInvoice = (props: InvoiceParameter) => {
  const id = props.id;

  const fetchInvoiceDetailQuery = useQuery({
    queryKey: ["invoice", id],
    queryFn: () => fetchInvoice(id),
    staleTime: Infinity,
    enabled: !!id,
  });

  return {
    fetchInvoiceDetailQuery,
  };
};

export default useInvoice;
