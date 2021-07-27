import axios from "axios";

export const BASEURL = "http://159.65.154.37:8081";

export const LOGIN_URL = BASEURL.concat("/user/login");
export const REGISTER_URL = BASEURL.concat("/user/signup");
export const FORGOTPASSWORD_URL = BASEURL.concat("/user/forgot-password");

export function login(data) {
  return axios.post(LOGIN_URL, data);
}

export function signup(data) {
  return axios.post(REGISTER_URL, data);
}

export function forgot(data) {
  return axios.post(FORGOTPASSWORD_URL, data);
}

