import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;

/*
1.yg diingkan muncul pertama adalah button dulu nah kita mau ada state jika dia false 
alert gak dirender masih blum muncl baru stlah button diclick state jadi true alert uncul dirender di page ! 


*/
