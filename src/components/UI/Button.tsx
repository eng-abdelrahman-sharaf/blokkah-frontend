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
  variation: "primary"|"secondary";  
}

export const AVButton = (props: AVButtonProps) => {
  let bgcolor: string;
  if (props.variation == "primary")  
  return <Button className="flex gap-2 px-3 py-5" {...props}  />
}