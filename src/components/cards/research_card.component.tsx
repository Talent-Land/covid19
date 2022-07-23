import { useState } from "react";

interface props {
  title: string;
  content: string;
}

export const ResearchCard = ({ title, content }: props) => {
  const [isOverview_active, setisOverview_active] = useState(false);

  return (
    <div
      onClick={() => setisOverview_active(true)}
      className="hover:cursor-pointer bg-transparent hover:bg-blue-themeLighter shadow-md rounded-md drop-shadow-3xl mr-2 my-2 p-2"
    >
      {/* RESEARCH TITLE */}
      <div className="font-bold pb-2">{title}</div>
      <hr></hr>
      {/* RESEARCH CONTENT */}
      <div className="text-sm pt-2">{content}</div>

      {/* {isOverview_active ? (
        <div className="absolute">
          <ResearchInfoContainer />
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default ResearchCard;
