import {produce} from "immer";
import SHOWS_LOADED from "../actions/Shows";



export const state = {
    shows: {},
    query: "",
}
function showReducer(state) {
  switch (action.type) {
    case SHOWS_LOADED:
      return produce(state, (draft) => {
        action.payload = shows;
      });
    default:
      return state;
  }
}

export default showReducer;
