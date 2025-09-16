import * as React from "react"
import { cn } from "@/lib/utils"

function Box({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="box"
      className={cn("flex flex-col", className)}
      {...props}
    />
  )
}

export { Box }