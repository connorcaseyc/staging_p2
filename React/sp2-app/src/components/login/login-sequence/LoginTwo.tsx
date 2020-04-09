import React from 'react';
import { Link } from 'react-router-dom';

export class LoginTwo extends React.Component {
    render() {
        return (
            <div>
                <div id="login2_div"> 
                    <span>
                        <p>If you would like to</p>
                    </span>
                    <span>
                        <Link to="/login3" style={{color:"yellow"}}>login </Link>
                    </span>
                    <span>
                        <p>please simply login</p>
                    </span>


                    <span>
                        <p>If you would like to</p>
                        <Link to="/login1">login </Link>
                    </span>
                    <span>
                        <p>please simply login</p>
                    </span>



                    {/* <p>
                        If you would like to login please
                        <NavLink to="/login3">login</NavLink>
                    </p> */}
                </div>
            </div>
        )
    }

}