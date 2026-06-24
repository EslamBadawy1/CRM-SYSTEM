import FormDashboard from "../../../components/ui/forms/FormDashboard/FormDashboard";

const CreateAdmin = () => {
  return (
    <FormDashboard
      mode="create"
      defaultRole="admin"
    />
  );
};

export default CreateAdmin;