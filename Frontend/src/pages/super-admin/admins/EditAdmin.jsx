import FormDashboard from "../../../components/ui/forms/FormDashboard/FormDashboard";

const EditAdmin = () => {
  const adminData = {
    id: 1,
    name: "Mohamed Hassan",
    email: "mohamed@test.com",
    phone: "01012345678",
    role: "admin",
    status: "active",
  };

  return (
    <FormDashboard
      mode="edit"
      initialData={adminData}
    />
  );
};

export default EditAdmin;