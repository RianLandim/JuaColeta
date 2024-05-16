import { ReactNode } from "react"

export type LayoutProps<T = {}> = {
    children: ReactNode
} & T