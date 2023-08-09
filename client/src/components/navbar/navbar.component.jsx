import './navbar.style.css';
import { Link } from 'react-router-dom'; // Importar el componente Link

function Navbar({ handleChange, handleSubmit }) {
  return (
    <div className="Navbar">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="search-container">
        <input placeholder="Búsqueda" className='input-buscar' onChange={(e) => handleChange(e)} />
        <button className="button-buscar" type="submit" onClick={handleSubmit}>Buscar</button>
        </div>
      </form>
    
      <Link to="/form">
        <button className='button-crear'>Crear videojuego</button>
      </Link>
   
    </div>
    
  );
}

export default Navbar;
