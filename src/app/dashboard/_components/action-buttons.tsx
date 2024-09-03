"use client";

import { Link } from "@/components/layout/Link";
import ConfirmModal from "@/components/modal/confirm-modal";
import { Button } from "@/components/ui/button";
import customFetchClient from "@/lib/customFetchClient";
import { AppToast } from "@/lib/toast";
import useUIStore from "@/store/uiStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ActionButtons = ({ id }: { id: string }) => {
  const { refresh } = useRouter();
  const setOpenModal = useUIStore((state) => state.setOpenModal);
  const modalIsOpen = useUIStore((state) => state.modalIsOpen);
  const [Loading, setLoading] = useState(false);

  const DeleteClient = async () => {
    setLoading(true);
    try {
      await customFetchClient("/api/clients/" + id, {
        method: "DELETE",
      });
      refresh();
      setOpenModal("");
    } catch (err) {
      AppToast({ message: "Could not delete client", duration: 10000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link href={`/dashboard/add-client?id=${id}`}>
        <Button
          hideArrow
          className="inline-block ml-auto mr-4 bg-white text-black border-2 border-black"
        >
          Edit
        </Button>
      </Link>
      <Button
        hideArrow
        className="inline-block bg-red-600 text-white"
        onClick={() => setOpenModal("confirm-" + id)}
      >
        Delete
      </Button>
      {modalIsOpen === "confirm-" + id && (
        <ConfirmModal confirmAction={DeleteClient} loading={Loading} />
      )}
    </div>
  );
};

export default ActionButtons;
