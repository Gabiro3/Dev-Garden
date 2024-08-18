import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import ClientSideComponent from "@/components/modals/client-side-component"; // Import the client-side component
import { currentProf } from "@/lib/current-profile";
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

  const initalChannel = server?.channels[0];

  if (initalChannel?.name !== "general") {
    return null;
  }

  return (
    <>
      <ClientSideComponent /> {/* Include the client-side logic here */}
      {redirect(`/servers/${params.serverId}/channels/${initalChannel?.id}`)}
    </>
  );
};

export default ServerIdPage;

