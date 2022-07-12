import React from "react";

const R023 = (props) => {
    return <div style={{ padding: "0px" }}>{props.children + " program"}</div>;

    //App.js에서 <span>으로 전달할 경우, Object 형식으로 전달된다.
    //props.children으로 접근 가능.
};

export default R023;
