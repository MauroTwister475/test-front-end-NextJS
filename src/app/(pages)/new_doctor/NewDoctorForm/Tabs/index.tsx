import { Tabs } from '@mantine/core';
import { FormAddNewDoctor } from '../Form';

export function TabsSteps() {
  return (
    <Tabs defaultValue="Information" color='#285430' >
      <Tabs.List>
        <Tabs.Tab value="Information">
          <div className='flex text-mygreen-800 gap-2'>
            <h1 className='text-3xl font-semibold'>
              1
            </h1>
            <div className='flex flex-col text-end'>
              <span className='font-bold mt-3'>
                Basic Information
              </span>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab value="Details">
          Enter Details
        </Tabs.Tab>
        <Tabs.Tab value="Services">
          Select Services
        </Tabs.Tab>
        <Tabs.Tab value="Submit">
          Review and Submit
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Information">
        <FormAddNewDoctor />
      </Tabs.Panel>
      <Tabs.Panel value="Details">
        Details content
      </Tabs.Panel>
      <Tabs.Panel value="Services">
        Services content
      </Tabs.Panel>
      <Tabs.Panel value="Submit">
        Subimit content
      </Tabs.Panel>
    </Tabs>
  );
}
