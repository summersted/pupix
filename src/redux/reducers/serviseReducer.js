import { END_LOADING, START_LOADING } from "../types";

const initialAppState = {
    isLoading: false
}

export const serviceReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { isLoading: true}
        case END_LOADING:
            return { isLoading: false}
        default:
            return state;
    }
}
