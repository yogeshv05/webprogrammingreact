import React from "react";
import ProfileImg from "./back.jpg";

class Profile extends React.Component{
    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <img src={ProfileImg} alt="Profile Image" height={100} width={50} />
            </div>
        );
    }
}

export default Profile;
