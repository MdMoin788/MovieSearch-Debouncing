import { FAILURE, LOADING, SUCCESS, MOVIES_SEARCH , SINGLE_MOVIE} from "../ActionType/ActionType"
const initState = {
  loading: false,
  failure: false,
  succcess: false,
  movie: [],
  single : {}
}
export const reducer = (store = initState, { type, payload }) => {
console.log('payload', payload);

  switch (type) {
    case MOVIES_SEARCH:
      return { ...store, movie: payload }
    case SINGLE_MOVIE:
      return { ...store, single: payload }
    case LOADING:
      return { ...store, loading: true }
    case SUCCESS:
      return { ...store, loading: false, succcess: true }
    case FAILURE:
      return { ...store, loading: false, success: false, failure: true }
    default:
      return store
  }
}
