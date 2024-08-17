import { toast } from "sonner";

type AppToastProps = {
  message: string;
  duration?: number;
};
export const AppToast = ({ message, duration = 5000 }: AppToastProps) => {
  toast(message, {
    duration,
    className: "!bg-[#202121] !text-white",
  });
};
