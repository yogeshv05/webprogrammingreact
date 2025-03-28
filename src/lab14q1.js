import React from "react";
import back2 from './Images/back2.jpg'; 

class Q1 extends React.Component {
    render() {
        return (
            <>
                <div style={{ textAlign: 'center' }}>
                    <img src={back2} alt='Picture 1' />  
                    <br />
                    <img src={`${process.env.PUBLIC_URL}/Images/back.jpg`} alt="Picture 2" />  
                </div>
            </>
        );
    }
}

export default Q1;
