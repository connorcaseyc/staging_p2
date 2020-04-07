import React from 'react';
import { Link } from 'react-router-dom';

export class UpdateUser extends React.Component {

    render() {
        return ( 
            <div>
                <div id="update_div">
                    <Link to="/update-username">Update Username?</Link>
                    <Link to="/update-password">Update Password?</Link>
                    <Link to="/">Landing</Link>
                </div>
            </div>
        )
    }

}