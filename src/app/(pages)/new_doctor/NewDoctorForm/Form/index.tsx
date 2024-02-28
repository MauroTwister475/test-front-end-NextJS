import { Form } from "@/app/components/Form"
import { InputGroup } from "@/app/components/InputGroup"
import { Select, TextInput } from "@mantine/core"
export function FormAddNewDoctor() {
  return (
    <form className="w-full flex flex-col gap-2 px-4 pt-12 pb-2">
      <h2 className="font-semibold text-md">Basic Information</h2>
      <div className="w-full h-full">
        <InputGroup>
          <Select
            className="w-full"
            label="User Type"
            placeholder="Select user type"
            data={["admin", "user"]}
          />
          <Select
            className="w-full  focus:border-red-800"
            label="Gender"
            placeholder="Select gender"
            data={["male", "female"]}
          />
        </InputGroup>
        <InputGroup>
          <TextInput
            className="w-full border-red-400"
            label="First Name"
            type="text"
            placeholder="Your first name"
          />
          <TextInput
            className="w-full"
            type="text"
            label="Designation"
            placeholder="Your designation"
          />
        </InputGroup>
        <InputGroup>
          <TextInput
            className="w-full"
            label="Last Name"
            type="text"
            placeholder="Your Last name"
          />
          <Select
            className="w-full"
            type="date"
            label="Date of birth"
            placeholder="Your birth date"
          />
        </InputGroup>
        <InputGroup className="flex w-[50%]">
          <TextInput
            className="w-full"
            type="email"
            label="Email address"
            placeholder="Your email address"
          />
        </InputGroup>
        <div className="w-full mt-6 flex items-end">
          <Form.Button className="w-max ml-auto text-white-100 hover:bg-green-600 transition-colors">
            Next Step
          </Form.Button>
        </div>
      </div>
    </form>
  )
}
