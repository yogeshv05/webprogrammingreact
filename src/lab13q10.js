import React from "react";

class Q10 extends React.Component{
    render(){
        return(
            <>
                <h2 align='center'>Generate a random number</h2>
                <div style={{textAlign: 'center'}}>
                    <button onClick={() => {
                        var num = Math.floor(Math.random() * 100) + 1;
                        document.getElementById("num").value = num;
                    }}>Generate</button>
                    <input type="text" id="num" placeholder="" disabled />
                </div>
            </>
        );
    }
}

export default Q10;
