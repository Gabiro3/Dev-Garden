"use client";

import { useEffect, useState } from "react";
import { WelcomeModal } from "@/components/modals/welcome-modal";

const ClientSideComponent = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Logic to determine when to show the modal, e.g., based on user login status
    // setShowModal(false); // Hide modal after some condition is met
  }, []);

  return showModal ? <WelcomeModal /> : null;
};

export default ClientSideComponent;
