const {Router}= require("express");
const {genresHandler}= require("../handlers/GenresHandlers");
const genresRouter=Router();
genresRouter.get("/",genresHandler)
module.exports=genresRouter;