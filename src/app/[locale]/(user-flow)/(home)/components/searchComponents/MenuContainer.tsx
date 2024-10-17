import { ReactNode } from "react";

const MenuContainer = ({children}:{children?:ReactNode}) => (
  <div className="py-3 bg-white border border-Gray-100 rounded-lg absolute top-full translate-y-3 z-20">
    {children}
  </div>
)

export default MenuContainer;