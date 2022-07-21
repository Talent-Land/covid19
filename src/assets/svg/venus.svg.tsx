import React from "react";

interface props {
  classname: string;
  title: boolean;
}

export const VenusSVG = ({ classname, title }: props) => {
  return (
    <svg
      className={classname}
      id="VenusSVG"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        clip-rule="evenodd"
        d="M18 9C18 11.9742 15.836 14.4429 12.9967 14.9176C12.9989 14.9448 13 14.9722 13 15V17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V19H10C9.44772 19 9 18.5523 9 18C9 17.4477 9.44772 17 10 17H11V15C11 14.9722 11.0011 14.9448 11.0033 14.9176C8.16399 14.4429 6 11.9742 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default VenusSVG;
