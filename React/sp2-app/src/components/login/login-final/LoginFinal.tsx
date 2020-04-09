import React, { SyntheticEvent } from 'react';
import { Form, Col, Input, Button } from 'reactstrap';
import { history } from '../../../util/history';

interface ILoginState {
    username: string,
    password: string
}

interface ILoginProps {
    updateCurrentUser: (u:string, p:string) => void
    loginMessage: string
}

export class LoginFinal extends React.Component<ILoginProps, ILoginState> {
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    updateUsername = (event: any) => {
        this.setState({
            ...this.state,
            username: event.target.value
        })

    }

    updatePassword = (event: any) => {
        this.setState({
            ...this.state,
            password: event.target.value
        })
    }

    submitLogin = async (event: SyntheticEvent) => {
        event.preventDefault()
        this.props.updateCurrentUser(this.state.username,this.state.password)
        history.push('/update')
    }

    render() {
        return (
            <div>
                <div id="loginfinal_div">
                    <h1>Please just login below</h1>
                    <Form onSubmit={this.submitLogin}>
                        <Col sm={10}>
                            <Input required
                                type="text"
                                placeholder="Username?"
                                value={this.state.username}
                                onChange={this.updateUsername} />
                        </Col>
                        <Col sm={10}>
                            <Input required
                                type="text"
                                placeholder="Password?"
                                value={this.state.password}
                                onChange={this.updatePassword} />
                        </Col>
                        <Button outline color="danger" size="sm">Login?</Button> 
                    </Form>
                </div>
            </div>
        )
    }    

}