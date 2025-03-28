import React from "react";

class Q6 extends React.Component{
    render(){
        var day = new Date().getDay();
        var name = "";
        switch(day){
            case 0:
                name = "Sunday";
                break;
            case 1:
                name = "Monday";
                break;
            case 2:
                name = "Tuesday";
                break;
            case 3:
                name = "Wednesday";
                break;
            case 4:
                name = "Thursday";
                break;
            case 5:
                name = "Friday";
                break;
            case 6:
                name = "Saturday";
                break;
            default:
                name = "Invalid Day";
        }
        return(
            <p style={{fontSize:'20px'}}>
                Current day of the week is {name}
            </p>
        );
    }
}

export default Q6;
