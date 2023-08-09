const {Genres}=require("../db");
const { Sequelize } = require("sequelize");
const axios =require("axios");
const genres =require("../models/Genres");

const genresController= async()=>{
    const result= (await axios.get(`https://api.rawg.io/api/genres?key=fc1374b5cf6544de8fce2f7b46c4f1aa`)).data;
  var generos=[];
 generos.push(result.results.map((genre) => genre.slug))
// console.log(result.results.map((genre) => genre.slug))
const slugs = result.results.map((genre) => genre.slug);

try {
  for (const slug of slugs) {
    await Genres.create({ genre: slug });
  }
  console.log("Géneros agregados a la base de datos correctamente.");
} catch (error) {
  console.error("Error al agregar géneros a la base de datos:", error);
}

return generos;
}


  


module.exports={genresController};