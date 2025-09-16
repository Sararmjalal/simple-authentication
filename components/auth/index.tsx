"use client"
import AuthLoading from "./Loading";
import { useUser } from "@/context/User";
import AuthForm from "@/components/auth/Form";
import { Box, TypographyH1, TypographyP } from "@/components/ui";

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
  const { status } = useUser()
  if (status !== "unauthorized") return <AuthLoading />
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