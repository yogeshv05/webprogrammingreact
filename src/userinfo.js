import React from "react";

class Info extends React.Component {
    render() {
        return (
            <div>
                <table border={2} cellSpacing={2} cellPadding={5} align='center'>
                    <tr>
                        <th> Name </th>
                        <td>Yogesh V</td>
                    </tr>
                    <tr>
                        <th> Age </th>
                        <td> 19 </td>
                    </tr>
                    <tr>
                        <th> College </th>
                        <td> VIT Chennai </td>
                    </tr>
                    <tr>
                        <th> Email ID </th>
                        <td> yogesh.v2023@vitstudent.ac.in </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Info;
