
export type IUser = {
  id: string,
  name: string,
  avatar: string,
  email: string,
  phone_number: string,
  date_added: { 
    day: string,
    hour: string,
  },
  designation: string,
  status: "Accepted" | "Denied",
}