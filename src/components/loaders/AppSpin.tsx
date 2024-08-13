import { cn } from "@/lib/utils";
import { CgSpinner } from "react-icons/cg";

const AppSpin = ({ className = "" }) => (
  <CgSpinner className={cn("animate-spin h-10 w-10 text-white", className)} />
);

export default AppSpin;
