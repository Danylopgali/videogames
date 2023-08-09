const { getDetailById,getDetailByName,postNewVideogame,getAllVideogamesFromAPI,getAllVideogamesFromDB} = require("../controllers/VideogameControllers");
const {videogames}=require("../db");
const Videogame = require("../models/Videogame");

// const videogamesHandler= async (req,res)=>{
// try {
//     const response = await getAllvideogames();
//     res.status(200).json(response);
// } catch (error) {
//     res.status(400).json({ error: error.message });
// }
// };

const DetailByIdHandler= async (req,res)=>{
    const {id}=req.params;
    const source =isNaN(id)? "bdd" :"api";
    try {
        const response =await getDetailById(id,source)
        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error:error.messege});
    }

}

const DetailBynameHandler =async (req,res)=>{
    const name =req.query.name;
    name.toLowerCase();
    if (!name){
        return res.status(400).json({error:"Missing name parameter"});
    }
        try {
            const result =await getDetailByName(name)
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json({error:error.messege});
        }
    };

    const CreateNewVideogameHandler= async (req, res) => {
        const { name,descripcion,plataformas,imagen,rating,fecha_de_lanzamiento,genre} = req.body;
        try {
          const response = await postNewVideogame(name,descripcion,plataformas,imagen,rating,fecha_de_lanzamiento,genre);
          res.status(200).json(response);
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      };

      const getAllVideogames = async (req, res) => {
        try {
          const apiGames = await getAllVideogamesFromAPI();
          const dbGames = await getAllVideogamesFromDB();
          const allVideogames = [...apiGames, ...dbGames];
          res.json(allVideogames);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      };

module.exports={getAllVideogames,DetailByIdHandler,DetailBynameHandler,CreateNewVideogameHandler}