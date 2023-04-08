// -------------------------------------- Imports ------------------------------------ ***
import {
  EyeClosedIcon,
  EyeOpenIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/utils/api";
import { SuccessModal } from "./SuccessModal.components";
import { EmailExistsModal } from "./EmailExistsModal.components";
import { UsernameExistsModal } from "./UsernameExistsModal.components";

// ---------------------------------- Form Schemas ----------------------------------- ***
const validationSchema = z
  .object({
    email: z
      .string()
      .min(3, "Must contain at least 3 characters.")
      .max(24, "Cannot be more than 24 characters.")
      .trim()
      .email("Must be a valid email address."),
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
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match.",
  });

type ValidationSchema = z.infer<typeof validationSchema>;

// -------------------------------- Component Function ------------------------------- ***
export const SignupTab = () => {
  // ------------------------------------- States ------------------------------------ ***
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [popoverEmail, setPopoverEmail] = useState<boolean>(false);
  const [popoverUsername, setPopoverUsername] = useState<boolean>(false);
  const [popoverPassword, setPopoverPassword] = useState<boolean>(false);
  const [popoverConfirmPassword, setPopoverConfirmPassword] =
    useState<boolean>(false);
  const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
  const [isEmailExistsModal, setIsEmailExistsModal] = useState<boolean>(false);
  const [isUsernameExistsModal, setIsUsernameExistsModal] =
    useState<boolean>(false);

  const createUser = api.user.postUser.useMutation();

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

  // ------------------------------- Custom Functions -------------------------------- ***
  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    try {
      const result = await createUser.mutateAsync({
        email: data.email,
        username: data.username,
        password: data.password,
      });
      console.log({ result });
      if (result.success) {
        reset();
        setIsSuccessModal(true);
      } else if (result.message === "Email already exists.") {
        setIsEmailExistsModal(true);
      } else if (result.message === "Username already exists.") {
        setIsUsernameExistsModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleHover = (popover: string) => {
    if (popover === "email") setPopoverEmail(true);
    if (popover === "username") setPopoverUsername(true);
    if (popover === "password") setPopoverPassword(true);
    if (popover === "confirm password") setPopoverConfirmPassword(true);
  };
  const handleLeave = (popover: string) => {
    if (popover === "email") setPopoverEmail(false);
    if (popover === "username") setPopoverUsername(false);
    if (popover === "password") setPopoverPassword(false);
    if (popover === "confirm password") setPopoverConfirmPassword(false);
  };

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      {/* -------------------------------- Modals ------------------------------------ */}
      {isSuccessModal && <SuccessModal setIsSuccessModal={setIsSuccessModal} />}
      {isEmailExistsModal && (
        <EmailExistsModal setIsEmailExistsModal={setIsEmailExistsModal} />
      )}
      {isUsernameExistsModal && (
        <UsernameExistsModal
          setIsUsernameExistsModal={setIsUsernameExistsModal}
        />
      )}
      {/* ---------------------------------------------------------------------------- */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 px-12"
      >
        {/* ------------------------------- Email ------------------------------------ */}
        <fieldset className="flex flex-col gap-1 pt-10">
          <label
            className="flex items-center gap-2 text-[#565452]"
            htmlFor="email"
          >
            Email
            <Popover.Root open={popoverEmail} onOpenChange={setPopoverEmail}>
              <Popover.Trigger asChild>
                {errors.email && (
                  <InfoCircledIcon
                    className="h-[17px] w-[17px] text-red-500"
                    onMouseEnter={() => handleHover("email")}
                    onMouseLeave={() => handleLeave("email")}
                    aria-label="Email requirements"
                  />
                )}
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="PopoverContent">
                  <p className="text-sm">{errors.email?.message}</p>
                  <Popover.Arrow className="PopoverArrow" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </label>
          <input
            className={`h-[35px] rounded-lg border border-[#bcbab6] bg-transparent px-2 text-[#565452] focus:outline-none ${
              (errors.email && "border-red-500 text-red-600") || ""
            }`}
            type="email"
            {...register("email")}
          />
        </fieldset>
        {/* -------------------------------------------------------------------------- */}
        {/* ------------------------------ Username ---------------------------------- */}
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
                <Popover.Content className="PopoverContent">
                  <p className="text-sm">{errors.username?.message}</p>
                  <Popover.Arrow className="PopoverArrow" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </label>
          <input
            className={`h-[35px] rounded-lg border border-[#bcbab6] bg-transparent px-2 text-[#565452] focus:outline-none ${
              (errors.username && "border-red-500 text-red-600") || ""
            }`}
            {...register("username")}
          />
        </fieldset>
        {/* -------------------------------------------------------------------------- */}
        {/* ------------------------------- Password --------------------------------- */}
        <fieldset className="flex flex-col gap-1">
          <label
            className="flex items-center gap-2 text-[#565452]"
            htmlFor="password"
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
                <Popover.Content className="PopoverContent">
                  <p className="text-sm">{errors.password?.message}</p>
                  <Popover.Arrow className="PopoverArrow" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </label>
          <div
            className={`flex h-[35px] items-center justify-between rounded-lg border border-[#bcbab6] pl-2 text-[#565452] ${
              (errors.password && "border-red-500 text-red-600") || ""
            }`}
          >
            <input
              className="w-full bg-transparent focus:outline-none"
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            {showPassword ? (
              <button type="button" onClick={() => setShowPassword(false)}>
                <EyeOpenIcon className="mx-2 h-[20px] w-[20px] text-[#48484D] hover:text-[#353432]" />
              </button>
            ) : (
              <button type="button" onClick={() => setShowPassword(true)}>
                <EyeClosedIcon className="mx-2 h-[20px] w-[20px] text-[#48484D] hover:text-[#353432]" />
              </button>
            )}
          </div>
        </fieldset>
        {/* -------------------------------------------------------------------------- */}
        {/* --------------------------- Confirm Password ----------------------------- */}
        <fieldset className="flex flex-col gap-1">
          <label
            className="flex items-center gap-2 text-[#565452]"
            htmlFor="confirmPassword"
          >
            Confirm Password
            <Popover.Root
              open={popoverConfirmPassword}
              onOpenChange={setPopoverConfirmPassword}
            >
              <Popover.Trigger asChild>
                {errors.confirmPassword && (
                  <InfoCircledIcon
                    className="h-[17px] w-[17px] text-red-500"
                    onMouseEnter={() => handleHover("confirm password")}
                    onMouseLeave={() => handleLeave("confirm password")}
                    aria-label="Confirm password requirements"
                  />
                )}
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="PopoverContent">
                  <p className="text-sm">{errors.confirmPassword?.message}</p>
                  <Popover.Arrow className="PopoverArrow" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </label>
          <div
            className={`flex h-[35px] items-center justify-between rounded-lg border border-[#bcbab6] pl-2 text-[#565452] ${
              (errors.confirmPassword && "border-red-500 text-red-600") || ""
            }`}
          >
            <input
              className="w-full bg-transparent focus:outline-none"
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword")}
            />
            {showPassword ? (
              <button type="button" onClick={() => setShowPassword(false)}>
                <EyeOpenIcon className="mx-2 h-[20px] w-[20px] text-[#48484D] hover:text-[#353432]" />
              </button>
            ) : (
              <button type="button" onClick={() => setShowPassword(true)}>
                <EyeClosedIcon className="mx-2 h-[20px] w-[20px] text-[#48484D] hover:text-[#353432]" />
              </button>
            )}
          </div>
        </fieldset>
        {/* -------------------------------------------------------------------------- */}
        {/* ---------------------------- Sign Up Button ------------------------------ */}
        <button className="mt-6 flex h-[40px] items-center justify-center rounded-lg bg-[#48484D] px-4 text-[#EEE6E1] hover:bg-[#353432]">
          {createUser.isLoading ? (
            <div className="spin-fast flex h-4 w-4 items-center justify-center rounded-full border-2 border-solid border-[#565452] border-current border-r-transparent text-[#565452]"></div>
          ) : (
            "Sign Up"
          )}
        </button>
        {/* -------------------------------------------------------------------------- */}
      </form>
    </>
  );
};
