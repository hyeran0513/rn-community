import { Profile } from "@/types";
import { getSecureStore } from "@/utils/secureStore";
import axiosInstance from "./axios";

type RequestUser = {
  email: string;
  password: string;
};

async function postSignup(body: RequestUser): Promise<void> {
  console.log("회원가입 요청 바디:", body);
  const { data } = await axiosInstance.post("/auth/signup", body);
  console.log("회원가입 응답:", data);
  return data;
}

async function postLogin(body: RequestUser): Promise<{ accessToken: string }> {
  const { data } = await axiosInstance.post("/auth/signin", body);

  return data;
}

async function getMe(): Promise<Profile> {
  const accessToken = await getSecureStore("accessToken");

  const { data } = await axiosInstance.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
}

export { getMe, postLogin, postSignup };
