import React from "react";

class Q2 extends React.Component {
    render() {
        const textStyle = { fontFamily: "Times New Roman, Times, serif" };

        return (
            <div style={textStyle}>
                <h1 style={{ textAlign: "center", ...textStyle }}>Novell Services Login</h1>
                <form>
                    <table border={0} align="center" cellPadding={5} style={textStyle}>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: "left", ...textStyle }}>
                                    <label htmlFor="username">Username: </label>
                                </td>
                                <td>
                                    <input type="text" id="username" name="username" style={textStyle} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left", ...textStyle }}>
                                    <label htmlFor="password">Password: </label>
                                </td>
                                <td>
                                    <input type="password" id="password" name="password" style={textStyle} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left", ...textStyle }}>
                                    <label htmlFor="City">City of<br />Employment: </label>
                                </td>
                                <td>
                                    <input type="text" id="City" name="City" style={textStyle} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left", ...textStyle }}>
                                    <label htmlFor="webserver">Web server: </label>
                                </td>
                                <td>
                                    <select id="webserver" name="webserver" style={textStyle}>
                                        <option value="none">-- Choose a server --</option>
                                        <option value="Server1">Server1</option>
                                        <option value="Server2">Server2</option>
                                        <option value="Server3">Server3</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left", verticalAlign: "top", ...textStyle }}>
                                    <label htmlFor="role">Please specify<br />your role: </label>
                                </td>
                                <td>
                                    <div style={{ textAlign: "left", ...textStyle }}>
                                        <input type="radio" name="role" value="Admin" /> Admin <br />
                                        <input type="radio" name="role" value="Engineer" /> Engineer <br />
                                        <input type="radio" name="role" value="Manager" /> Manager <br />
                                        <input type="radio" name="role" value="Guest" /> Guest
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left", verticalAlign: "top", ...textStyle }}>
                                    <label htmlFor="services">Single Sign-on<br />to the following: </label>
                                </td>
                                <td>
                                    <div style={{ textAlign: "left", ...textStyle }}>
                                        <input type="checkbox" name="services" value="Mail" /> Mail <br />
                                        <input type="checkbox" name="services" value="Payroll" /> Payroll <br />
                                        <input type="checkbox" name="services" value="Self-service" /> Self-service
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} align="center">
                                    <input type="submit" value="Login" style={textStyle} /> &nbsp;
                                    <input type="reset" defaultValue="Reset" style={textStyle} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default Q2;
