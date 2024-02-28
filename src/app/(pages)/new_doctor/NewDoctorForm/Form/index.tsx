"use client"
import { DatePickerInput } from '@mantine/dates';
import { Form } from "@/app/components/Form"
import { InputGroup } from "@/app/components/InputGroup"
import { CalendarDays } from 'lucide-react';
import { useState } from 'react';

export function FormAddNewDoctor() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <form className="w-full flex flex-col gap-2 px-4 pt-12 pb-2 ">
      <h2 className="font-semibold text-md">Basic Information</h2>
      <div className="w-full h-full flex flex-col gap-[18px]">
        <InputGroup>
          <Form.Select
            id="user"
            label="Select your user type"
            placeholder="Your user type"
          >
            <option value="admin"></option>
            <option value="user"></option>
          </Form.Select>
          <Form.Select
            id="user"
            label="Gender"
            placeholder="Your gender"
          >
            <option value="Macho"></option>
            <option value="Female"></option>
          </Form.Select>
        </InputGroup>
        <InputGroup>
          <Form.Input
            type="text"
            label="First Name"
            placeholder="Your first name"
          />
          <Form.Input
            type="text"
            label="Designation"
            placeholder="Your designation"
          />
        </InputGroup>
        <InputGroup>
          <Form.Input
            type="text"
            label="Last Name"
            placeholder="Your last name"
          />
          <DatePickerInput
            className={`w-full`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            rightSection={<CalendarDays className='text-black' />}
            label="Date of birth"
            placeholder="Select your day of Birth"
            classNames={{
              input: "inputDate",
            }}
          />
        </InputGroup>
        <InputGroup className="flex w-[50%]">
          <Form.Input
            type="email"
            label="Email address"
            placeholder="Your email address"
          />
        </InputGroup>
        <div className="w-full mt-6 flex items-end">
          <Form.Button className="w-max ml-auto border-none text-white-100 hover:bg-mygreen-800 transition-colors">
            Next Step
          </Form.Button>
        </div>
      </div>
    </form>
  )
}

/*

*/

