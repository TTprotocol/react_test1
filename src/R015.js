import React, {} from 'react';

const R015 = () => {
    var Arr = [3, 2, 8, 8];
    let mapArr = Arr.map(x => x);
    console.log('1. mapArr : [' + mapArr + ']');

    let mapMulArr = mapArr.map(x => x + 2);
    console.log('2. mapMulArr : [' + mapMulArr + ']');

    var objArr = [{key : 'react', value : '200'}, {key : '리액트', value : 'twoHundred'}];
    let mapObjArr = objArr.map((obj, index) => {
        console.log((index + 3) + '. obj : ' + JSON.stringify(obj))
        var Obj = {};
        Obj[obj.key] = obj.value;
        return Obj;
    });
    console.log('5. mapObjArr : ' + JSON.stringify(mapObjArr));

    return (
        <h2>[THIS IS MAP]</h2>
    )
}

export default R015;