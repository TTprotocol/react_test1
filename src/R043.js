import React from "react";
import { Button, Fade } from "reactstrap";

const R043 = () => {
    const [fadecontroll, setFadeControll] = React.useState(true);

    const toggle = () => {
        setFadeControll(!fadecontroll);
    };

    return (
        <div>
            <Button
                color="success"
                onClick={() => {
                    toggle();
                }}
            >
                Fade In/Out
            </Button>
            <Fade in={fadecontroll} tag="h1">
                start to write text!
                <br />
                anything you want!
            </Fade>
        </div>
    );
};

export default R043;
