"use client";

import { Button } from "@/components/ui/button";
import useUIStore from "@/store/uiStore";
import { FaPlus } from "react-icons/fa";

const AddClientButton = () => {
  const setOpenModal = useUIStore((state) => state.setOpenModal);
  return (
    <Button hideArrow onClick={() => setOpenModal("add-client")}>
      Add Client <FaPlus />
    </Button>
  );
};

export default AddClientButton;
