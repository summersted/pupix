import { SET_MOVIES_DATA } from "../types";

const initialState = [];

// payload
export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES_DATA:
            return [...state, ...action.payload]
        default:
            return state;
    }
}
