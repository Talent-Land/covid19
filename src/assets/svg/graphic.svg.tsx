import React from "react";

interface props {
  classname: string;
  title: boolean;
}

export const GraphicSVG = ({ classname, title }: props) => {
  return (
    <svg
      className={classname}
      id="GraphicSVG"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35.797 35.797"
    >
      <path d="M17.877,17.834H0.043C0.897,8.377,8.42,0.854,17.877,0V17.834z M20.756,2.873v16.424c0,0.828-0.672,1.5-1.5,1.5H2.831
		c0.759,8.408,7.817,15,16.423,15c9.113,0,16.5-7.389,16.5-16.5C35.754,10.691,29.165,3.63,20.756,2.873z"/>
 </svg>
  );
};

export default GraphicSVG;
