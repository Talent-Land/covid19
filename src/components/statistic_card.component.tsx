import React from "react";

interface props {
  title: string,
  color: string,
  bordercolor: string,
  children: JSX.Element,
}

export const StatisticCard = ({ title, color, bordercolor, children }: props) => {
  return (
    <div
      className={`${color} border-l-4 ${bordercolor} rounded-md drop-shadow-2xl mr-2 my-2 p-2`}
    >
      {/* RESEARCH TITLE */}
      <div className="font-bold pb-1">{title}</div>

      <hr className="border-gray-400"></hr>
      <div className="pt-2">{children}</div>
    </div>
  );
};

export default StatisticCard;
