import React from "react";

class Q7 extends React.Component{
    isPrime(x){
        if(x<2) return false;
        for(var i=2; i<=Math.sqrt(x); i++){
            if(x%i===0){
                return false;
            }
        }
        return true;
    }
    render(){
        var a = prompt("Enter number:");
        a = parseInt(a);
        return(
            <p style={{fontSize:'20px'}}>
                {a} is {this.isPrime(a)?"prime":"not prime"}
            </p>
        );
    }
}

export default Q7;
