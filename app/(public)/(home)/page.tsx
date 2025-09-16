import { Metadata } from "next";
import { meta } from "@/lib/constants";
import HomeRoot from "@/components/home";
import { ROUTES } from "@/types/enums/routes";
import homeData from "@/apis/statics/home.json";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta[ROUTES.HOME]
  }
}

export default function Home() {
  return (
    <HomeRoot {...homeData} />
  );
}
