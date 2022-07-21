import React from "react";

interface props {
  classname: string;
  title: boolean;
}

export const MarsSVG = ({ classname, title }: props) => {
  return (
    <svg
      className={classname}
      id="MarsSVG"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        clip-rule="evenodd"
        d="M20.7071 4.29289C20.9147 4.50053 21.012 4.77677 20.9988 5.04866C20.9996 5.06567 21 5.08279 21 5.1V9C21 9.55228 20.5523 10 20 10C19.4477 10 19 9.55228 19 9V7.41421L15.8907 10.5235C16.5892 11.5043 17 12.7042 17 14C17 17.3137 14.3137 20 11 20C7.68629 20 5 17.3137 5 14C5 10.6863 7.68629 8 11 8C12.2958 8 13.4957 8.41079 14.4765 9.10925L17.5858 6H16C15.4477 6 15 5.55228 15 5C15 4.44772 15.4477 4 16 4H19.9C19.9172 4 19.9343 4.0004 19.9513 4.00118C20.2232 3.98801 20.4995 4.08525 20.7071 4.29289ZM15 14C15 16.2091 13.2091 18 11 18C8.79086 18 7 16.2091 7 14C7 11.7909 8.79086 10 11 10C13.2091 10 15 11.7909 15 14Z"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default MarsSVG;
