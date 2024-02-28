import { NAVBAR_LINKS } from '@/app/constants/MenuLinks'
import React from 'react'
import { NextLink } from '../NextLink'
import { Avatar } from './Avatar'
import { BlockPath } from './BlockPath'

export function Header() {
  return (
    <header className='w-full bg-mygreen-800 h-[151px] flex flex-col items-center fixed top-0 z-20'>
      <div className='w-full flex items-center h-full px-20'>
        <div className='w-max flex items-center justify-center px-4 '>
          <svg className='mr-4' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.8" d="M12 0V24" stroke="#F4FFF3" stroke-width="8" stroke-miterlimit="10" />
            <path opacity="0.6" d="M0 12H24" stroke="#F4FFF3" stroke-width="8" stroke-miterlimit="10" />
          </svg>
        </div>
        <div className='w-full flex items-center justify-between'>
          <div className='w-max flex gap-1 items-center justify-center'>
            {NAVBAR_LINKS.map(link => (
              <NextLink
                key={link.href}
                href={link.href}
                children={link.text}
              />
            ))}
          </div>
          <div className='w-max flex items-center justify-center gap-4'>
            <svg width="131" height="30" viewBox="0 0 131 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4.83325" y="5.33337" width="8.45833" height="8.45833" rx="1.5" fill="white" />
              <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M15.7083 6.83337C15.7083 6.00495 16.3798 5.33337 17.2083 5.33337H22.6666C23.495 5.33337 24.1666 6.00495 24.1666 6.83337V12.2917C24.1666 13.1201 23.495 13.7917 22.6666 13.7917H17.2083C16.3798 13.7917 15.7083 13.1201 15.7083 12.2917V6.83337ZM4.83325 17.7084C4.83325 16.8799 5.50482 16.2084 6.33325 16.2084H11.7916C12.62 16.2084 13.2916 16.8799 13.2916 17.7084V23.1667C13.2916 23.9951 12.62 24.6667 11.7916 24.6667H6.33325C5.50483 24.6667 4.83325 23.9951 4.83325 23.1667V17.7084ZM17.2083 16.2084C16.3798 16.2084 15.7083 16.8799 15.7083 17.7084V23.1667C15.7083 23.9951 16.3798 24.6667 17.2083 24.6667H22.6666C23.495 24.6667 24.1666 23.9951 24.1666 23.1667V17.7084C24.1666 16.8799 23.495 16.2084 22.6666 16.2084H17.2083Z" fill="white" />
              <rect opacity="0.3" x="68.7083" y="5.961" width="3.625" height="18.0779" rx="1.8125" fill="white" />
              <rect x="62.6667" y="11.6104" width="3.625" height="12.4286" rx="1.8125" fill="white" />
              <rect x="74.75" y="13.8701" width="3.625" height="10.1688" rx="1.8125" fill="white" />
              <rect x="56.625" y="16.1299" width="3.625" height="7.90909" rx="1.8125" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M129.145 20.8074C129.468 21.0977 129.982 20.8676 129.98 20.4338L129.963 16.0362V8.93092C129.963 7.62288 128.784 6.5625 127.331 6.5625H115.05C113.597 6.5625 112.419 7.62288 112.419 8.93092V12.1875H119.667C121.324 12.1875 122.667 13.5306 122.667 15.1875V18.4046H126.476L129.145 20.8074Z" fill="white" />
              <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M108.068 20.625V15.9375C108.068 14.902 109.001 14.0625 110.151 14.0625H118.485C119.635 14.0625 120.568 14.902 120.568 15.9375V20.625C120.568 21.6605 119.635 22.5 118.485 22.5H110.272L108.921 23.6632C108.597 23.9424 108.095 23.7121 108.095 23.2844V20.929C108.077 20.83 108.068 20.7285 108.068 20.625ZM112.25 17.3437C112.25 17.0849 112.46 16.875 112.719 16.875H118.031C118.29 16.875 118.5 17.0849 118.5 17.3437C118.5 17.6026 118.29 17.8125 118.031 17.8125H112.719C112.46 17.8125 112.25 17.6026 112.25 17.3437ZM115.844 18.75C115.585 18.75 115.375 18.9599 115.375 19.2188C115.375 19.4776 115.585 19.6875 115.844 19.6875H118.031C118.29 19.6875 118.5 19.4776 118.5 19.2188C118.5 18.9599 118.29 18.75 118.031 18.75H115.844Z" fill="white" />
            </svg>
            <Avatar />
          </div>
        </div>
      </div>
      <div className='bg-white-100 w-full h-full flex'>
        <BlockPath 
          path='Doctor' 
          aditionalPath='Add a new doctor'
        />
      </div>
    </header>
  )
}
