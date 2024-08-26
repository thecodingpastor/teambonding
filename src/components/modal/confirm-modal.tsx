"use client";

import useUIStore from "@/store/uiStore";
import AppModal from ".";
import { Button } from "../ui/button";

interface ConfirmModalProps {
  confirmAction: () => void;
  loading: boolean;
  closeButtonText?: string;
  message?: string;
}
const ConfirmModal: React.FC<ConfirmModalProps> = ({
  loading,
  closeButtonText = "Proceed",
  message = "Are you sure you want to proceed with this action?",
  confirmAction,
}) => {
  return (
    <AppModal overlayClose>
      <div className="flex flex-col gap-8 items-center justify-center text-center py-10 sm:py-3 ">
        <p className="font-normal">{message}</p>
        <div className="flex justify-center gap-4">
          <Button onClick={confirmAction} loading={loading} disabled={loading}>
            {closeButtonText}
          </Button>
        </div>
      </div>
    </AppModal>
  );
};

export default ConfirmModal;
