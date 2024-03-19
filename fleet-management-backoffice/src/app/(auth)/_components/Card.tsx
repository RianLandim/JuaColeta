import { FormHTMLAttributes, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  otherCSS?: string
} & Omit<FormHTMLAttributes<HTMLFormElement>, "className">;

export function Card({ children, otherCSS,...rest  }: CardProps) {
  return (
    <form
      className={`flex flex-col items-center justify-center
      w-3/6 min-w-[20rem] border-main text-white border-2
      px-8 py-14 rounded-[50px] bg-[#1E1E1E] gap-4 ${otherCSS}`}
      {...rest}
    >
      {children}
    </form>
  );
}
