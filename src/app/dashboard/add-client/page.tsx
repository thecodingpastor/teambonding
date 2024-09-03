import { Link } from "@/components/layout/Link";
import { Button } from "@/components/ui/button";
import { IoMdArrowRoundBack } from "react-icons/io";
import ClientForm from "./_components/client-form";
import customFetch from "@/lib/customFetch";

const AddClientPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const id = searchParams?.id || "";
  const client = await customFetch("/api/clients/" + id);

  // if (!client?._id) {
  //   notFound();
  // }

  return (
    <div className="mt-24 md:mt-10 max-w-[1000px] mx-auto px-4 min-h-[50vh]">
      <div className="flex justify-between items-center">
        <h3>Add Client</h3>{" "}
        <Link href="/dashboard">
          <Button
            hideArrow
            className="bg-white text-black border-2
             border-black md:text-lg"
          >
            <IoMdArrowRoundBack /> Back
          </Button>
        </Link>
      </div>
      <ClientForm client={client} />
    </div>
  );
};

export default AddClientPage;
