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

export const THEME = {
  red: "#FEC7CA",
  yellow: "#FFE7CD",
  blue: "#CDEAFF",
  gray: "#DEDEDE",
  lightgray: "#EEEEEE",
  darkgray: "#333333",
};
