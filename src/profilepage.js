import React from "react";
import Image from "./profileimage.js";
import Info from "./userinfo.js";
import Posts from "./userposts.js";

class Profile extends React.Component{
    render(){
        return(
            <div>
                <h1 align='center'> Profile </h1>
                <Image />
                <Info />
                <Posts />
            </div>
        );
    }
}

export default Profile;
