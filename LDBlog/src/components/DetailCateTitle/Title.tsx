import React, { useState } from "react";
import "./index.scss";
import { withRouter, RouteChildrenProps } from "react-router";
const dynmicalTitle = (curNav: string | number) => {
  console.log("curNav :>> ", curNav);
  if (curNav == 1) {
    return {
      title: "Front-End",
      bgImg: "url('/imgs/front.jpg')",
    };
  } else if (curNav == 2) {
    return {
      title: "Back-End",
      bgImg: "url('/imgs/backEnd.jpg')",
    };
  } else if (curNav == 3) {
    return {
      title: "Interesting Things",
      bgImg: "url('/imgs/front.jpg')",
    };
  }
  return {};
};
function FrontTitle(props: RouteChildrenProps) {
  const curNav: any = sessionStorage.getItem("Blog_Nav");
  const { title, bgImg } = dynmicalTitle(curNav);
  return (
    <div className="detailPageHeader w-full">
      <div className="title">{title}</div>
    </div>
  );
}
export default withRouter(FrontTitle);
