import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
    {
        src: "https://www.naver.com",
        altText: "이미지 대체문구",
        caption: "슬라이드1 설명",
        header: "슬라이드1 제목",
    },
    {
        src: "https://www.naver.com",
        altText: "이미지 대체문구",
        caption: "슬라이드2 설명",
        header: "슬라이드2 제목",
    },
    {
        src: "https://www.naver.com",
        altText: "이미지 대체문구",
        caption: "슬라이드3 설명",
        header: "슬라이드3 제목",
    },
];

const R041 = () => {
    return <UncontrolledCarousel items={items} />;
    /**
     * UncontrolledCarousel 슬라이드에 사용할 데이터를 배열의 형태로 만든다.
     * UncontrolledCarousel에 배열 데이터를 넣으면 reactstrap이 적절한 htlm 태그와 css, 이벤트를 적용한다.
     * 한 슬라이스의 시간은 기본값 5초가 적용됨.
     * 웹 브라우저 가로가 특정 값보다 작으면 제목과 설명이 보이지 않는다.
     */
};

export default R041;
