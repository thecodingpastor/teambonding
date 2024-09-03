import AddClientButton from "./_components/add-client-button";
import ClientsList from "./_components/clients-list";

const AdminDashboard = async () => {
  return (
    <div className="mt-24 md:mt-10 max-w-[1000px] mx-auto px-4">
      <div className="flex items-center justify-between mb-5">
        <h3>Clients</h3>
        <AddClientButton />
      </div>
      <ClientsList />
    </div>
  );
};

export default AdminDashboard;
