import React from 'react';
import { Button } from 'reactstrap';
import { history } from '../util/history';



export class Landing extends React.Component {

    nextLoginPage = (event:any) => {
        history.push('/login1');
    }

    openRegisterPage = (event:any) => {
        history.push('/register');
    }

    render() {
        return (
            <div>
                <div id="landing_div">
                    <h1 style={{height:"500px", textAlign:"right"}}>Welcome!!!!!!!!!!!!!!!!!!</h1>
                    <br/>
                    <Button outline color="danger" size="sm" onClick={this.nextLoginPage}>Login?</Button>
                    <br/>
                    <p style={{height:"500px", textAlign:"right"}}>Thanks for coming to our wonderful site</p>
                    <Button outline color="danger" size="sm" onClick={this.openRegisterPage}>Register</Button>           
                </div>
            </div>
        )
    }
}