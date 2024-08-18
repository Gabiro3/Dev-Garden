"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { InitialModal } from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";

const Setup = () => {
  const router = useRouter();

  useEffect(() => {
    const checkProfileAndServer = async () => {
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

      const isWelcomeShown = localStorage.getItem("isWelcomeShown");
      if (!isWelcomeShown) {
        router.push("/welcome");
      } else if (server) {
        router.push(`/servers/${server.id}`);
      }
    };

    checkProfileAndServer();
  }, [router]);

  return (
    <div>
      <InitialModal />
    </div>
  );
};

export default Setup;


