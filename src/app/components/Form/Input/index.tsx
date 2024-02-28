import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { twM } from "@/app/utils/twMerge"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string,
  label?: string,
  type: string,
  className?: string,
  children?: ReactNode,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, name, type, className, children, ...rest }, ref) => {

    return (
      <div className="w-full flex flex-col gap-2">
        <label htmlFor={id}>{label}</label>
        <input
          className={twM('w-full h-10 bg-gray-300/10 border  text-gray-900 text-sm rounded-md outline-none focus:border-mygreen-800 py-2.5 px-4 transition-all', className)}
          name={name}
          id={id}
          type={type}
          ref={ref}
          {...rest}
        />
        {children}
      </div>
    )
  })

Input.displayName = 'Input';