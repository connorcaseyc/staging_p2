import React, { SyntheticEvent } from 'react';
import { Input, Form, Button } from 'reactstrap';

interface IRegisterState {
    username: string;
    password: string;
}

export class Register extends React.Component<any, IRegisterState> {
    constructor(props:any) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    updateUsername = (event:any) => {
        this.setState({
            ...this.state,
            username: event.target.value
        })
    }

    updatePassword = (event:any) => {
        this.setState({
            ...this.state,
            password: event.target.value
        })
    }

    submitNewUser = async(event:SyntheticEvent) => {
        event.preventDefault();
        // api call here
    }



    render() {
        return (
            <div>
                <div id="register_div">

                    <div id="register_form_div">
                        <Form onSubmit={this.submitNewUser}>
                            <Button>Submit?</Button>
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
                            <Input
                                required
                                type="text"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.updatePassword}/>
                            <Input
                                required
                                type="text"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.updateUsername}/>
                        </Form>
                    </div>

                </div>
            </div>
        )
    }


}