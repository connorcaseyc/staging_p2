import React, { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { updateUser } from '../../util/sp2Api';
import { history } from '../../util/history';
import { Form, Input, Button } from 'reactstrap';

interface IUpdatePasswordProps {
    user: any;
}

interface IUpdatePasswordState {
    password: string;
}

export class UpdatePassword extends React.Component<IUpdatePasswordProps, IUpdatePasswordState> {
    constructor(props: any) {
        super(props);
        this.state = {
            password: ""
        }
    }

    updatePassword = (event: any) => {
        this.setState({
            ...this.state,
            password: event.target.value
        })
    }

    updateUserPW = async (event: SyntheticEvent) => {
        event.preventDefault();
        console.log("before "+this.props.user)
        updateUser({
            user_id: this.props.user.user_id,
            email: this.props.user.email,
            username: this.props.user.username,
            password: this.state.password,
            firstname: this.props.user.firstname,
            lastname: this.props.user.lastname
            // item: this.props.user.item
        })
        console.log("after "+this.props.user)
        // history.push('/loginfinal');
        // this.moveForward();
    } 

    moveForward = () => {
        window.location.reload(false);
        history.push('/loginfinal');
    } 

    render() {
        return (
            <div>
                <div id="updatepw_div">
                    <br/>
                    <h1>Update Password</h1>
                    <Form onSubmit={this.updateUserPW}>
                        <Input 
                            required
                            type="text"
                            placeholder="New Password"
                            value={this.state.password}
                            onChange={this.updatePassword} />
                        <Button>Submit</Button>

                    </Form>

                    <Link to="/">Landing</Link>
                </div>
            </div>
        )
    }

}