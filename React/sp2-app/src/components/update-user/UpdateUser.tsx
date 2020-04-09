import React from 'react';
import { Link } from 'react-router-dom';

export class UpdateUser extends React.Component {

    render() {
        return ( 
            <div>
                <div id="update_div">
                    <br/>
                    <Link to="/update-username">Update Username?</Link>
                    <br/>
                    <Link to="/update-password">Update Password?</Link>
                    <br/>
                    <Link to="/">Landing</Link>
                </div>
            </div>
        )
    }

}