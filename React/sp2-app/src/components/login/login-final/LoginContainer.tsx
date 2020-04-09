import { connect } from "react-redux";
import { IState } from "../../../reducers";
import { LoginFinal } from "./LoginFinal";
import { updateCurrentUser } from '../../../action-mappers/login-actions';


const mapStateToProps = (state:IState) => {
    return {
        loginMessage:state.userState.loginMessage
    }
}


const mapDispatchToProps = {
    updateCurrentUser
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginFinal)