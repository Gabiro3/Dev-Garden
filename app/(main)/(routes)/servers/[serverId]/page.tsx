import { currentProf } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { WelcomeModal } from "@/components/modals/welcome-modal"; // Import the WelcomeModal component

interface ServerIdPageProps {
  params: {
    serverId: string;
  };
}

const ServerIdPage = async ({ params }: ServerIdPageProps) => {
  const profile = await currentProf();

  if (!profile) {
    return redirectToSignIn();
  }

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
    include: {
      channels: {
        where: {
          name: "general",
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  const initialChannel = server?.channels[0];

  if (initialChannel?.name !== "general") {
    return null;
  }

  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    const hasSeenWelcomeModal = localStorage.getItem("hasSeenWelcomeModal");

    if (!hasSeenWelcomeModal) {
      setShowWelcomeModal(true);
      localStorage.setItem("hasSeenWelcomeModal", "true");
    }
  }, []);

  return (
    <>
      {showWelcomeModal && <WelcomeModal />}
      {redirect(`/servers/${params.serverId}/channels/${initialChannel?.id}`)}
    </>
  );
};

export default ServerIdPage;

