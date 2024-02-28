import { headingItems } from "@/app/constants/Headings"
import { Button } from "@mantine/core"
import { UserPlus } from "lucide-react"
import { ListUserItem } from "./LIstUserItem"
import { usersDB } from "@/app/constants/users"

export function ListUsers() {
  return (
    <div className="mx-auto mt-52 p-10 rounded-lg bg-white-100 max-w-screen-lg pb-16">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">List of doctors</h1>
          <span className="text-gray-300">
            345 available doctors
          </span>
        </div>
        <Button
          className="w-48 rounded-md bg-mygreen-200 text-white-100 font-medium hover:bg-green-700 transition-colors"
          leftSection={<UserPlus size={20} className="text-white-100" />}
        >
          Add new doctor
        </Button>
      </div>

      <table className="w-full ">
        <thead className="w-full bg-mygray-100 p-4 flex justify-between items-center rounded-md mt-6">
          <tr className="w-full flex justify-between">
            {headingItems.map((item) => (
              <td key={item.text} className={`text-sm text-gray-400 text-start ${item.text == "" ? "":""}  w-full`}>
                {item.text}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {usersDB.map(profile => (
            <ListUserItem
              key={profile.id}
              id={profile.id}
              name={profile.name}
              avatar={profile.avatar}
              email={profile.email}
              phone_number={profile.phone_number}
              date_added={profile.date_added}
              designation={profile.designation}
              status={profile.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
