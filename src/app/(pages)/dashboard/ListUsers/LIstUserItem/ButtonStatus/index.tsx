import { Button } from "@mantine/core"

interface ButtonStatusProps {
  status: "Accepted" | "Denied",
}
export function ButtonStatus({ status }: ButtonStatusProps) {
  return (
    <Button
      variant="default"
      className={`w-24 text-sm py-1.5 px-3 rounded-md font-medium text-mygreen-200 ${status === "Accepted" ? "bg-green-400/20 text-mygreen-200" : "bg-red-600/20 text-red-600 "} font-medium hover:brightness-45 transition-all border-none`}
    >
      {status}
    </Button>
  )
}