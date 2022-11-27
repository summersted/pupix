import { SET_TESTS_DATA } from "../types"
import { getAllUsers } from "../../components/services"
import { endLoadingData, startLoadingData } from "./loadingActions";

export const getUsersData = () => async dispatch => {
    dispatch(startLoadingData());
    const data = await getAllUsers();
    await dispatch(setUsersData(data));
    await dispatch(endLoadingData());
}

export const setUsersData = (data) => ({
    type: SET_TESTS_DATA,
    payload: data
})

