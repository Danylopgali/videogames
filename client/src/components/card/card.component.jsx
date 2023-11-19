import './card.style.css';
import {Link} from "react-router-dom"

function Card({ game }) {
  console.log(game);
  const { background_image, name, rating, genres ,id,released,platforms,genre} = game;

  return (
    <div className="Card">
    <Link to={`/home/${id}`} className="card-link">
    <div className="Card__content">
      <img src={background_image} alt={name} />
      <p>Nombre: {name}</p>
      <p>Generos: {genres?.map((genre)=>genre.name).join(",")}  {genre?.map((genre)=>genre).join(",")}</p>
      {/* <p>Plataformas {platforms?.map((platform)=><>{platform.platform.name}<br/></>)}</p>
      <p>Rating: {rating}</p>
      <p>Fecha de lanzamiento:{released} </p>
      <p>Id: {id}</p> */}
      </div>
      </Link>
    </div>
  );
}

export default Card;
