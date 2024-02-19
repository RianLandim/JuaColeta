import { InputHTMLAttributes, ReactNode } from "react";
import { Input } from "./input";
import { cn } from "@/utils/cn";

interface InputFieldProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  label: string;
  className?: string;
  rightIcon?: ReactNode;
}

export function InputField({
  inputProps,
  label,
  className,
  rightIcon,
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
    </div>
  );
}
