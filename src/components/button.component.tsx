import React from "react";

interface props{
  text:string,
  color: string,
  colorHover: string,
}
export const Button = ({text, color, colorHover} : props) => {
  return <button className={`${color} ${colorHover} text-whiteT rounded-md m-2 p-2`}>{text}</button>;
};

export default Button;
