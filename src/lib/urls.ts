export const BASEURL = 'http://128.199.23.2:8080/api';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  BASEURL,
  // system user
  API_USER_LOGIN: `${BASEURL}/auth/user-login`,
  // customer 
  API_CUSTOMER_REGISTER: `${BASEURL}/auth/customer-registration`,
  API_CUSTOMER_LOGIN: `${BASEURL}/auth/customer-login`,
  // events 
  API_EVENT: `${BASEURL}/events`,
  API_EVENT_CATEGORY: `${BASEURL}/event-categories`,
  // tickets 
  API_TICKET: `${BASEURL}/ticket`,
  API_TICKET_TYPE: `${BASEURL}/ticket-types`,
};
