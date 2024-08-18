"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Import the Image component

export const WelcomeModal = () => {
  const [isMounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Assume the modal is open when the user first logs in

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isMounted || !isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Welcome to TheGarden
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Here’s a quick overview to get you started!
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 space-y-6">
          {/* Add your screenshots and descriptions here */}
          <div className="text-center">
            <Image
              src="https://ireme-ai.vercel.app/_next/image?url=%2Fstatic%2Fscreenshots%2Flist.png&w=1200&q=75"
              alt="Screenshot 1"
              width={500} // Set an appropriate width
              height={300} // Set an appropriate height
            />
            <p className="mt-2">Description for screenshot 1.</p>
          </div>
          <div className="text-center">
            <Image
              src="https://ireme-ai.vercel.app/_next/image?url=%2Fstatic%2Fscreenshots%2Flist.png&w=1200&q=75"
              alt="Screenshot 2"
              width={500} // Set an appropriate width
              height={300} // Set an appropriate height
            />
            <p className="mt-2">Description for screenshot 2.</p>
          </div>
          {/* Add more screenshots as needed */}
        </div>
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <Button variant="primary" onClick={handleClose}>
            Get Started
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
