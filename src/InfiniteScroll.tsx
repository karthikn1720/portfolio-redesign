import React from "react";
import "./infiniteScroll.css";
import nestjsLogo from "./assets/nestjs.svg";
const InfiniteScroll = () => {
  return (
    <div className="infinite-scroll-wrap">
      <div className="logos">
        <div className="logos-slide">
          <img src={nestjsLogo} />
          <img src={nestjsLogo} />
          <img src={nestjsLogo} />
          <img src={nestjsLogo} />
          <img src={nestjsLogo} />
          <img src={nestjsLogo} />
          <img src={nestjsLogo} />
          <img src={nestjsLogo} />
        </div>
        <div className="logos-slide">
          <img src={nestjsLogo} />
          <img src={nestjsLogo} />
          <img src={nestjsLogo} />
          <img src={nestjsLogo} />
          <img src={nestjsLogo} />
          <img src={nestjsLogo} />
          <img src={nestjsLogo} />
          <img src={nestjsLogo} />
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
