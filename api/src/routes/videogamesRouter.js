const {Router}= require("express");
const { videogamesHandler ,DetailByIdHandler,DetailBynameHandler,CreateNewVideogameHandler, getAllVideogames} = require("../handlers/VideogameHandlers");
const videogamesRouter=Router();
videogamesRouter.get("/name",DetailBynameHandler);
videogamesRouter.get("/",getAllVideogames);
videogamesRouter.get("/:id",DetailByIdHandler);
videogamesRouter.post("/",CreateNewVideogameHandler);
module.exports=videogamesRouter;