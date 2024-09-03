import customFetch from "@/lib/customFetch";
import { formatDate } from "@/lib/formatDate";
import ActionButtons from "./action-buttons";

const ClientsList = async () => {
  const clients = await customFetch("/api/clients");

  return (
    <div className="min-h-[50vh] px-4">
      <ul className="border-t-2 mt-10">
        {clients.length > 0 ? (
          clients.map((item: any, index: number) => (
            <li
              key={item?._id}
              className="flex items-center list-decimal border-b-[1.5px] py-2 odd:bg-gray-100 gap-4 px-4"
            >
              <span>{index + 1}.</span>
              <span className="inline-block">{item?.name}</span>
              <span className="inline-block">{item?.category}</span>
              <span className="inline-block mr-auto">
                {formatDate(item?.createdAt)}
              </span>
              <ActionButtons id={item?._id} />
            </li>
          ))
        ) : (
          <p className="text-center mt-5">There are no clients yets.</p>
        )}
      </ul>
    </div>
  );
};

export default ClientsList;
