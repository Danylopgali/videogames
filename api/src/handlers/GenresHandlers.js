const {genresController}=require("../controllers/GenresControllers");
const genres =require("../models/Genres");

const genresHandler=async(req,res)=>
{
    const response=await genresController()
    try {
        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports={genresHandler};