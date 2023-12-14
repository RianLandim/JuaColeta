import { FormHTMLAttributes, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
} & Omit<FormHTMLAttributes<HTMLFormElement>, "className">;

export function Card({ children, ...rest }: CardProps) {
  return (
    <form
      className="flex flex-col items-center justify-center p-4 rounded-md bg-slate-400 gap-4 w-3/5"
      {...rest}
    >
      {children}
    </form>
  );
}
