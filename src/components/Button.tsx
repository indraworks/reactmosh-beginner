import { ReactNode } from "react";

//siapkan inferface
interface Props {
  children: ReactNode;
  color: string;
  onClick: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
