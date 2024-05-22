import { type VariantProps, cva } from "class-variance-authority";

const spinner = cva("animate-spin rounded-full border-r-transparent", {
  variants: {
    color: {
      primary: "border-primary-main",
      white: "border-white",
    },
    size: {
      xs: "h-4 w-4",
      sm: "h-6 w-6",
      md: "h-8 w-8",
      lg: "h-10 w-10",
      xl: "h-12 w-12",
      "2xl": "h-16 w-16",
      forMainContents: "h-48 w-48",
    },
    thickness: {
      thin: "border",
      thick: "border-2",
      normal: "border-4",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    thickness: "thick",
  },
});

export type LoadingIndicatorProps = VariantProps<typeof spinner>;

export function LoadingIndicator({
  color,
  size,
  thickness,
}: LoadingIndicatorProps) {
  return <div className={spinner({ color, size, thickness })} />;
}
