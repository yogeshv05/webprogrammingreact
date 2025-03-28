import React from "react";

class Q4 extends React.Component{
    render(){
        var a = 2;
        var b = 5;
        return(
            <p style={{fontSize:'20px', textAlign:"center"}}>
                The sum of squares of the two variables is {a**2 + b**2}
            </p>
        );
    }
}

export default Q4;
