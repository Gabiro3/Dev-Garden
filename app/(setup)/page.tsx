// pages/setup.tsx

import { InitialModal } from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Setup = async () => {
  const profile = await initialProfile();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  useEffect(() => {
    const isWelcomeShown = localStorage.getItem("isWelcomeShown");
    if (!isWelcomeShown) {
      redirect("/welcome");
    }
  }, []);

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return (
    <div>
      <InitialModal />
    </div>
  );
};

export default Setup;

