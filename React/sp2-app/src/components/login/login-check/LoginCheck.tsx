import React from 'react';
import { Link } from 'react-router-dom';
// import { getItemId } from '../../../util/sp2Api';

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
                    <br/>
                    <h4>Profile Info- </h4> 
                        <p>First Name: {this.props.user.firstname}</p>
                        <p>Last Name: {this.props.user.lastname}</p>
                        <p>Username: {this.props.user.username}</p>
                        <p>Email: {this.props.user.email}</p>
                        <p>Password: {this.props.user.password}</p>
                        <p>Date of Birth: 01/02/03</p>
                        <p>Social Security Number: 987-65-4321</p>
                        {/* <p>Item ID Numbers: {this.props.user.item}</p> */}
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
                    {/* <Redirect to="/loginfinal"/> */}
                    <Link to="/loginfinal">Login?</Link>
                </div>
            )
        }
    }
}
