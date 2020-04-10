import { connect } from 'react-redux';
import { UpdateUsername } from './UpdateUsername';
import { IState } from '../../reducers';

const mapStateToProps = (state: IState) => {
  return {
    user: state.userState.currentUser,
  };
};

export default connect(mapStateToProps)(UpdateUsername);
