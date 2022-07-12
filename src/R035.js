import React from "react";
import { Badge, Button } from "reactstrap";

const R035 = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>
                procuct name <Badge color="secondary">hit</Badge>
                {/* secondary : 보색 */}
            </h1>
            <Button
                color="light"
                outlines="true"
                onClick={() => {
                    setCount(count + 1);
                    console.log(count + "버튼 클릭");
                }}
            >
                Click <Badge color="dark">{count}</Badge>
                {/* 버튼 안에 배지 추가. 어떤 속성의 수치를 나타낼 때 사용 */}
            </Button>
            <Badge color="danger" pill>
                pill
                {/** 테두리를 둥글게 적용 */}
            </Badge>
            <Badge href="http://www.naver.com" color="light">
                GoLink
                {/** 링크 연결 */}
            </Badge>
        </div>
    );
};

export default R035;
