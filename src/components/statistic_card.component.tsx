import React from "react";

interface props {
  title: string;
  color: string;
  children: JSX.Element;
}

export const StatisticCard = ({ title, color, children }: props) => {
  return (
    <div
      className={`bg-${color} border-l-4 border-blue-500 rounded-md drop-shadow-2xl mr-2 my-2 p-2`}
    >
      {/* RESEARCH TITLE */}
      <div className="font-bold pb-1">{title}</div>

      <hr className="border-gray-400"></hr>
      <div className="pt-2">{children}</div>
    </div>
  );
};

export default StatisticCard;
