import { ReactNode } from "react"

interface HeadingListItemProps {
  children?: string | ReactNode,
}
export function HeadingListItem({ children }: HeadingListItemProps) {
  return (
    <h3 className="text-sm">{children}</h3>
  )
}
