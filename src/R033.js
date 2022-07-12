import React from "react";

const R033 = () => {
    const element = [<li>react</li>, <li>200</li>, <li>Array map</li>];

    return <ul>{element.map((x) => x)}</ul>;
    //map에 unique key 값이 없어서 오류가 난다.
    //실행은 된다.
};

export default R033;
