"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import ModalPortal from "./portal";
import { MdClose } from "react-icons/md";
import useUIStore from "@/store/uiStore";

import styles from "./modal.module.css";

interface AppModalProps {
  children: React.ReactNode;
  overlayClose?: boolean;
}

const AppModal: React.FC<AppModalProps> = ({
  children,
  overlayClose = false,
}) => {
  const [Animate, setAnimate] = useState(false);
  const setOpenModal = useUIStore((state) => state.setOpenModal);
  const modalIsOpen = useUIStore((state) => state.modalIsOpen);

  const closeModal = () => {
    setAnimate(true);
    setTimeout(() => setOpenModal(""), 300);
  };

  return (
    <>
      {!!modalIsOpen && (
        <ModalPortal>
          <div
            className="fixed inset-0 z-[76] flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-[4px] overflow-hidden"
            onClick={
              overlayClose
                ? (e) => {
                    if (e.target === e.currentTarget) {
                      closeModal();
                    }
                  }
                : () => {}
            }
          >
            <div
              className={cn(
                "relative z-[2] bg-white p-2 sm:p-6 rounded-md w-[90%] max-w-[500px] md:max-w-[800px] m-auto max-h-[90vh] overflow-y-auto transform transition-all duration-300",
                Animate ? styles.ScaleUp : styles.ScaleDown
              )}
            >
              <MdClose
                className="absolute right-2 top-6 text-2xl"
                onClick={closeModal}
              />
              {children}
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
};

export default AppModal;
