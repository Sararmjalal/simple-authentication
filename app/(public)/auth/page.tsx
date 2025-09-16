import AuthRoot from "@/components/auth";
import authData from "@/apis/statics/authentication.json";

const Auth = () => {
  return (
    <AuthRoot authData={authData} />
  )
}

export default Auth