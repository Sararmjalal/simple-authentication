import { ReactNode } from "react"
import { ControllerRenderProps } from "react-hook-form"

export interface InputField {
  label: string
  key: string
  type: "text"
  inputMode?: "text" | "numeric" | "decimal" | "email" | "url" | "tel"
  value: string
  pattern: string
  placeholder: string
  prefix: string | ReactNode
  suffix: string | ReactNode
  required: boolean
  disabled: boolean
  display: boolean
  inputWidth: string
}

export interface FormConfig {
  inputs: InputField[]
  button: string
}

export interface FormAction {
  inputs: InputField[]
}

export type MutationBody = Record<string, string>

export interface FormIndexProps {
  formData: FormConfig
  isSubmitting?: boolean
  handleMutation: (data: MutationBody) => void | Promise<void>
}
