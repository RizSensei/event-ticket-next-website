import { Customer } from "@@/types/auth";
import axiosClient from "../lib/axios";
import urls from "../lib/urls";

// customer login
export const customerLogin = async (customer: Customer) =>
  (await axiosClient.post(urls.API_CUSTOMER_LOGIN, customer)).data;

// customer login
export const customerRegister = async (customer: Customer) =>
  (await axiosClient.post(urls.API_CUSTOMER_REGISTER, customer)).data;

//logged in customer profile
export const fetchCustomerProfile = async () =>
  (await axiosClient.get(urls.API_CUSTOMER_PROFILE)).data;
