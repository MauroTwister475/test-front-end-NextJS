
import { Button } from "@mantine/core"
import { ArrowRight as ArrowRightLucide } from "lucide-react"

export function ArrowRight() {
  return (
    <Button
      className="w-max p-1 rounded-md bg-mygray-100 text-white-100 font-medium hover:bg-gray-300 transition-all border-none "
    >
      <ArrowRightLucide size={24} className="text-zinc-400 cursor-pointer transition-all" />
    </Button>
  )
}