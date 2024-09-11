"use client";

import { Input } from "@/components/ui/input";
import React, { useRef, useState } from "react";
// import { useLocalStorage } from "@/hooks/useLocalStorage";
import MultipleImageUpload from "./multiple-image-upload";
import { Button } from "@/components/ui/button";
import TextArea from "./textarea";
import MyDropdown from "@/components/dropdown";
import { AppToast } from "@/lib/toast";
import { getErrorMessage } from "@/lib/getErrorMessage";

const ClientForm = ({ client }: any) => {
  const [Name, setName] = useState(client?._id ? client?.name : "");
  // const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const [description, setDescription] = useState(
    client?._id ? client?.description : ""
  );
  const [category, setCategory] = useState(client?._id ? client?.category : "");
  const [Loading, setLoading] = useState(false);

  const [Images, setImages] = useState<any[]>(
    client?._id ? client?.images : []
  );

  const create = async () => {
    const data = await fetch("/api/clients", {
      method: "POST",
      body: JSON.stringify({
        name: Name,
        description,
        images: Images,
        category,
      }),
    });
    return await data.json();
  };

  const update = async (id: string) => {
    const data = await fetch("/api/clients/" + id, {
      method: "PATCH",
      body: JSON.stringify({
        name: Name,
        description,
        images: Images,
        category,
      }),
    });
    return await data.json();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (Name.trim().length < 2) {
      return AppToast({
        message: "Client brand name cannot be less than 2 characters.",
        duration: 6000,
      });
    }
    if (!category) {
      return AppToast({ message: "Please select a category.", duration: 6000 });
    }
    if (Images.length < 1) {
      return AppToast({
        message: "An image is required, at least the brand logo.",
        duration: 6000,
      });
    }
    if (description.length > 500) {
      return AppToast({
        message: "Description should not be more than 500 characters.",
        duration: 6000,
      });
    }

    try {
      setLoading(true);

      const res = !!client?._id ? await update(client._id) : await create();
      AppToast({
        message:
          res?.name + ` ${client?._id ? "updated" : "created"} successfully.`,
      });
      window.location.href = "/dashboard";
      // redirect("/dashboard");
    } catch (err) {
      AppToast({ message: getErrorMessage(err), duration: 10000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        className="flex flex-col space-y-4 max-w-[600px] w-full mx-auto items-center justify-center mt-10"
        onSubmit={handleSubmit}
      >
        <Input
          className="w-full"
          onChange={(e) => setName(e.target.value)}
          placeholder="Client name"
          value={Name}
        />
        <MyDropdown
          onChange={setCategory}
          defaultValue={client?.category || ""}
          options={[
            "outdoor",
            "indoor",
            "sport-events",
            "wellness-programmes",
            "customized",
            "others",
          ]}
          triggerLabel="Category"
        />
        <TextArea
          setValue={setDescription}
          value={description}
          // textareaRef={descriptionRef}
        />
        {/* <TextArea textareaRef={descriptionRef} /> */}
        <MultipleImageUpload
          Images={Images}
          setImages={setImages}
          setDataToSubmit={() => {}}
          title="Select Images. First Should be brand logo"
          // isEdit={isEdit}
          isMultiple
        />

        <Button loading={Loading}>
          {client?._id ? "Update" : "Create"} Brand
        </Button>
      </form>
    </>
  );
};

export default ClientForm;
