import axios from 'axios'
import { FAILURE, LOADING, SUCCESS, MOVIES_SEARCH, SINGLE_MOVIE } from '../ActionType/ActionType'
export const Movie_Search = (movie) => async (dispatch) => {
  try {
    dispatch(loadings())
    await axios.get(
      `https://www.omdbapi.com/?s=${movie}&page=1&apikey=89c5e3de`,
    ).then((movie) => {
      console.log('movie', movie.data.Search);
    dispatch({ type: MOVIES_SEARCH, payload: movie.data.Search })

    }).catch((errer) => {
      console.log('message', "No Data Found");
      dispatch(failures())
    })
  } catch (error) {
    console.log('message', "No Data Found");
  }
}



export const SingleMovie = (singleData) => (dispatch) => {
  try {
    dispatch({ type: SINGLE_MOVIE, payload : singleData })
  } catch (error) {
    console.log('error', error);
  }
}
export const loadings = () => (dispatch) => {
  try {
    dispatch({ type: LOADING })
  } catch (error) {
    console.log('error', error);
  }
}



export const successs = () => (dispatch) => {
  try {
    dispatch({ type: SUCCESS })
  } catch (error) {
    console.log('error', error);
  }
}


export const failures = () => (dispatch) => {
  try {
    dispatch({ type: FAILURE })
  } catch (error) {
    console.log('error', error);
  }
}
