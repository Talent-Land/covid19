import React from "react";

interface props {
  title: string;
  stat: string;
  color: string;
  bordercolor: string;
  children: JSX.Element;
}

export const StatisticCard = ({
  title,
  stat,
  color,
  bordercolor,
  children,
}: props) => {
  return (
    <div
      className={`flex flex-row basis-3/12 border-l-4 ${bordercolor} rounded-md drop-shadow-2xl shadow-md mr-2 my-2 p-2`}
    >
      <div className="flex flex-col w-9/12">
        {/* RESEARCH TITLE */}
        <div className="font-bold text-grayT-400 pb-1">{title}</div>
        <div className={`font-bold ${color} pb-1`}>{stat}</div>
      </div>

      {/* <hr className="border-gray-400"></hr> */}
      <div className="items-center pt-2 w-3/12">{children}</div>
    </div>
  );
};

export default StatisticCard;
