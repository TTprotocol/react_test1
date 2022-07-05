import React, {Component} from 'react';

class R012 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var ExamCountFunc = (function() {
            //생성자 함수 실행. 전달받은 num을 객체변수 number에 저장
            function ExamCount(num) {
                this.number = num;
            }
            //생성자 함수명.prototype.함수명 형태로 선언시, 객체 외부에서 함수를 실행해 객체 내부에 선언된 함수로 사용할 수 있다.
            ExamCount.prototype.showNum = function() {
                console.log('1. react ' + this.number);
            };
            return ExamCount;
        }());

        //ExamCountFunc()함수(객체)를 실행한 후, 이를 cnt에 저장한다.
        var cnt = new ExamCountFunc('200');
        //객체에 선언된 showNum() 실행.
        cnt.showNum();

        //객체를 class로 선언
        class ExamCountClass {
            //constructor 생성자 함수 실행.
            constructor(num2) {
                this.number2 = num2;
            }
            showNum() {
                console.log(`2. react ${this.number2}`)
            }
        }

        var cnt2 = new ExamCountClass('2hundred');
        cnt2.showNum();
    }

    render() {
        return (
            <h2>[THIS IS CLASS]</h2>
        )
    }
}

export default R012;