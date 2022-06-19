import React, {Component} from 'react';

class R009 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var js_string1 = '자바 스크립트';
        var js_string2 = '입니다 \n 다음 줄입니다.';
        //줄바꿈 개행문자 사용
        console.log(js_string1 + ' 문자열' + js_string2 + '~');
        //문자열과 변수를 +로 합함.

        var es6_string1 = 'ES6';
        var es6_string2 = '입니다.';
        console.log(`${es6_string1} 문자열 ${es6_string2}!!
        ____다음 줄입니다.`);
        //백틱(`)으로 전체 문자열과 변수를 묶어서 사용.
        //개행문자 없이 코드상의 줄바꿈으로 줄을 바꿀 수 있다.

        var longstring = 'es6에 추가된 string 함수들입니다.';
        console.log('startWith : ' + longstring.startsWith("es6에 추가"));
        console.log('endWith : ' + longstring.endsWith('함수들입니다.'));
        console.log('includes : ' + longstring.includes('추가된 string'));
        //일치하는 문자열을 앞/뒤/상관X 찾는다.
        //일치하면 true, 아니면 false
    }

    render() {
        return(
            <h2>[THIS IS ES6 STRING]</h2>
        )
    }
}

export default R009;