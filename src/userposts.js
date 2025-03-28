import React from "react";

class Posts extends React.Component{
    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <h1>Posts</h1>
                <table border={2} cellSpacing={2} cellPadding={5} align="center">
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Web Programming Project</td>
                            <td><a href="https://github.com/Pixel-Synth/Quiz-Master" target="_blank" rel="noopener noreferrer">GitHub Link</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Posts;
