// -------------------------------------- Imports ------------------------------------ ***
import {
  EyeClosedIcon,
  EyeOpenIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { AuthProviders } from "./AuthProviders.components";
import { type SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UsernameExistsModal } from "./UsernameExistsModal.components";
import useHandleLogin from "~/hooks/useHandleLogin";
import { useRouter } from "next/router";
import { WrongPasswordModal } from "./WrongPasswordModal.components";

// ---------------------------------- Form Schemas ----------------------------------- ***
const validationSchema = z.object({
  username: z
    .string()
    .min(3, "Must contain at least 3 characters.")
    .max(12, "Cannot be more than 12 characters.")
    .regex(
      /^[a-zA-Z0-9]+$/,
      "Can only contain letters and numbers, no spaces."
    ),
  password: z
    .string()
    .min(6, "Must contain at least 6 characters.")
    .max(20, "Cannot be more than 20 characters.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).*$/,
      "Password must contain at least 1 uppercase, 1 lowercase, 1 special character(s) and no spaces."
    ),
});

type ValidationSchema = z.infer<typeof validationSchema>;

// -------------------------------- Component Function ------------------------------- ***
export const LoginTab = () => {
  // ------------------------------------- States ------------------------------------ ***
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [popoverUsername, setPopoverUsername] = useState<boolean>(false);
  const [popoverPassword, setPopoverPassword] = useState<boolean>(false);
  const [isUsernameExistsModal, setIsUsernameExistsModal] =
    useState<boolean>(false);
  const [isWrongPasswordModal, setIsWrongPasswordModal] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    resolver: zodResolver(validationSchema),
  });

  const { mutateAsync, isLoading } = useHandleLogin(
    setIsUsernameExistsModal,
    setIsWrongPasswordModal,
    reset
  );

  // ----------------------------------- Constants ----------------------------------- ***
  const popoverContent =
    "rounded-lg px-[15px] py-[10px] w-fit max-w-[220px] bg-[#565452] text-[#EEE6E1] shadow-md shadow-black/70 transition-all duration-400 ease-in-out PopoverContent";
  const popoverArrow = "fill-[#565452] mb-[15px]";

  // ------------------------------- Custom Functions -------------------------------- ***
  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    await mutateAsync({ username: data.username, password: data.password });
  };

  const handleGuestLogin = async () => {
    await mutateAsync({ username: "guest", password: "Abcd1234!" });
  };

  const handleHover = (popover: string) => {
    if (popover === "username") setPopoverUsername(true);
    if (popover === "password") setPopoverPassword(true);
  };
  const handleLeave = (popover: string) => {
    if (popover === "username") setPopoverUsername(false);
    if (popover === "password") setPopoverPassword(false);
  };

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      {/* -------------------------------- Modals ------------------------------------ */}
      {isUsernameExistsModal && (
        <UsernameExistsModal
          setIsUsernameExistsModal={setIsUsernameExistsModal}
        />
      )}
      {isWrongPasswordModal && (
        <WrongPasswordModal setIsWrongPasswordModal={setIsWrongPasswordModal} />
      )}
      {/* ---------------------------------------------------------------------------- */}
      <section className="flex flex-col gap-5 px-12 pt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          {/* --------------------------- Username ----------------------------------- */}
          <fieldset className="flex flex-col gap-1">
            <label
              className="flex items-center gap-2 text-[#565452]"
              htmlFor="username"
            >
              Username
              <Popover.Root
                open={popoverUsername}
                onOpenChange={setPopoverUsername}
              >
                <Popover.Trigger asChild>
                  {errors.username && (
                    <InfoCircledIcon
                      className="h-[17px] w-[17px] text-red-500"
                      onMouseEnter={() => handleHover("username")}
                      onMouseLeave={() => handleLeave("username")}
                      aria-label="Username requirements"
                    />
                  )}
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content className={`${popoverContent}`}>
                    <p className="text-sm">{errors.username?.message}</p>
                    <Popover.Arrow className={`${popoverArrow}`} />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </label>
            <input
              className={`h-[35px] rounded-lg border border-[#bcbab6] bg-transparent px-2 text-[#565452] focus:outline-none ${
                (errors.username && "border-red-400 text-red-600") || ""
              }`}
              {...register("username")}
            />
          </fieldset>
          {/* ------------------------------------------------------------------------ */}
          {/* ----------------------------- Password --------------------------------- */}
          <fieldset className="flex flex-col gap-1">
            <label
              className="flex items-center gap-2 text-[#565452]"
              htmlFor="username"
            >
              Password
              <Popover.Root
                open={popoverPassword}
                onOpenChange={setPopoverPassword}
              >
                <Popover.Trigger asChild>
                  {errors.password && (
                    <InfoCircledIcon
                      className="h-[17px] w-[17px] text-red-500"
                      onMouseEnter={() => handleHover("password")}
                      onMouseLeave={() => handleLeave("password")}
                      aria-label="Password requirements"
                    />
                  )}
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content className={`${popoverContent}`}>
                    <p className="text-sm">{errors.password?.message}</p>
                    <Popover.Arrow className={`${popoverArrow}`} />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </label>
            <div
              className={`flex h-[35px] items-center justify-between rounded-lg border border-[#bcbab6] pl-2 text-[#565452] ${
                (errors.password && "border-red-400 text-red-600") || ""
              }`}
            >
              <input
                className="w-full bg-transparent focus:outline-none"
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              {showPassword ? (
                <button type="button" onClick={() => setShowPassword(false)}>
                  <EyeOpenIcon className="mx-2 h-[20px] w-[20px] text-[#565452] hover:text-[#353432]" />
                </button>
              ) : (
                <button type="button" onClick={() => setShowPassword(true)}>
                  <EyeClosedIcon className="mx-2 h-[20px] w-[20px] text-[#565452] hover:text-[#353432]" />
                </button>
              )}
            </div>
          </fieldset>
          {/* ------------------------------------------------------------------------ */}
          {/* ---------------------------- Login Button ------------------------------ */}
          <button className="mt-3 flex h-[40px] items-center justify-center rounded-lg bg-[#565452] px-4 text-[#EEE6E1] hover:bg-[#353432]">
            {isLoading ? (
              <div className="spin-fast flex h-4 w-4 items-center justify-center rounded-full border-2 border-solid border-[#565452] border-current border-r-transparent text-[#565452]"></div>
            ) : (
              "Login"
            )}
          </button>
          {/* ------------------------------------------------------------------------ */}
        </form>
        {/* --------------------------------- Divider -------------------------------- */}
        <div className="grid grid-cols-[100px_1fr_100px] items-center">
          <div className="border-b border-[#bcbab6]"></div>
          <p className="flex justify-center text-sm text-[#565452]">or</p>
          <div className="border-b border-[#bcbab6]"></div>
        </div>
        {/* -------------------------------------------------------------------------- */}
        {/* ---------------------------- Guest Login Button -------------------------- */}
        <button
          onClick={() => handleGuestLogin()}
          className="flex h-[40px] items-center justify-center rounded-lg bg-[#565452] px-4 text-[#EEE6E1] hover:bg-[#353432]"
        >
          {isLoading ? (
            <div className="spin-fast flex h-4 w-4 items-center justify-center rounded-full border-2 border-solid border-[#565452] border-current border-r-transparent text-[#565452]"></div>
          ) : (
            "Login as Guest"
          )}
        </button>
        {/* -------------------------------------------------------------------------- */}
        {/* --------------------------------- Divider -------------------------------- */}
        <div className="grid grid-cols-[100px_1fr_100px] items-center">
          <div className="border-b border-[#bcbab6]"></div>
          <p className="flex justify-center text-sm text-[#565452]">or</p>
          <div className="border-b border-[#bcbab6]"></div>
        </div>
        {/* -------------------------------------------------------------------------- */}
        {/* ------------------------------ Auth Providers ---------------------------- */}
        <AuthProviders />
        {/* -------------------------------------------------------------------------- */}
      </section>
    </>
  );
};
