import { ActionIcon } from '@mantine/core';
import { ArrowRight as ArrowRightLucide } from "lucide-react"

export function ArrowRight() {
  return (
    <ActionIcon
    className="w-[32px]  h-[32px] rounded-[6px] bg-mygray-100 text-white-100 font-medium hover:bg-gray-300 transition-all border-none "
  >
      <ArrowRightLucide className="w-full text-zinc-400 cursor-pointer transition-all" />
    </ActionIcon>
  );
}