import { useEffect, useState } from "react";
import TableDashboard from "../../../components/ui/tables/TableDashboard/TableDashboard";

const Admins = () => {
  const columns = [
    {
      header: "Name",
      key: "name",
    },
    {
      header: "Email",
      key: "email",
    },
    {
      header: "Role",
      key: "role",
    },
    {
      header: "Status",
      key: "status",
    },
  ];

  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: "Mohamed Hassan",
      email: "mohamed@test.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Ahmed Ali",
      email: "ahmed@test.com",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Omar Salah",
      email: "omar@test.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 4,
      name: "Ali Hassan",
      email: "ali@test.com",
      role: "Admin",
      status: "Active",
    },
  ]);

  const handleDelete = (admin) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${admin.name}?`
    );

    if (!confirmed) return;

    setAdmins((prev) =>
      prev.filter((item) => item.id !== admin.id)
    );
  };
  const handleSearch = (value) => {
    console.log("Search:", value);

    // Backend Later
    // fetchAdmins({ search: value })
  };

  const handlePageChange = (page) => {
    console.log("Page:", page);

    // Backend Later
    // fetchAdmins({ page })
  };

  useEffect(() => {
    // Backend Later
    // fetchAdmins();
  }, []);

  return (
    <TableDashboard
      title="Admins Management"
      description="Manage system administrators and permissions"
      buttonText="Add Admin"
      buttonLink="/admin/dashboard/admins/create"
      columns={columns}
      data={admins}
      onDelete={handleDelete}
      onSearch={handleSearch}
      currentPage={1}
      totalPages={1}
      onPageChange={handlePageChange}
    />
  );
};

export default Admins;