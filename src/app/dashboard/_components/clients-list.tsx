import customFetch from "@/lib/customFetch";

const ClientsList = async () => {
  const clients = await customFetch("/api/clients");
  console.log({ clients });
  return <div>ClientsList</div>;
};

export default ClientsList;
