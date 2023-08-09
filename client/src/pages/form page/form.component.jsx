import { useState } from 'react';
import axios from 'axios';
import './form.style.css';

function Form() {
  const [Input, setInput] = useState({
    name: "",
    descripcion: "",
    plataformas: "",
    imagen: "",
    rating: "",
    fecha_de_lanzamiento: "",
    genre: [], // Agregamos un array para almacenar los géneros seleccionados
  });
  const genreOptions = [
    "action",
    "indie",
    "adventure",
    "role-playing-games-rpg",
    "strategy",
    "shooter",
    "casual",
    "simulation",
    "puzzle",
    "arcade",
    "platformer",
    "massively-multiplayer",
    "racing",
    "sports",
    "fighting",
    "family",
    "board-games",
    "card",
    "educational",
  ];
  
  console.log(Input)
  const [errors, setErrors] = useState({}); // Estado para almacenar los errores de validación


  function handleGenreChange(e) {
    const { value, checked } = e.target;
    setInput((prevState) => ({
      ...Input,
      genre: checked
        ? [...prevState.genre, value]
        : prevState.genre.filter((genre) => genre !== value),
    }));
  }


  function handleChange(e) {
    const { name, value } = e.target;

    // Si el campo es 'genre', actualizamos el array de géneros seleccionados
    if (name === "genre") {
      setInput((prevState) => ({
        ...Input,
        genres: Array.from(e.target.selectedOptions) // Cambio aquí
        .filter((option) => option.selected)
        .map((option) => option.value),
    
      }));

    } else {
      setInput((prevState) => ({
        ...Input,
        [name]: value,
      }));
    }
    
  }
 
  function validateInputs() {
    const errors = {};
    if (!Input.name) {
      errors.name = "El nombre es obligatorio";

    }
    if (!Input.descripcion) {
      errors.descripcion = "la descripcion es obligatorio";

    }
    if (!Input.plataformas) {
      errors.plataformas = "El las plataformas son obligatorio";

    }
    if (!Input.imagen) {
      errors.imagen = "La imagen es obligatoria";

    }
    if (Input.rating > 5) {
      errors.rating = "El rating supera el rango de 1 a 5";

    }
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!Input.fecha_de_lanzamiento || !datePattern.test(Input.fecha_de_lanzamiento)) {
      errors.fecha_de_lanzamiento = "La fecha no coincide con el formato AAAA-MM-DD";
    }
     
    if (Input.genre.length === 0) {
      errors.genre = "Debes seleccionar al menos un género";
    }
  
    

    return errors;
  }
  
  function mapGenreIds() {
    return Input.genre.map((genre) => {
      // Aquí podrías realizar una búsqueda en tu base de datos para obtener el ID del género en función de su nombre
      // Por ahora, simplemente devolveremos el nombre del género
      return genre;
    });
  }

  function handleSubmit(e) {

    e.preventDefault();
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      // Convertir el campo 'rating' a un número decimal

      const ratingNumber = parseFloat(Input.rating);

      // Crear un nuevo objeto con los datos actualizados
      const formData = {
        ...Input,
        rating: ratingNumber,
        genre: mapGenreIds(), 
      };
      formData.genre = Input.genre;// cambio
      // Realizar la solicitud POST al backend
      axios
        .post('http://localhost:3001/videogames', formData)
        .then((response) => {
          // Manejar la respuesta del backend si es necesario
          console.log('Datos enviados exitosamente:', response.data);
          alert('El juego ha sido creado exitosamente');
          // Puedes mostrar un mensaje de éxito al usuario o redireccionar a otra página, etc.
        })
        .catch((error) => {
          // Manejar el error si la solicitud falla
          console.error(error.response);
          alert(error)
          // Puedes mostrar un mensaje de error al usuario o realizar otras acciones apropiadas
        });
    }

    else {
      setErrors(validationErrors);
    }
  }

  

  return (
    <div className="form">
      <div className='title'>
        <h1>CREA UNA VIDEOJUEGO</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <h2><label className='tag'>Nombre: </label></h2>
          <input name="name" class="input" value={Input.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <h2> <label className='tag'>Descripción</label></h2>
          <input name="descripcion" class="input" value={Input.descripcion} onChange={handleChange} />
          {errors.descripcion && <p className="error">{errors.descripcion}</p>}
        </div>
        <div>
          <h2>  <label className='tag'>Plataformas( EJEMPLO : PLAY 4,PLAY 5,XBOX,NINTENDO,ETC..)</label></h2>
          <input name="plataformas" class="input" value={Input.plataformas} onChange={handleChange} />
          {errors.plataformas && <p clplataformas="error">{errors.plataformas}</p>}
        </div>
        <div>
          <h2>  <label className='tag'>Imagen (COPIA EL ENLASE DE LA IMAGEN QUE DESAS COLOCAR O COLOCA NUEVAMENTE EL NOMBRE DEL JUEGO)</label></h2>
          <input name="imagen" class="input" value={Input.imagen} onChange={handleChange} />
          {errors.imagen && <p className="error">{errors.imagen}</p>}
        </div>
        <div>
          <h2>  <label className='tag'>Rating (ENTERE 1 y 5):</label></h2>
          <input name="rating" class="input" value={Input.rating} onChange={handleChange} />
          {errors.rating && <p className="error">{errors.rating}</p>}
        </div>
        <div>
          <h2>  <label className='tag'>Fecha de lanzamiento (AAAA-MM-DD):</label></h2>
          <input name="fecha_de_lanzamiento" class="input" value={Input.fecha_de_lanzamiento} onChange={handleChange} />
          {errors.fecha_de_lanzamiento && <p className="error">{errors.fecha_de_lanzamiento}</p>}
        </div>
        <div>
          <h2><label className='tag'>Géneros:</label></h2>
          {genreOptions.map((genre) => (
            <label key={genre}>
              <input
                type="checkbox"
                name="genre"
                value={genre}
                checked={Input.genre.includes(genre)}
                onChange={handleGenreChange}
              />
              {genre}
            </label>
          ))}
          {errors.genre && <p className="error">{errors.genre}</p>}
        </div>


        <button className="button-send" type="submit">Crear</button>
      </form>
    </div>
  );
}

export default Form;
