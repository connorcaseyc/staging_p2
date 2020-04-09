import React, { SyntheticEvent } from 'react';
import { Input, Form, Button } from 'reactstrap';
import { publishUser } from '../util/sp2Api';
import { history } from '../util/history';

interface IRegisterState {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
}

export class Register extends React.Component<any, IRegisterState> {
    constructor(props:any) {
        super(props);
        this.state = {
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
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

    updateFirstName = (event:any) => {
        this.setState({
            ...this.state,
            firstname: event.target.value
        })
    }

    updateLastName = (event:any) => {
        this.setState({
            ...this.state,
            lastname: event.target.value
        })
    }

    updateEmail = (event:any) => {
        this.setState({
            ...this.state,
            email: event.target.value
        })
    }

    submitNewUser = async(event:SyntheticEvent) => {
        event.preventDefault();
        publishUser({
            id: 0,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname
        });
        history.push('/');

    }



    render() {
        return (
            <div style={{backgroundColor:'brown', width:'100vw'}}>
                <div id="register_div">

                    <div id="register_form_div">
                        <Form onSubmit={this.submitNewUser}>
                            <Button outline color="danger" size="sm" type="submit">Submit?</Button>
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
                                onChange={this.updatePassword}
                                style={{color:'yellow', backgroundColor:'brown'}}/>
                            <Input
                                required
                                type="text"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.updateUsername}
                                style={{color:'yellow', backgroundColor:'brown'}}/>
                            <Input
                                required
                                type="text"
                                placeholder="First Name"
                                value={this.state.firstname}
                                onChange={this.updateFirstName}
                                style={{color:'yellow', backgroundColor:'brown'}}/>
                            <Input
                                required
                                type="text"
                                placeholder="Last Name"
                                value={this.state.lastname}
                                onChange={this.updateLastName}
                                style={{color:'yellow', backgroundColor:'brown'}}/>
                            <Input
                                required
                                type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.updateEmail}
                                style={{color:'yellow', backgroundColor:'brown'}}/>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }


}