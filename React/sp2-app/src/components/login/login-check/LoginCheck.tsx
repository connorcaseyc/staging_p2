import React from 'react';
import { Link, Redirect } from 'react-router-dom';

interface ILoginCheckProps {
    user: any
}

export class LoginCheck extends React.Component<ILoginCheckProps, any> {
    
    async componentDidMount() {
        if (this.props.user) {
            console.log("look here")
        }
    }

    render() {
        if(this.props.user) {
            return (
                <div id="logincheck_div">
                    <h2>Well, someone has finally decided to login</h2>
                    <h4>Profile- </h4> 
                        <p>Username: {this.props.user.username}</p>
                        <p>Email: {this.props.user.email}</p>
                        <p>Password: {this.props.user.password}</p>
                    <br/>
                    <Link to="/update-username">Update Username?</Link>
                    <br/>
                    <Link to="/update-password">Update Password?</Link>
                    <br/>
                    <Link to="/">Landing</Link>  
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/> 
                </div>
            )
        } else {
            return (
                <div id="logincheck_div">
                    <p>Login didn't go through</p>
                    <Redirect to="/loginfinal"/>
                </div>
            )
        }
    }
}
