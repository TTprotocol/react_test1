import React, {} from 'react';
// import datatype from 'prop-types';

const R020 = (props) => {
    let {
        Json
    } = props;

    return (
        <div style={{padding: "0px"}}>
            {JSON.stringify(Json)}
        </div>
    )
}

// PropsObject.propTypes = {
//     Json: datatype.shape({
//         react: datatype.string,
//         two: datatype.number
//     })
// }

export default R020;