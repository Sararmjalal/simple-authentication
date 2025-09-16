import { Metadata } from "next";
import { meta } from "@/lib/constants";
import AuthRoot from "@/components/auth";
import { ROUTES } from "@/types/enums/routes";
import authData from "@/apis/statics/authentication.json";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta[ROUTES.AUTH]
  }
}

const Auth = () => {
  return (
    <AuthRoot authData={authData} />
  )
}

export default Auth