import { connect } from 'react-redux';
import { UpdatePassword } from './UpdatePassword';
import { IState } from '../../reducers';

const mapStateToProps = (state: IState) => {
    return {
        user: state.userState.currentUser
    }
}

export default connect(mapStateToProps)(UpdatePassword)