import React from "react";

const R022 = (props) => {
    let { ReactS, ReactN } = props;

    return (
        <div style={{ padding: "0px" }}>
            {ReactS}
            {ReactN}
        </div>
    );
};

//변수의 초기값을 지정.
//props에서 넘어온 값이 없을 경우 자동으로 해당 값으로 초기화된다.
R022.defaultProps = {
    ReactS: "test react",
    ReactN: 400,
};

export default R022;
