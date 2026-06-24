import styles from "./RecentLeadsTable.module.css";

const RecentLeadsTable = () => {

  const leads = [
    {
      name: "Ahmed Ali",
      email: "ahmed@gmail.com",
      status: "New",
    },
    {
      name: "Mohamed Hassan",
      email: "mohamed@gmail.com",
      status: "Contacted",
    },
    {
      name: "Sara Mostafa",
      email: "sara@gmail.com",
      status: "Qualified",
    },
  ];

  return (
    <div className={styles.tableContainer}>

      <div className={styles.header}>
        Recent Leads
      </div>

      <table className={styles.table}>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {leads.map((lead, index) => (
            <tr key={index}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default RecentLeadsTable;