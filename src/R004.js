import React, {Component} from 'react';

class R004 extends Component {
    render() {
        //render()는 return되는 html 형식의 코드를 화면에 그려준다.
        //화면 내용이 변경되어야 할 시점에 자동으로 호출
        console.log('3. render Call');
        return (
            <h2>[THIS IS RENDER FUNCTION]</h2>
        )
    }
}

export default R004;