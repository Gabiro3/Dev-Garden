import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-screen">
      {/* Left half with the image */}
      <div className="w-1/2 relative">
        <Image
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fblack-teenagers-hanging-out&psig=AOvVaw22pXaVCYoXSmZ0CHG3nfrk&ust=1724080947792000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiyx6Hs_ocDFQAAAAAdAAAAABAE" // Replace with the actual path to your image
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

