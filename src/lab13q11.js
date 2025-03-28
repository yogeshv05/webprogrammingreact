import React from "react";

class Q111 extends React.Component{
    render(){
        return(
            <>
                <h2 align='center'>Check for leap year</h2>
                <input type="text" id="year" />
                    <button onClick={() => {
                        var year = document.getElementById("year").value;
                        if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
                            document.getElementById("ryear").innerHTML = year + " is leap year";
                        }else{
                            document.getElementById("ryear").innerHTML = year + " is not leap year";
                        }
                    }}>Check</button>
                    <p id='ryear'></p>
            </>
        );
    }
}

export default Q111;
