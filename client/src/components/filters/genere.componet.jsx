import './genre.style.css';
import React from 'react';

function FilterByGenre({ value, onChange }) { 
  return (
<div>
       <h2> <label>Seleccionar género:</label></h2>
        <select value={value} onChange={onChange}>
          <option value="">Todos los géneros</option>
          <option value="action">Acción</option>
          <option value="indie">Indie</option>
          <option value="adventure">Aventura</option>
          <option value="role-playing-games-rpg">Juegos de rol (RPG)</option>
          <option value="strategy">Estrategia</option>
          <option value="shooter">Shooter</option>
          <option value="casual">Casual</option>
          <option value="simulation">Simulación</option>
          <option value="puzzle">Rompecabezas (Puzzle)</option>
          <option value="arcade">Arcade</option>
          <option value="platformer">Plataformas</option>
          <option value="massively-multiplayer">Multijugador masivo (MMO)</option>
          <option value="racing">Carreras</option>
          <option value="sports">Deportes</option>
          <option value="fighting">Lucha</option>
          <option value="family">Familiar</option>
          <option value="board-games">Juegos de mesa</option>
          <option value="card">Cartas</option>
          <option value="educational">Educativos</option>
        </select>
      </div>
  );
}

export default  FilterByGenre;