"use client"
import { useQuery } from "@tanstack/react-query"
import { Container, Table } from "@mantine/core"
import { headingItems } from "@/app/constants/Headings"
import { UsersListSkeleton } from "@/app/components/Skeletons/UsersListSkeleton"
import { api } from "@/app/api"
import { IUser } from "@/app/@types/Types"
import { ListHeader } from "./ListHeader"
import { ListUserItem } from "./LIstUserItem"

export function ListUsers() {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const users = await api.get<IUser[]>("/users");
      return users.data;
    }
  });

  return (
    <div className="mx-auto mt-52 p-10 rounded-lg bg-white-100 w-[88.6%] pb-16" suppressHydrationWarning={true}>
      <ListHeader />

      <Table verticalSpacing={15} className='w-full outline-none mt-6'>
        <Table.Thead className="bg-mygray-100 rounded-[.6rem] text-gray-400 h-[4rem]">
          <Table.Tr className='border-none outline-none'>
            {headingItems.map((item) => (
              <Table.Th className={`${item.text === "Name" && "pl-5"} text-[12px] text-myzinc-800`} key={item.text}>
                {item.text}
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {isLoading ?
              <h2 className="text-mygray-500">
                Carregando usuários
              </h2>
             :
            users?.map(user => (
              <ListUserItem
                key={user.id}
                id={user.id}
                name={user.name}
                avatar={user.avatar}
                email={user.email}
                phone_number={user.phone_number}
                date_added={user.date_added}
                designation={user.designation}
                status={user.status}
              />
            ))}
        </Table.Tbody>
      </Table>
    </div>
  )
}
