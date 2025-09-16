import DashboardRoot from "@/components/dashboard"
import dashboardData from "@/apis/statics/dashboard.json"

const Dashboard = () => {
  return (
    <DashboardRoot {...dashboardData} />
  )
}

export default Dashboard