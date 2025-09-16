"use client"
import AuthForm from "@/components/auth/Form";
import { Box, TypographyH1, TypographyP } from "@/components/ui";
import { useUser } from "@/context/User";
import AuthLoading from "./Loading";

type Props = {
  authData: {
    title: string
    description: string
    form: {
      phoneNumber: {
        label: string
        placeholder: string
        pattern: string
        type: string
        inputMode: string
        defaultValue: string
        patternMessage: string
      }
      button: string
    }
    button: string
  }
}

const AuthRoot = ({ authData }: Props) => {
  const { thisUser } = useUser()
  if (thisUser) return <AuthLoading />
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