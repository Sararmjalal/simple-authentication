import AuthForm from "@/components/auth/Form";
import Image from "next/image";
import authData from "@/apis/statics/authentication.json"

export default function Home() {
  return (
    <AuthForm formData={authData.form} />
  );
}
