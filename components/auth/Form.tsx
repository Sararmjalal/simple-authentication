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

  const { button, phoneNumber } = formData

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {phoneNumber.label}
              </FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          disabled={!form.formState.isValid}
          type="submit">
          {button}
        </Button>
      </form>
    </Form>
  )
}

export default AuthForm