import React, { useEffect } from 'react';

const Screens = () => {
    const [val,setVal] = React.useState(null);

    useEffect(() => {
        console.log("useEffect : " + val);
        setVal("JJ");
    }, [val])

    const a = () => {
        console.log("func a1 : " + val);
        setVal("tt");
        console.log("func a2 : " + val);
    }

    return (
        <div>
            <button 
                style={{width:150, height:150,}}
                onClick={()=>{
                    console.log('b');
                    a();
                }}
            />
        </div>
    )
}
// class Screens extends React {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     render() {
//         return (
//             <div>
//                 <text>
//                     test1
//                 </text>
//             </div>
//         )
//     }
// }

export default Screens;