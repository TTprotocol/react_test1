import React, {} from 'react';
import datatype from 'prop-types';

const R018 = (props) => {
    let {String, Number, Boolean, Array, Json, Function} = props
    return (
        <div style = {{padding: "0px"}}>
            <p>StringProps: {String}</p>
            <p>NumberProps: {Number}</p>
            <p>BooleanProps: {Boolean.toString()}</p>
            <p>ArrayProps: {Array.toString()}</p>
            <p>Object jsonProps: {JSON.stringify(Json)}</p>
            <p>FunctionProps: {Function}</p>
        </div>
    )
}

Propsdatatype.propTypes = {
    String: datatype.number,
}

export default R018;