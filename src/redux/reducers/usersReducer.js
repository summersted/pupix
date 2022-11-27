import { SET_USERS_DATA } from "../types";

const initialState = [];

// payload
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return [...state, ...action.payload]
        default:
            return state;
    }
}
