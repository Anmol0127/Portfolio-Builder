import * as api from '../api'
import { start, end, error, getContactUsersReducer, formSubmitReducer, } from '../reducers/contact'
 
export const getContactUsers = () => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.getContactUsers()
        dispatch(getContactUsersReducer(data.result))
        dispatch(end())
    } catch (err) {
        dispatch(error(err.message))
    }
}
export const formSubmit = (contactData) => async (dispatch) => {
    try {
        dispatch(start());
        const { data } = await api.formSubmit(contactData);  // Ensure contactData is passed here
        dispatch(formSubmitReducer(data.result));
        dispatch(end());
    } catch (err) {
        dispatch(error(err.message));
    }
}
