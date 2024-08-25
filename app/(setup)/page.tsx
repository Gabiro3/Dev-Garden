import { InitialModal } from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

const Setup = async () => {
  // Get the current logged-in user from Clerk
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  // Extract necessary fields from the user object
  const { id, firstName, lastName, imageUrl } = user;

  // Find the user profile in your database using the user ID
  const profile = await db.profile.findUnique({
    where: { user_id: id },
  });

  if (!profile) {
    // If profile doesn't exist, you could redirect or handle the case as needed
    return <div>User profile not found</div>;
  }

  // Update the profile with the latest data from Clerk
  await db.profile.update({
    where: { user_id: id },
    data: {
      name: `${firstName} ${lastName}`,
      imageUrl: imageUrl,
    },
  });

  // Find the server associated with this profile
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    // If the server exists, redirect to the server page
    return redirect(`/servers/${server.id}`);
  }

  // If no server is found, render the InitialModal
  return (
    <div>
      <InitialModal />
    </div>
  );
};

export default Setup;




