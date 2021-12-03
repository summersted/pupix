import { END_LOADING, START_LOADING } from "../types"

export const startLoadingData = () => ({ type: START_LOADING })

export const endLoadingData = () => ({ type: END_LOADING })