import React, {Component} from 'react';

class R008 extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call : ' + props.prop_value);
        return {tmp_state:props.prop_value};
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    componentDidMount() {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state);
        this.setState({tmp_state2 : true});
        //tmp_state2라는 변수에 true라는 boolean값을 저장.
        //setState() 함수는 변수의 선언과 초기화를 동시에 진헹한다.
        //여기에서 state의 변경이 발생했기 때문에 '변경'단계의 생명주기 함수 shouldComponentUpdate()가 실행된다.
    }
    shouldComponentUpdate(props, state) {
        //shouldComponentUpdate()는 boolean 유형의 데이터를 반환.
        //return 값이 true일 경우 render()함수를 한 번 더 호출함.
        console.log('6. shouldComponentUpdate Call / tmp_state2 : ' + state.tmp_state2);
        console.log('test state : ' + state.tmp_state);
        return state.tmp_state2;
    }
    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS COMPONENTDIDMOUNT FUNCTION]</h2>
        )
    }
}

export default R008