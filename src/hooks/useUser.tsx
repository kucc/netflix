import axios from "axios";
import { BASE_URL, LoginParam } from "../constant";

export const useUser = () => {
  const login = async ({ email, password }: LoginParam) => {
    try {
      await axios.post(`${BASE_URL}/login`, { email, password });
    } catch (e) {
      alert("로그인에 실패하였습니다.");
    }
  };

  return { login };
};
