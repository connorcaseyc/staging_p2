import { axiosConfig } from './axiosConfig';
import { IUser } from '../model/IUser';
import { IItem } from '../model/IItem';

export const apiLogin = async (username: string, password: string) => {

    try {
        const response = await axiosConfig.post('/user/login', {
            username,
            password
        })
        if (response.status === 200) {
            const body = await response.data
            console.log(body)
            return {
                body,
                loginMessage: 'Successful Login'
            }
        } else if (response.status === 401) {
            return {
                loginMessage: "Incorrect Username or Password",
                body: null
            }
        } else {
            return {
                loginMessage: "Something Went Wrong",
                body: null
            }
        }
    } catch (e) {
        console.log(e);
        return {
            loginMessage: "Something Went Wrong",

        }
    }
}

export const publishUser = (body: IUser) => {
    return axiosConfig.post('/user/new', body)
}

export const updateUser = (body: IUser) => {
    return axiosConfig.put('/user/update', body)
}

export const getItemId = (body: IItem) => {
    return axiosConfig.post('/item/id', body)
}