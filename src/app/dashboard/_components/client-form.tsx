"use client";

import AppModal from "@/components/modal";
import { Input } from "@/components/ui/input";
import useUIStore from "@/store/uiStore";
import React, { useState } from "react";

const ClientForm = () => {
  const modalIsOpen = useUIStore((state) => state.modalIsOpen);
  const [Data, setData] = useState({
    name: "",
    description: "",
  });

  if (modalIsOpen === "add-client") {
    return (
      <AppModal>
        <h3 className="text-center mb-4">Add New Client</h3>{" "}
        <form className="flex flex-wrap w-full gap-[3%] mx-auto border-4 border-red-700 items-center justify-center">
          <Input
            className="w-full md:w-[45%] mb-[3%]"
            onChange={(e) => setData({ ...Data, name: e.target.value })}
            placeholder="Client name"
            value={Data.name}
          />
          <Input
            className="w-full md:w-[45%] mb-[3%]"
            onChange={(e) => setData({ ...Data, description: e.target.value })}
            placeholder="Short description"
            value={Data.description}
          />
          <Input
            className="w-full md:w-[45%] mb-[3%]"
            onChange={(e) => setData({ ...Data, name: e.target.value })}
            placeholder="Short description"
            value={Data.description}
          />
          <Input
            className="w-full md:w-[45%] mb-[3%]"
            onChange={(e) => setData({ ...Data, name: e.target.value })}
            placeholder="Short description"
            value={Data.description}
          />
        </form>
      </AppModal>
    );
    return null;
  }
};

export default ClientForm;
