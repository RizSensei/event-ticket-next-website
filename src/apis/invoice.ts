/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import axiosClient from '../lib/axios';
import urls from '../lib/urls';


export const fetchAllInvoices = async () => {
    const response = await axiosClient.get(
      `${urls.API_CUSTOMER_INVOICES}`
    );
    return response?.data;
  };

  
export const fetchInvoice = async (id:number | string | string[] | undefined) => {
    const response = await axiosClient.get(
      `${urls.API_INVOICE}/${id}`
    );
    return response?.data;
  };

