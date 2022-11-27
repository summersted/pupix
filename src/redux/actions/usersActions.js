import { SET_USERS_DATA } from "../types"
import { getAllUsers } from "../../components/services"
import { endLoadingData, startLoadingData } from "./loadingActions";

export const getUsersData = () => async dispatch => {
    dispatch(startLoadingData());
    const data = await getAllUsers();
    await dispatch(setUsersData(data.users));
    await dispatch(endLoadingData());
}

export const setUsersData = (data) => ({
    type: SET_USERS_DATA,
    payload: data
})

