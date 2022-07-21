import React from "react";

interface props{
  title: string,
  content: string,
}
export const ResearchCard = ({title, content}: props) => {
  return <div className='hover:cursor-pointer bg-transparent hover:bg-blue-themeLighter rounded-md drop-shadow-3xl mr-2 my-2 p-2'>
    {/* RESEARCH TITLE */}
    <div className='font-bold pb-2'>
      {title}
    </div>
    <hr></hr>
    {/* RESEARCH CONTENT */}
    <div className='text-sm pt-2'>
      {content}
    </div>
    </div>;
};

export default ResearchCard;
