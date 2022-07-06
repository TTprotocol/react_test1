import React, {} from 'react';

const R019 = (props) => {
    let {
        BooleanTF
    } = props
    return (
        <div style={{padding: "0px"}}>
            {BooleanTF ? '2. ' : '1. '}
            {BooleanTF.toString()}
        </div>
    )
}

export default R019;