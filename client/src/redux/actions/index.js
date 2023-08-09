import axios from "axios";
export const GET_VIDEOGAMES ="GET_VIDEOGAMES";
export const GET_BY_NAME="GET_BY_NAME";
export const GET_GAME_DETAILS="GET_GAME_DETAILS";
export const GET_DATABASE_GAMES= "GET_DATABASE_GAMES";
export const  SET_ALL_GAMES= "SET_ALL_GAMES";


export function getVideogames(page, pageSize, genre) {
  return async function (dispatch) {
    try {
      let url = `https://api.rawg.io/api/games?key=fc1374b5cf6544de8fce2f7b46c4f1aa&page=${page}&page_size=${pageSize}`;

      if (genre) {
        url += `&genres=${genre}`;
      }

      const response = await axios(url);

      dispatch({
        type: GET_VIDEOGAMES,
        payload: response.data.results,
      });
    } catch (error) {
      console.error("Error al obtener los videojuegos:", error);
    }
  };
}

  export function getByName(name) {
    if (name === "") {
      // regeresa a la pagina uno y renderiza 15 juegos
    return getVideogames(1,15);
  }

  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/videogames/name?name=${name}`);
      dispatch({
        type: GET_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
}

      export function getGameDetails(id) {
        return async function (dispatch) {
          try {
            const response = await axios.get(`http://localhost:3001/videogames/${id}`);
            return dispatch({
              type: GET_GAME_DETAILS,
              payload: response.data,
            });
          } catch (error) {
            console.error("Error al obtener los detalles del juego:", error);
          }
        };
      }

      export function getDatabaseGames() {
        return async function (dispatch) {
          try {
            const response = await axios.get('http://localhost:3001/videogames');
            dispatch({
              type: GET_DATABASE_GAMES,
              payload: response.data,
            });
          } catch (error) {
            console.error('Error al obtener los datos de la base de datos:', error);
          }
        };
      }

      export function setAllGames(games) {
        return {
          type: SET_ALL_GAMES,
          payload: games,
        };
      }


