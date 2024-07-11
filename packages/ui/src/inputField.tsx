import { InputHTMLAttributes, ReactNode } from "react";

import { cn } from ".";
import { Input } from "./input";

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
      <label className="self-start text-sm font-bold" htmlFor={inputProps.name}>
        {label}
      </label>
      <div className="flex w-full flex-row items-center justify-center">
        <Input {...inputProps}></Input>
        {rightIcon}
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
