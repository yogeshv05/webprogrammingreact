import React from "react";

class Q5 extends React.Component{
    render(){
        let isMorning = true;
        let message;
        if (isMorning==true){
            message = "Good Morning";
        }
        else{
            message = "Good evening";
        }
        return(
            <p style={{fontSize:'25px'}}>{message}</p>
        );
    }
}

export default Q5;
