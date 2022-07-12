import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const R037 = () => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>버튼 dropdown</DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>헤더</DropdownItem>
                {/**하위 메뉴 리스트에 대한 대표 정보 기입. 선택 불가 */}
                <DropdownItem disabled>비활성화 버튼</DropdownItem>
                {/**disabled : 비활성화 속성 */}
                <a href="https://www.naver.com">
                    <DropdownItem>웹 사이트로 이동</DropdownItem>
                </a>
                <DropdownItem onClick={(e) => alert("Alert")}>alert 버튼</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );
};

export default R037;
