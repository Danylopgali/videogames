
import { GET_VIDEOGAMES, GET_BY_NAME, GET_GAME_DETAILS , GET_DATABASE_GAMES,SET_ALL_GAMES} from "../actions";

const initialState = {
  allgames: [],
  allgamesCopy: [],
  gameDetails: null,
  databaseGames: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allgames: action.payload,
        allgamesCopy: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        allgames: action.payload,
      };
    case GET_GAME_DETAILS: 
      return {
        ...state,
        gameDetails: action.payload, 
      };
      case  GET_DATABASE_GAMES:
        return{
          ...state,
          databaseGames:action.payload,
        };
        case SET_ALL_GAMES:
          return {
            ...state,
            allgames: action.payload,
          };
    default:
      return state;
  }
}

export default rootReducer;
