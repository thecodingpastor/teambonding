"use client";

import { useState } from "react";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { BlogImageType } from "./types";
import ConfirmModal from "@/components/modal/confirm-modal";
import { AppToast } from "@/lib/toast";
import { getErrorMessage } from "@/lib/getErrorMessage";
import useUIStore from "@/store/uiStore";
import { useSearchParams } from "next/navigation";
import AppSpin from "@/components/loaders/AppSpin";
import customFetchClient from "@/lib/customFetchClient";

const ImageTile: React.FC<{
  setImages: React.Dispatch<any>;
  setDataToSubmit: React.Dispatch<any>;
  Images: BlogImageType[];
  isEdit?: boolean;
  setFileNames?: React.Dispatch<any>;
  onClick: any;
}> = ({
  setImages,
  Images,
  isEdit,
  setDataToSubmit,
  setFileNames,
  onClick,
}) => {
  const [Loading, setLoading] = useState("");
  const modalIsOpen = useUIStore((state) => state.modalIsOpen);
  const setOpenModal = useUIStore((state) => state.setOpenModal);
  const clientId = useSearchParams().get("id");

  const DeleteImage = async (fileId: string) => {
    setLoading(fileId);
    try {
      const client = await customFetchClient(`/api/clients`, {
        method: "DELETE",
        body: { fileId, clientId },
      });
      if (client?._id) {
        setOpenModal("");
        window.location.reload();
      }
    } catch (err) {
      AppToast({ message: getErrorMessage(err) || "Could not delete image" });
    } finally {
      setLoading("");
    }
  };

  const clear = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    obj: { identifier: string; isNew: boolean }
  ) => {
    e.stopPropagation();
    if (Images.length < 2) {
      return AppToast({
        message: "You must have at least, the logo of the brand",
        duration: 6000,
      });
    }

    const { isNew, identifier } = obj;

    if (!isNew) {
      setOpenModal(identifier);
      return;
    } else {
      setImages((prev: any[]) => {
        return prev.filter((img) => img.name !== identifier);
      });

      setImages((prev: any[]) => {
        return prev.filter((img) => {
          if (img.name) {
            // For newly uploaded files
            return img.name !== identifier;
          } else {
            return img.public_id !== identifier;
          }
        });
      });
      if (!isEdit) {
        setDataToSubmit((prev: any) => {
          return {
            ...prev,
            images: prev.images?.filter((img: any) => img.name !== identifier),
          };
        });
      }
      // @ts-ignore
      setFileNames((prev: string[]) => {
        return prev.filter((fileName) => fileName !== identifier);
      });
    }
  };

  return (
    <div className={"relative w-full"}>
      <div className="flex gap-3 max-w-[700px] justify-center items-center overflow-x-auto overflow-y-hidden">
        <BsUpload
          className="absolute top-1/2 -left-5 bg-white font-semibold text-3xl p-2 w-8 h-8 rounded-md z-10"
          onClick={onClick}
        />
        {Images.map((img: any, i) => (
          <div
            key={i}
            className="relative w-[160px] h-[160px] shrink-0 border-2 border-black p-2 mb-1 rounded-md first-of-type:ml-[300px] last-of-type:mr-5"
          >
            <div className="w-full h-full relative overflow-hidden">
              <Image
                src={img?.url?.toString() || img?.url}
                alt="Picked Image"
                fill
                sizes="300vw"
                onClick={onClick}
              />
            </div>
            {Loading === img.fileId ? (
              <AppSpin />
            ) : (
              <AiFillCloseCircle
                onClick={(e) => {
                  clear(
                    e,
                    img.name
                      ? { identifier: img.name, isNew: true }
                      : { identifier: img.fileId, isNew: false }
                  );
                }}
                className="absolute bottom-1 right-2 z-10 text-lg bg-white text-red-700 rounded-full"
              />
            )}
            {modalIsOpen === img.fileId && (
              <ConfirmModal
                confirmAction={() => DeleteImage(img.fileId)}
                loading={Loading === img.fileId}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTile;
