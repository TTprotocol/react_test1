import React, {Component} from 'react';

class R006 extends Component {
    static getDerivedStateFromProps(props, state) {
        //이 함수는 constructor() 함수 다음으로 실행된다.
        //컴포넌트가 새로운 props를 받게 됐을 때 state를 변경해 준다.
        //App.js에서 전달한 prop_value변수를 props.prop_value로 접근해 값을 가져온다.
        console.log('2. getDeriveStateFromProps Call :' + props.prop_value);
        return {};
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
        )
    }
}

export default R006;