import React from "react";
import { Alert, UncontrolledAlert } from "reactstrap";

const R034 = () => {
    return (
        <div>
            <Alert color="light">simple Alert [color:light]</Alert>
            {/* 기본 알림 영역 */}
            <UncontrolledAlert color="warning">Uncontrolled Alert [color:warning]</UncontrolledAlert>
            {/* 삭제 가능 알림 영역 */}
        </div>
    );
};

export default R034;
