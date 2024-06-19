import { InputHTMLAttributes, ReactNode } from "react";
import { Input } from "./input";
import { cn } from "@/utils/cn";

interface InputFieldProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  label: string;
  className?: string;
  rightIcon?: ReactNode;
  error?: string;
}

export function InputField({
  inputProps,
  label,
  className,
  rightIcon,
  error,
}: InputFieldProps) {
  return (
    <div className={cn("w-full gap-2", className)}>
      <label className="font-bold self-start text-sm" htmlFor={inputProps.name}>
        {label}
      </label>
      <div className="w-full flex flex-row items-center justify-center">
        <Input {...inputProps}></Input>
        {rightIcon}
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
