import { ReactNode } from 'react'

export const MaxWidthrapper = ({className, children,}:{className?:string, children:ReactNode}) => {
  return (
    <div  className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:p-20',className)}>MaxWidthwrapper</div>
  )
}
export default MaxWidthwrapper