"use client";

import QuoteForm from "@/components/quote-form";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

import AppModal from "@/components/modal";
import useUIStore from "@/store/uiStore";

const GetQuoteButton = ({
  text,
  isLoggedIn,
}: {
  isLoggedIn: boolean;
  text?: string;
}) => {
  const modalIsOpen = useUIStore((state) => state.modalIsOpen);
  const setOpenModal = useUIStore((state) => state.setOpenModal);

  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };
  return (
    <>
      {isLoggedIn ? (
        <Button onClick={handleSignOut}>Logout</Button>
      ) : (
        <Button
          className="uppercase font-bold"
          onClick={() => setOpenModal("quote")}
        >
          {text || "Get a Quote"}
        </Button>
      )}
      {modalIsOpen === "quote" && (
        <AppModal>
          <QuoteForm />
        </AppModal>
      )}
    </>
  );
};

export default GetQuoteButton;
