
import { Avatar as MantineAvatar } from "@mantine/core"
export function Avatar() {
  return (
    <MantineAvatar className="bg-gray-300/10" radius="sm">
      {/* <h2 className="">
        Marvin McKinney <br />
        admin
      </h2> */}
      <span className="text-white-100">
        M
      </span>
    </MantineAvatar>
  );
}