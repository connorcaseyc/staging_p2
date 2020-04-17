import { connect } from 'react-redux';
import { UpdateUsername } from './UpdateUsername';
import { IState } from '../../reducers';
// import { updateUser } from '../../util/sp2Api';

const mapStateToProps = (state: IState) => {
    return {
        user: state.userState.currentUser
    }
}

// const mapDispatchToProps = {
//     updateUser
// }

export default connect(mapStateToProps)(UpdateUsername)