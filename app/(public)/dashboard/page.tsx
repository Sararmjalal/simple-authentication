import DashboardRoot from "@/components/dashboard"
import dashboardData from "@/apis/statics/dashboard.json"
import { Box } from "lucide-react"

const Dashboard = () => {
  return (
    <DashboardRoot {...dashboardData} />
  )
}

export default Dashboard