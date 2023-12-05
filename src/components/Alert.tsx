import { ReactNode } from "react"

interface Props {
    children:ReactNode ;
}

const Alert = ({children}:Props) => {
  return (
    <div className="Alert Alert-Primary">{children}</div>
  )
}

export default Alert