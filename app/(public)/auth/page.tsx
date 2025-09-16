import AuthForm from "@/components/auth/Form";
import { Box, TypographyH1, TypographyP } from "@/components/ui";
import authData from "@/apis/statics/authentication.json"

const AuthRoot = () => {
  return (
    <Box className="md:max-w-md w-full p-6 bg-white rounded-lg shadow-md">
      <TypographyH1>
        {authData.title}
      </TypographyH1>
      <TypographyP>
        {authData.description}
      </TypographyP>
      <AuthForm formData={authData.form} />
    </Box>
  )
}

export default AuthRoot