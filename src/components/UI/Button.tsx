import { ReactNode } from "react";

interface ButtonProps {
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
}


export default function Button(props: ButtonProps) {
  return (
    <button className={props.className}>
      {props.startIcon}
      <div>{props.label}</div>
      {props.endIcon}
    </button>
  );
}

interface AVButtonProps extends Omit<ButtonProps,"className">{
  variation: "primary" | "secondary";  
}

export const AVButton = (props: AVButtonProps) => {
  let bgcolor: string = "" , textColor:string = "";
  if (props.variation == "primary") {
    bgcolor = "bg-Brand-600"
    textColor= "text-white"
  }
  else if(props.variation == "secondary") {
    bgcolor = "bg-white"
    textColor= "text-Gray-700"
  }
  return <Button className={`flex gap-2 px-3 py-5  rounded-lg width border h-full ${bgcolor} ${textColor} `} {...props}  />
}