import { FormHTMLAttributes, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  otherCSS: string
} & Omit<FormHTMLAttributes<HTMLFormElement>, "className">;

export function Card({ children, otherCSS,...rest  }: CardProps) {
  return (
    <form
      className={`flex flex-col items-center justify-center
      border  w-3/5 ${otherCSS}`}
      {...rest}
    >
      {children}
    </form>
  );
}
