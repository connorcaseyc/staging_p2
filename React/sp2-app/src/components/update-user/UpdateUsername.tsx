import React, { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { updateUser } from '../../util/sp2Api';
import { history } from '../../util/history';
import { Form, Input, Button } from 'reactstrap';

interface IUpdateUsernameProps {
  user: any;
}

interface IUpdateUsernameState {
  username: string;
  password: string;
}

export class UpdateUsername extends React.Component<
  IUpdateUsernameProps,
  IUpdateUsernameState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  updateUsername = (event: any) => {
    this.setState({
      ...this.state,
      username: event.target.value,
    });
  };

  updateUserUN = async (event: SyntheticEvent) => {
    event.preventDefault();
    updateUser({
      id: this.props.user.id,
      email: this.props.user.email,
      username: this.props.user.username,
      password: this.state.password,
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
    });
    window.location.reload(false);
    history.push('/update');
  };

  render() {
    return (
      <div>
        <div id='updatepw_div'>
          <br />
          <h1>Update Username</h1>
          <Form onSubmit={this.updateUserUN}>
            <Input
              required
              type='text'
              placeholder='New Username'
              value={this.state.username}
              onChange={this.updateUsername}
            />
            <Button>Submit</Button>
          </Form>

          <Link to='/'>Landing</Link>
        </div>
      </div>
    );
  }
}
