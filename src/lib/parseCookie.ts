import cookie from "cookie";
import Cookies from "js-cookie";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseCookies(req: { headers: { cookie: any } }) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

export function getStoredToken() {
  const token = Cookies.get("token");
  return token !== undefined ? token : "";
}