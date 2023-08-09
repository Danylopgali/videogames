const {Videogame,Genres}=require("../db");
const Sequelize=require("sequelize");
const axios =require("axios");
const videogame =require("../models/Videogame");

// const getAllvideogames =async ()=>{
//     const allvideogames=[ (await axios.get(`https://api.rawg.io/api/games?key=fc1374b5cf6544de8fce2f7b46c4f1aa`)).data]
    
//     return allvideogames;
// };





const getDetailById=async(id,source)=>{
    const detail =source ==="api"?(await axios.get(`https://api.rawg.io/api/games/${id}?key=fc1374b5cf6544de8fce2f7b46c4f1aa`)).data
    : await Videogame.findByPk(id);
return detail;
}


const getDetailByName= async(name)=>{

const results = [(await axios.get(`https://api.rawg.io/api/games?key=fc1374b5cf6544de8fce2f7b46c4f1aa&search=${name}`)).data];
return results.slice(0,15);
}

const postNewVideogame= async(name,descripcion,plataformas,imagen,rating,fecha_de_lanzamiento,genre)=>{
    const newVideogame= await Videogame.create({name,descripcion,plataformas,imagen,rating,fecha_de_lanzamiento,genre});
    const selectedGenres = await Genres.findAll({
      where: {
        genre: genre, // Usamos el parámetro "genre" que pasaste a la función
      },
    });
  
    // Relaciona los géneros con el videojuego creado usando .setGenres
    await newVideogame.setGenres(selectedGenres);
  
    return newVideogame;
  
    };



const getAllVideogamesFromAPI = async () => {
  try {
    const response = await axios.get(
      "https://api.rawg.io/api/games?key=fc1374b5cf6544de8fce2f7b46c4f1aa"
    );
    return response.data.results;
  } catch (error) {
    throw new Error("Error al obtener los juegos de la API");
  }
};

const getAllVideogamesFromDB = async () => {
  try {
    const databaseGames = await Videogame.findAll();
    return databaseGames;
  } catch (error) {
    throw new Error("Error al obtener los juegos de la base de datos");
  }
};



module.exports={getDetailById,getDetailByName,postNewVideogame,getAllVideogamesFromAPI,getAllVideogamesFromDB};