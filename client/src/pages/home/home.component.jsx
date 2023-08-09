
import './home.style.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";
import FilterByGenre from '../../components/filters/genere.componet';
import { getByName, getVideogames, setAllGames, getDatabaseGames } from '../../redux/actions';

function Home() {
  const dispatch = useDispatch();
  const allgames = useSelector((state) => state.allgames);
  const databaseGames = useSelector((state) => state.databaseGames);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchString, setSearchString] = useState("");
  const [sortedByAlphabet, setSortedByAlphabet] = useState(false);
  const [sortedByRating, setSortedByRating] = useState(false);
  const [showDatabaseGames, setShowDatabaseGames] = useState(false);

  function handleChange(e) {
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(searchString));
  }

  function handlePrevPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  function handleNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  const sortByAlphabet = () => {
    const sortedGames = [...allgames].sort((a, b) => a.name.localeCompare(b.name));
    setSortedByAlphabet(true);
    setSortedByRating(false);
    dispatch(setAllGames(sortedGames));
  };

  const sortByRating = () => {
    const sortedGames = [...allgames].sort((a, b) => b.rating - a.rating);
    setSortedByRating(true);
    setSortedByAlphabet(false);
    dispatch(setAllGames(sortedGames));
  };

  function handleFilterByGenre(e) {
    const genre = e.target.value;
    setSelectedGenre(genre);
    dispatch(getVideogames(1, itemsPerPage, genre, searchString));
  }

  useEffect(() => {
    dispatch(getVideogames(currentPage, itemsPerPage, selectedGenre, searchString));
  }, [dispatch, currentPage, itemsPerPage, selectedGenre, searchString]);

  useEffect(() => {
    dispatch(getDatabaseGames());
  }, [dispatch]);

  const toggleDatabaseGames = () => {
    setShowDatabaseGames((prev) => !prev);
  };

  return (
    <div className="Home">
      <h1>HOME</h1>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className='filtros'>
        <FilterByGenre value={selectedGenre} onChange={handleFilterByGenre} />
        <button onClick={sortByAlphabet}>
          {sortedByAlphabet ? "Ordenar por defecto" : "Ordenar por alfabeto"}
        </button>
        <button onClick={sortByRating}>
          {sortedByRating ? "Ordenar por defecto" : "Ordenar por rating"}
        </button>
        <button onClick={toggleDatabaseGames}>
        {showDatabaseGames ? "Ocultar juegos creados" : "Mostrar juegos creados"}
      </button>
      </div>
      

      {showDatabaseGames ? (
        <Cards allgames={databaseGames} searchString={searchString} />
      ) : (
        <Cards allgames={allgames} searchString={searchString} />
      )}

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
        <span><h2>Página {currentPage}</h2></span>
        <button onClick={handleNextPage} disabled={allgames.length < itemsPerPage}>Siguiente</button>
      </div>
    </div>
  );
}

export default Home;








