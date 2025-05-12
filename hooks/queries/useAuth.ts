import { getMe, postLogin, postSignup } from "@/api/auth";
import queryClient from "@/api/queryClient";
import { removeHeader, setHeader } from "@/utils/header";
import { deleteSecureStore, saveSecureStore } from "@/utils/secureStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import { useEffect } from "react";

function useGetMe() {
  const { data, isError } = useQuery({
    queryFn: getMe,
    queryKey: ["auth", "getMe"],
  });

  useEffect(() => {
    if (isError) {
      removeHeader("Authorization");
      deleteSecureStore("accessToken");
    }
  }, [isError]);

  return { data };
}

function useLogin() {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async ({ accessToken }) => {
      setHeader("Authorization", `Bearer ${accessToken}`);
      await saveSecureStore("accessToken", accessToken);
      queryClient.fetchQuery({ queryKey: ["auth", "getMe"] });
      router.replace("/");
    },
    onError: () => {
      //
    },
  });
}

function useSignup() {
  return useMutation({
    mutationFn: postSignup,
    onSuccess: (res) => {
      console.log("회원가입 성공", res);
      router.replace("/auth/login");
    },
    onError: (err) => {
      console.log("회원가입 실패", err);
    },
  });
}

function useAuth() {
  const { data } = useGetMe();
  const loginMutation = useLogin();
  const signupMutation = useSignup();

  return {
    auth: {
      id: data?.id || "",
    },
    loginMutation,
    signupMutation,
  };
}

export default useAuth;
