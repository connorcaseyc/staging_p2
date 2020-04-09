import { apiLogin } from '../util/sp2Api';
import { history } from '../util/history';

export const loginTypes = {
  SUCCESSFUL_LOGIN: 'LOGIN_SUCCESSFUL_LOGIN',
  UNSUCCESSFUL_LOGIN: 'LOGIN_UNSUCCESSFUL_LOGIN',
};

export const updateCurrentUser = (username: string, password: string) => async (
  dispatch: any
) => {
  let response: any = await apiLogin(username, password);
  console.log(response);
  if (response.body) {
    dispatch({
      type: loginTypes.SUCCESSFUL_LOGIN,
      payload: {
        currentUser: response.body,
      },
    });
    history.push('/finally');
  } else {
    dispatch({
      type: loginTypes.UNSUCCESSFUL_LOGIN,
      payload: {
        loginMessage: response.loginMessage,
      },
    });
  }
};
