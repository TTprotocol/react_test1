import React, {Component} from 'react';

const R014 = () => {
    var Arr = [3, 2, 8, 8];
    var newArr = [];

    for (var i = 0; i < Arr.length; i++) {
        newArr.push(Arr[i]);
    }
    console.log('1. newArr : [' + newArr + ']');

    var eachArr = [3, 3, 9, 8];
    var new_eachArr = [];

    eachArr.forEach((result) => {
        new_eachArr.push(result);
    })
    console.log('2. eachArr : [' + new_eachArr + ']');

    return(
        <h2>[THIS IS fOREACH]</h2>
    )
}

export default R014;