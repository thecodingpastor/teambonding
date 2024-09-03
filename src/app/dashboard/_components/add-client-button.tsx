import { Link } from "@/components/layout/Link";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

const AddClientButton = ({}) => {
  return (
    <Link href="/dashboard/add-client">
      <Button
        hideArrow
        className="bg-white text-black border-2 border-black md:text-lg"
      >
        Add Client <FaPlus />
      </Button>
    </Link>
  );
};

export default AddClientButton;
