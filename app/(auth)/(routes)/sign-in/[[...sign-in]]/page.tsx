import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-screen">
      {/* Left half with the image */}
      <div className="w-1/2 relative">
        <Image
          src="https://www.shutterstock.com/image-photo/young-happy-people-laughing-together-600nw-2041247663.jpg" // Replace with the actual path to your image
          alt="College students hanging out"
          layout="fill"
          objectFit="cover" // Ensures the image covers the entire space
        />
      </div>

      {/* Right half with the SignIn component */}
      <div className="w-1/2 flex items-center justify-center">
        <SignIn />
      </div>
    </div>
  );
}

