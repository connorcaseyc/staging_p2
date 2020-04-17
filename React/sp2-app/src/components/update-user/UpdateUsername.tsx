import React, { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { updateUser } from '../../util/sp2Api';
import { history } from '../../util/history';
import { Form, Input, Button } from 'reactstrap';

interface IUpdateUsernameProps {
    user: any
}

interface IUpdateUsernameState {
    username: string;
}

export class UpdateUsername extends React.Component<IUpdateUsernameProps, IUpdateUsernameState> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: ""
        }
    }

    updateUsername = (event: any) => {
        this.setState({
            ...this.state,
            username: event.target.value
        })
    }

    updateUserUN = async (event: SyntheticEvent) => {
        event.preventDefault();
        updateUser({
            user_id: this.props.user.user_id,
            email: this.props.user.email,
            username: this.state.username,
            password: this.props.user.password,
            firstname: this.props.user.firstname,
            lastname: this.props.user.lastname
            // item: this.props.user.item 
        })
        // history.push('/loginfinal');
        // this.moveForward();
    } 

    moveForward = () => {
        history.push('/loginfinal');
        window.location.reload(false);
    } 

    render() {
        return (
            <div>
                <div id="updateun_div">
                    <br/>
                    <h1>Update Username</h1>
                    <Form onSubmit={this.updateUserUN}>
                        <Input 
                            required
                            type="text"
                            placeholder="New Username"
                            value={this.state.username}
                            onChange={this.updateUsername} />
                        <Button>Submit</Button>
                    </Form>

                    <Link to="/">Landing</Link>
                </div>
            </div>
        )
    }

}