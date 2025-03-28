import React from "react";
import back from './back.jpg';  
import back2 from './Images/back2.jpg';

class Q1 extends React.Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <img 
                    src={back}  
                    alt='Picture 1 (back.jpg)' 
                    style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} 
                />  
                <br />
                <img 
                    src={back2} 
                    alt='Picture 2 (back2.jpg)' 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                />  
            </div>
        );
    }
}

export default Q1;