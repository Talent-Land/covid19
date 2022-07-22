import React, { Dispatch, SetStateAction } from "react";

interface props {
  text: string;
  color: string;
  colorHover: string;
  isClicked: boolean;
  setisClicked: Dispatch<SetStateAction<boolean>>;
}

export const Button = ({
  text,
  color,
  colorHover,
  isClicked,
  setisClicked,
}: props) => {
  return (
    <button
      onClick={() => setisClicked(!isClicked)}
      className={`${color} ${colorHover} text-whiteT rounded-md m-2 p-2`}
    >
      {text}
    </button>
  );
};

export default Button;
