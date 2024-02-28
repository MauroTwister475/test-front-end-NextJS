import { IUser } from "@/app/@types/Types"
import { HeadingListItem } from "./HeadingListItem"
import { ButtonStatus } from "./ButtonStatus"
import { ArrowRight } from "./ArrowRight"

export function ListUserItem(user: IUser) {
  return (
    <tr className="w-full py-2 flex justify-between items-center rounded-md mt-6 gap-5">

      <td className="text-start">
        <div className="flex items-center justify-center gap-4">
          <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-md border" />
          <div className="w-max flex flex-col">
            <h2>{user.name}</h2>
            <span className="text-sm text-gray-400">{user.designation}</span>
          </div>
        </div>
      </td>
      {/* <div className="w-full flex justify-between text-center text-black font-semibold"> */}
      <td className="text-start">
        <HeadingListItem>
          {user.id}
        </HeadingListItem>
      </td>
      <td className="text-start">
        <HeadingListItem>
          {user.email}
        </HeadingListItem>
      </td>
      <td className="text-start">
        <HeadingListItem>
          {user.phone_number}
        </HeadingListItem>
      </td>
      <td className="text-start">
        <HeadingListItem>
          <div className="flex flex-col gap-1 items-center justify-center">
            <span>{user.date_added.day}</span>
            <span className="text-gray-300 text-sm ">{user.date_added.hour}</span>
          </div>
        </HeadingListItem>
      </td>
      <td className="text-start">
        <div className="flex items-center gap-6">
          <ButtonStatus status={user.status} />
          <ArrowRight />
        </div>
      </td>
    </tr>
  )
}
