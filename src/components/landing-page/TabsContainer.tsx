// -------------------------------------- Imports ------------------------------------ ***
import * as Tabs from "@radix-ui/react-tabs";
import { LoginTab } from "./login-tab/LoginTab.components";
import { SignupTab } from "./signup-tab/SignupTab.components";

// -------------------------------- Component Function ------------------------------- ***
export const TabsContainer = () => {
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
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Login
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
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
