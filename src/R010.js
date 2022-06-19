import React, {Component} from 'react';

class R010 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varname = 'react';
        console.log('vername1 : ' + varname);
        var varname = '200';    //varname is already difined no-redeclare
        //이미 선언한 var 변수 varname을 다시 선언했을 때 다음 경고가 출력된다.
        //var 변수는 재선언, 재할당을 허용하기 때문에 페이지가 정상 출력된다.
        console.log('vername2 : ' + varname);

        let letname = 'react';
        console.log('letname1 : ' + letname);
        //let letname = '200';
        //Parsing error: Identifier 'letname' has already been declared
        letname = 'react200';
        console.log('letname2 : ' + letname);

        const constname = 'react';
        console.log('constname : ' + constname);
        //const constname = '200';
        //Parsing error: Identifier 'constname' has already been declared
        //constname = 'react200';
        //Uncaught TypeError: Assignment to constanc variable
    }

    render() {
        return(
            <h2>[THIS IS VARIABLE]</h2>
        )
    }
}

export default R010;