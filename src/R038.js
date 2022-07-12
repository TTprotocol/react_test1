import React from "react";
import { Button, ButtonGroup } from "reactstrap";
/**mui button import */
import MuiButton from "@mui/material/Button";
import MuiButtonGroup from "@mui/material/ButtonGroup";

const R038 = () => {
    const [number, setNumber] = React.useState(0);

    const move = (type) => {
        if (type === "left") setNumber(number + 1);
        else if (type === "right") setNumber(number - 1);
        else setNumber(0);
    };

    return (
        <div>
            <ButtonGroup>
                <Button
                    onClick={() => {
                        move("left");
                    }}
                >
                    Left
                </Button>
                <Button
                    onClick={() => {
                        move("middle");
                    }}
                >
                    Middel
                </Button>
                <Button
                    onClick={() => {
                        move("right");
                    }}
                >
                    Right
                </Button>
            </ButtonGroup>
            <br />
            {number}
            <br />
            <MuiButtonGroup>
                <MuiButton
                    onClick={() => {
                        move("left");
                    }}
                >
                    one
                </MuiButton>
                <MuiButton
                    onClick={() => {
                        move("middle");
                    }}
                >
                    two
                </MuiButton>
                <MuiButton
                    onClick={() => {
                        move("right");
                    }}
                >
                    three
                </MuiButton>
            </MuiButtonGroup>
        </div>
    );
};

//R039 : 버튼 사용
//R040 : Card 사용. => 이미지 가져오기

export default R038;
