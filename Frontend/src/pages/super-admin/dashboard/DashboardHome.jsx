import DashboardCard from "../../../components/ui/cards/DashboardCard/DashboardCard";
import LeadGrowthChart from "../../../components/ui/charts/LeadGrowthChart/LeadGrowthChart";
import styles from "./DashboardHome.module.css";
import RecentLeadsTable from "../../../components/ui/tables/RecentLeadsTable/RecentLeadsTable";
import RecentTasksWidget from "../../../components/ui/tables/RecentTasksTable/RecentTasksWidget";
const DashboardHome = () => {
  return (
    <div className={styles.dashboard}>

      <div className={styles.cardsGrid}>

        <DashboardCard
          title="Total Admins"
          value="5"
          icon="fa-solid fa-user-shield"
        />

        <DashboardCard
          title="Total Agents"
          value="12"
          icon="fa-solid fa-users"
        />

        <DashboardCard
          title="Total Leads"
          value="250"
          icon="fa-solid fa-chart-line"
        />

        <DashboardCard
          title="Active Leads"
          value="120"
          icon="fa-solid fa-user-check"
        />

        <DashboardCard
          title="Pending Tasks"
          value="8"
          icon="fa-solid fa-list-check"
        />

        <DashboardCard
          title="Conversion Rate"
          value="24%"
          icon="fa-solid fa-arrow-trend-up"
        />
      </div>
      <LeadGrowthChart />
      <RecentLeadsTable />
      <RecentTasksWidget />
    </div>
  );
};

export default DashboardHome;
