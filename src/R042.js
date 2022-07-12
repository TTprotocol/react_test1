import React from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

const R042 = () => {
    return (
        <div>
            <Button color="warning" id="toggle">
                펼치기/접기
            </Button>
            <UncontrolledCollapse toggler="toggle">
                <Card>
                    <CardBody>React 100</CardBody>
                    <CardBody>test react 200</CardBody>
                    <CardBody>re test react 300</CardBody>
                </Card>
                <Card>
                    <CardBody>React 100</CardBody>
                    <CardBody>test react 200</CardBody>
                    <CardBody>re test react 300</CardBody>
                </Card>
            </UncontrolledCollapse>
        </div>
    );
};

export default R042;
