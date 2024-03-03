import "./styles.css";
import React from "react";
interface ChangeTextColorOneByOneProps {
  children: string;
}
const ChangeTextColorOneByOne = ({
  children,
}: ChangeTextColorOneByOneProps) => {
  return (
    <h1 className="">
      {children.split("").map((child) => {
        return <span className="text-red-300">{child}</span>;
      })}
    </h1>
  );
};

export default ChangeTextColorOneByOne;
