"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { GETRandomUsers } from "@/apis/queries"
import { useUser } from "@/context/User"
import { useState } from "react"

type Props = {
  formData: {
    phoneNumber: {
      label: string;
      placeholder: string;
      pattern: string;
      type: string;
      inputMode: string;
      defaultValue: string;
      patternMessage: string;
    };
    button: string;
  }
}

const AuthForm = ({ formData }: Props) => {

  const { setUser } = useUser()
  const { button, phoneNumber } = formData
  const [loading, setLoading] = useState(false)

  const formSchema = z.object({
    phoneNumber: z.string().regex(new RegExp(phoneNumber.pattern), {
      message: phoneNumber.patternMessage,
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: phoneNumber.defaultValue,
    },
  })

  async function onSubmit() {
    setLoading(true)
    const res = await GETRandomUsers({ results: 1, nat: "us" })
    if (res) {
      const { email, name, picture } = res.results[0]
      return setUser({ name, email, picture })
    }
    form.setError("phoneNumber", {
      type: "manual",
      message: "Something went wrong! Please try again.",
    })
    setLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {phoneNumber.label}
              </FormLabel>
              <FormControl>
                <Input placeholder={phoneNumber.placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          disabled={!form.formState.isValid || loading}
          type="submit">
          {button}
        </Button>
      </form>
    </Form>
  )
}

export default AuthForm