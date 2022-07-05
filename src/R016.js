import React, {} from 'react';
import $ from 'jquery';

const R016 = () => {

    const input_alert = (e) => { // eslint-disable-line no-unused-vars
        //input 상자의 id인 inputId를 통해 내용을 가져온다.
        var input_val = $("#inputId").val();
        alert(input_val);
    }

    return(
        <div>
            <h2>[THIS IS JQUERY]</h2>
            <input id = "inputId" name = "inputName"/>
            <button id = "buttonId" onClick = {e => input_alert(e)}>
                Jquery Button
            </button>
        </div>
    )
}

export default R016;