"use client"
import { useQuery } from "@tanstack/react-query"
import { Container, Table } from "@mantine/core"
import { headingItems } from "@/app/constants/Headings"
import { UsersListSkeleton } from "@/app/components/Skeletons/UsersListSkeleton"
import { api } from "@/app/api"
import { IUser } from "@/app/@types/Types"
import { ListHeader } from "./ListHeader"
import { ListUserItem } from "./LIstUserItem"
import { Suspense } from "react"
import Users from "./users"

export function ListUsers() {
  

  return (
    <div className="mx-auto mt-52 p-10 rounded-lg bg-white-100 w-[88.6%] pb-16 mb-96" suppressHydrationWarning={false}>
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
          
            <Users />
          {/* </Suspense> */}
        </Table.Tbody>
      </Table>
    </div>
  )
}
