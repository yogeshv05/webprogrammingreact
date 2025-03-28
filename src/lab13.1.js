import React from "react";

class Q1 extends React.Component{
    render(){
        return(
            <h1 align='center'>Hello, React!</h1>
        );
    }
}
class Q2 extends React.Component{
    render(){
        return(
            React.createElement('h1', {align:"center"}, `Hello, React!`)
        );
    }
}

class Q3 extends React.Component{
    render(){
        var a = "apple 23BCE1624";
        return(
            <h2 align='center'>The variable a is '{a}'</h2>
        );
    }
}

export{
    Q1,
    Q2,
    Q3
}
