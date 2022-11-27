import { SET_MOVIES_DATA } from "../types"
import { getShows } from "../../components/services"
import { endLoadingData, startLoadingData } from "./loadingActions";

export const getMoviesData = () => async dispatch => {
    dispatch(startLoadingData());
    const data = await getShows(1);
    await dispatch(setMoviesData(data));
    await dispatch(endLoadingData());
}

export const setMoviesData = (data) => ({
    type: SET_MOVIES_DATA,
    payload: data
})

