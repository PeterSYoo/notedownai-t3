import * as Tabs from "@radix-ui/react-tabs";
import { LoginTab } from "./LoginTab.components";
import { SignupTab } from "./SignupTab.components";

export const TabsContainer = () => {
  return (
    <>
      <Tabs.Root
        className="mt-5 flex h-[550px] w-[350px] flex-col rounded-lg bg-gradient-to-tr from-[#232325] via-[#313133] to-[#313133]"
        defaultValue="tab1"
      >
        <Tabs.List
          className="flex justify-between bg-white/10"
          aria-label="Manage your account"
        >
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Login
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Sign Up
          </Tabs.Trigger>
        </Tabs.List>
        {/* Login Tab ---------------------------------------------------- */}
        <Tabs.Content className="flex flex-col gap-2 px-14 pt-14" value="tab1">
          <LoginTab />
        </Tabs.Content>
        {/* --------------------------------------------------------------- */}
        {/* Sign Up Tab --------------------------------------------------- */}
        <Tabs.Content className="flex flex-col gap-2 px-14" value="tab2">
          <SignupTab />
        </Tabs.Content>
        {/* --------------------------------------------------------------- */}
      </Tabs.Root>
    </>
  );
};
