import { useMutation } from "@tanstack/react-query";
import { type ILogin } from "additional";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const useHandleLogin = (
  setIsUsernameExistsModal?: (arg0: boolean) => void,
  setIsPasswordWrongModal?: (arg0: boolean) => void,
  reset?: () => void
) => {
  const router = useRouter();

  const { mutateAsync, isLoading } = useMutation(async (data: ILogin) => {
    try {
      const status = await signIn("credentials", {
        redirect: false,
        username: data.username,
        password: data.password,
        callbackUrl: "/",
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
          if (status.ok && status.url && reset) {
            reset();
            await router.push("/notes");
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
