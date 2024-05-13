const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.


const mainController = {
    index: function(req, res){        
        //Nuestro código.
        db.Movie.findAll()
            .then( function (data) {                
                res.render("index", {movies: data})                
            })
            .catch( function (error){
                console.log(error)
            })        
    }   
}

module.exports = mainController