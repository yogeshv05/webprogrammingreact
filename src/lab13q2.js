import React from "react";

class Q2 extends React.Component{
    render(){
        var array = ["apple", "banana", "grapes"];
        return(
            <div>
                <h1> List of fruits </h1>
                <ul>
                    {array.map((fruit, index)=>(
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Q2;
