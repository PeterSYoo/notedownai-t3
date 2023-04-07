import { useMutation } from "@tanstack/react-query";
import { ILogin } from "additional";
import { signIn } from "next-auth/react";
import type { NextRouter } from "next/router";

const useHandleLogin = (
  router: NextRouter,
  setIsUsernameExistsModal?: (arg0: boolean) => void,
  setIsPasswordWrongModal?: (arg0: boolean) => void
) => {
  const { mutateAsync, isLoading } = useMutation(async (data: ILogin) => {
    try {
      const status = await signIn("credentials", {
        redirect: false,
        username: data.username,
        password: data.password,
        callbackUrl: "/dashboard",
      });

      if (status) {
        console.log({ status });
        if (
          status.error === "No user found with that username!" &&
          setIsUsernameExistsModal
        ) {
          setIsUsernameExistsModal(true);
        } else if (
          status.error === "Wrong password!" &&
          setIsPasswordWrongModal
        ) {
          setIsPasswordWrongModal(true);
        } else if (status.ok) {
          if (status.ok && status.url) {
            await router.push(status.url);
          }
        }
      }
    } catch (error) {
      return error;
    }
  });

  return {
    mutateAsync,
    isLoading,
  };
};

export default useHandleLogin;
