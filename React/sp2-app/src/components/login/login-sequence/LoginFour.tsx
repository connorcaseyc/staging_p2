import React from 'react';
import { history } from '../../../util/history';
import { Button } from 'reactstrap';

export class LoginFour extends React.Component {

    nextLoginPage = (event:any) => {
        history.push('/loginfinal');
    }

    render() {
        return (
            <div>
                <div id="login4_div">
                    <p>You are logged out, if you would like to login please click the button labeled "Login?"</p>
                    <Button outline color="primary" size="sm">Login?</Button> 
                    <Button outline color="secondary" size="sm" >Login?</Button> 
                    <Button outline color="success" size="lg">Login?</Button> 
                    <Button outline color="info" size="sm">Login?</Button> 
                    <Button outline color="warning" size="sm">Login?</Button> 
                    <Button outline color="danger" size="sm">Login?</Button> 
                    <Button outline color="link" size="sm">Login?</Button> 
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
                    <Button outline color="danger" size="sm" onClick={this.nextLoginPage}>Login?</Button> 
                </div>
            </div>
        )
    }

}