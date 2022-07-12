import React from "react";

const R025 = (props) => {
    const [stateStr, setState] = React.useState("default");

    const stateChange = (flag) => {
        // if (flag === "direct") stateStr = "리액트";
        //const 변수는 재할당 불가!
        if (flag === "setstate") setState("react tset setState");
        else setState("default");
    };

    return (
        <div style={{ padding: "0px" }}>
            <button
                onClick={(e) => {
                    stateChange("direct", e);
                }}
            >
                state 직접 변경
            </button>
            <button
                onClick={(e) => {
                    stateChange("setstate", e);
                }}
            >
                setState로 변경
            </button>
            <br />
            state 변경하기 stateStr: {stateStr}
        </div>
    );
};

export default R025;
