import React from 'react';
import { Button } from 'reactstrap';

export class LoginOne extends React.Component {
    render() {
        return (
            <div>
                <div id="login1_div">
                    <Button outline color="danger" size="sm">Login?</Button> 
                    <p style={{float:"right"}}>wait... are you sure?</p>
                </div>
            </div>
        )
    }

}