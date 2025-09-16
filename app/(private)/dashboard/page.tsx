import { Metadata } from "next";
import { meta } from "@/lib/constants";
import { ROUTES } from "@/types/enums/routes";
import DashboardRoot from "@/components/dashboard";
import dashboardData from "@/apis/statics/dashboard.json";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta[ROUTES.DASHBOARD]
  }
}

const Dashboard = () => {
  return (
    <DashboardRoot {...dashboardData} />
  )
}

export default Dashboard