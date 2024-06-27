import { Component } from "react";
import './login.css';

class login extends Component {
    render(){
        return (
            <div className="container">
                <form className="loginForm">
                    <h3>Login</h3>
                    <label for="username">Username</label>
                    <input type="text" name="usename" id="username"/>
                    <br/>
                    <label for="password">Password</label>
                    <input type="password" namme="password" id="password"/>
                    <br/>
                    <button >Login</button>
                </form>
            </div>
        )
    }
}

export default login;