import { signOut, useSession } from "next-auth/react";

const DashboardPage = () => {
  // ------------------------------------- States ------------------------------------ ***
  const { data: sessionData } = useSession();

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      <div className="">
        {sessionData ? (
          <button
            onClick={() => void signOut()}
            className="rounded-lg bg-white/30 p-3"
          >
            Logout
          </button>
        ) : null}
      </div>
    </>
  );
};

export default DashboardPage;
