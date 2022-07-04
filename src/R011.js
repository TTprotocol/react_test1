import React, {Component} from 'react';

class R011 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varArray1 = ['num1', 'num2'];
        var varArray2 = ['num3', 'num4'];

        //배열 2개를 합치는 방법
        //1. 배열 각각에 인덱스로 접근해 값을 가져온다.
        //var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
        //2. concat 함수를 이용해 각 배열의 각 인덱스에 차례로 접근해 새로운 배열에 넣는다.
        var sumVarArr = [].concat(varArray1, varArray2);
        console.log('1. sumVarArr : ' + sumVarArr);

        let sumLetArr = [...varArray1, ...varArray2];
        console.log('2. sumLetArr : ' + sumLetArr);

        //sumLetArr 배열의 값을 추출해 개별 변수에 넣는다.
        //sum1에 varArray1[0], sum2에 varArray1[1], 나머지는 remain 변수에 넣는다.
        const [sum1, sum2, ...remain] = sumLetArr;
        console.log('3. sum1 : ' + sum1 + ', sum2 : ' + sum2 + ', remain : ' + remain);

        var varObj1 = { key1 : 'val1', key2 : 'val2' };
        var varObj2 = { key2 : 'new2', key3 : 'val3' };

        //객체 2개를 합치기 위해서 Object.assign()함수를 사용했다.
        //첫 번째 인자 {}는 함수의 return값, 뒤의 인자에 객체들을 ','를 사용해 나열하여 합친다.
        var sumVarObj = Object.assign({}, varObj1, varObj2);
        //JSON.stringify() : javascript나 객체를 JSON 문자열로 변환
        console.log('4. sumVarObj : ' + JSON.stringify(sumVarObj));

        var sumLetObj = {...varObj1, ...varObj2};
        console.log('5. sumLetObj : ' + JSON.stringify(sumLetObj));

        var {key1, key3, ...others} = sumLetObj;
        console.log('6. key1 : ' + key1 + ', key3 : ' + key3 + ', others : ' + JSON.stringify(others));
    }

    render() {
        return(
            <h2>[THIS IS SpreadOperator]</h2>
        )
    }
}

export default R011;