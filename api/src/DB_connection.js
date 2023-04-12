require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const characterModel = require("./models/Character");
const favoritesModel = require("./models/Favorites");

const URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`;
/*
EJERCICIO 01
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.

URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
*/

let sequelize = new Sequelize(URL, { logging: false, native: false });

/*
EJERCICIO 03
Debajo de este comentario puedes ejecutar la función de los modelos.
*/

characterModel(sequelize);
favoritesModel(sequelize);

module.exports = {
  ...sequelize.models,
  sequelize,
};
