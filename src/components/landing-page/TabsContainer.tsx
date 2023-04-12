// -------------------------------------- Imports ------------------------------------ ***
import * as Tabs from "@radix-ui/react-tabs";
import { LoginTab } from "./login-tab/LoginTab.components";
import { SignupTab } from "./signup-tab/SignupTab.components";

// -------------------------------- Component Function ------------------------------- ***
export const TabsContainer = () => {
  // ----------------------------------- Constants ----------------------------------- ***
  const tabsTrigger =
    "px-[20px] h-[45px] flex-grow flex items-center justify-center text-[15px] leading-4 text-[#565452] select-none transition-all duration-400 ease-in-out data-[state=active]:text-[#565452] data-[state=active]:mt-1 data-[state=active]:border-b-2 data-[state=active]:border-[#565452] first:rounded-tl-lg last:rounded-tr-lg focus:relative";

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      <Tabs.Root
        className="mt-12 flex h-[570px] w-[350px] flex-col rounded-lg bg-[#EEE6E1] shadow shadow-[#565452]"
        defaultValue="tab1"
      >
        <Tabs.List
          className="flex justify-between"
          aria-label="Manage your account"
        >
          <Tabs.Trigger className={`${tabsTrigger}`} value="tab1">
            Login
          </Tabs.Trigger>
          <Tabs.Trigger className={`${tabsTrigger}`} value="tab2">
            Sign Up
          </Tabs.Trigger>
        </Tabs.List>
        {/* ----------------------------- Login Tab ---------------------------------- */}
        <Tabs.Content value="tab1">
          <LoginTab />
        </Tabs.Content>
        {/* -------------------------------------------------------------------------- */}
        {/* ---------------------------- Sign Up Tab --------------------------------- */}
        <Tabs.Content value="tab2">
          <SignupTab />
        </Tabs.Content>
        {/* -------------------------------------------------------------------------- */}
      </Tabs.Root>
    </>
  );
};
