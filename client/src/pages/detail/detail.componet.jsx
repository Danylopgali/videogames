import './detail.style.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_GAME_DETAILS, getGameDetails } from "../../redux/actions";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const gameDetails = useSelector((state) => state.gameDetails);

  useEffect(() => {
    // Llamamos a la acción para obtener los detalles del juego por su ID
    dispatch(getGameDetails(id));
    
    return () => {
      dispatch({
        type: GET_GAME_DETAILS,
        payload: [],
      });
    }
  }, [dispatch, id]);

  if (!gameDetails) {
    return <p>Cargando detalles del juego...</p>;
  }

  const { background_image, name, rating, genres, released, platforms } = gameDetails;

  return (
    <div className="Detail">
      <img src={background_image} alt={name} />
      <div className='details'>
        <h2>Nombre:</h2>
        <p>{name}</p>

        <h2>Géneros:</h2>
        <p>{genres?.map((genre) => genre.name).join(", ")}</p>

        <h2>Plataformas:</h2>
        <p>{platforms?.map((platform) => platform.platform.name).join(", ")}</p>

        <h2>Rating:</h2>
        <p>{rating}</p>

        <h2>Fecha de lanzamiento:</h2>
        <p>{released}</p>

        <h2>Id:</h2>
        <p>{id}</p>

      </div>
    </div>
  );
}

export default Detail;


