"use client"
import { Box, Button, TypographyH1, TypographyP } from "@/components/ui";
import { useUser } from "@/context/User";
import DashboardLoading from "./Loading";

type Props = {
  title: string
  description: string
  button: string
}

const DashboardRoot = ({ title, description, button }: Props) => {
  const { thisUser } = useUser()
  if (!thisUser) return <DashboardLoading />
  return (
    <Box className="md:max-w-md w-full p-6 bg-white rounded-lg shadow-md flex flex-col gap-2">
      <TypographyH1>
        {`${title} ${thisUser.name.title} ${thisUser.name.first} ${thisUser.name.last}!`}
      </TypographyH1>
      <TypographyP>
        {description}
      </TypographyP>
      <Button type="button" className="w-full cursor-pointer">
        {button}
      </Button>
    </Box>
  )
}

export default DashboardRoot