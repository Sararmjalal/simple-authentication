"use client"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/types/enums/routes"
import { Box, Button, TypographyH1, TypographyP } from "../ui"

type Props = {
  title: string
  description: string
  button: string
}

const HomeRoot = ({ title, button, description }: Props) => {
  const { push } = useRouter()
  return (
    <Box className="md:max-w-md w-full p-6 bg-white rounded-lg shadow-md flex flex-col gap-2">
      <TypographyH1>
        {title}
      </TypographyH1>
      <TypographyP>
        {description}
      </TypographyP>
      <Button
        type="button"
        onClick={() => push(ROUTES.AUTH)}
        className="w-full cursor-pointer">
        {button}
      </Button>
    </Box>
  )
}

export default HomeRoot