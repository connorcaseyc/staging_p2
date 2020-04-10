import React from 'react';
import { Link } from 'react-router-dom';

export class UpdateUser extends React.Component {

    render() {
        return ( 
            <div>
                <div id="update_div" style={{color:'yellow', backgroundColor:'brown' , height: '100vh'}}>
                    <br/>
                    <Link to="/update-username"  style={{color:'yellow'}}>Update Username?</Link>
                    <br/>
                    <Link to="/update-password" style={{color:'yellow'}}>Update Password?</Link>
                    <br/>
                    <Link to="/">Landing</Link>
                </div>
            </div>
        )
    }

}