import { connect } from "react-redux";
import { IState } from "../../../reducers";
import { LoginCheck } from "./LoginCheck";

const mapStateToProps = (state: IState) => {
    return {
        user: state.userState.currentUser
    }
}

export default connect(mapStateToProps)(LoginCheck)