export interface Profile {
  id: string;
  imageURL: string;
  name: string;
  joinDate: string;
  major: string;
  job: string;
  hobby: string[];
  interest: string[];
  stack: string[];
  etc: string[];
  comment: string;
  phone: string;
  email: string;
  github: string;
  blog: string;
}

export interface LoginParam {
  email: string;
  password: string;
}

export const THEME = {
  red: "#FEC7CA",
  yellow: "#FFE7CD",
  blue: "#CDEAFF",
  gray: "#DEDEDE",
  lightgray: "#EEEEEE",
  darkgray: "#333333",
  kucc: "#C3201F",
};

export const BASE_URL = "http://49.50.162.195:8080";
export const END_POINT = `${BASE_URL}/api`;
