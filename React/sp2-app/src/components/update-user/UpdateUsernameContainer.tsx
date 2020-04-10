import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { UpdateUsername } from './UpdateUsername';

const mapStateToProps = (state: IState) => {
    return {
        user: state.userState.currentUser
    }
}

export default connect(mapStateToProps)(UpdateUsername)