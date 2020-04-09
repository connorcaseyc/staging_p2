import React from 'react';
import { history } from '../../../util/history';
import { Button } from 'reactstrap';

export class LoginThree extends React.Component {
    
    nextLoginPage = (event:any) => {
        history.push('/login4');
    }

    render() {
        return (
            <div>
                <div id="login3_div">
                    <p>OH SO YOU WANT TO</p>
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
                    <Button outline color="danger" size="sm" onClick={this.nextLoginPage} style={{float:"right"}}>Login?</Button> 
                </div>
            </div>
        )
    }

}