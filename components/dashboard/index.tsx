"use client"
import { Box, Button, TypographyH1, TypographyP } from "@/components/ui";

type Props = {
  title: string
  description: string
  button: string
}

const DashboardRoot = ({ title, description, button }: Props) => {
  return (
    <Box className="md:max-w-md w-full p-6 bg-white rounded-lg shadow-md flex flex-col gap-2">
      <TypographyH1>
        {`${title}!`}
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