import Card from '../card/card.component';
import './cards.style.css';

function Cards({ allgames, searchString }) {
  const gameslist = searchString ? allgames[0]?.results : allgames; // Si hay búsqueda, usamos los resultados filtrados, de lo contrario, todos los juegos.

  return (
    <div className="Cards">
      {gameslist?.map((game) => (
        <Card key={game.slug} game={game} />
      ))}
    </div>
  );
}

export default Cards;





