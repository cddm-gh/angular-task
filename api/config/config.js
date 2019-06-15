/*  Archivo de configuración de variables
 para desarrollo y producción de la aplicación */

//=========================================================||
//                Puerto del servidor                      ||
//Si corre en un host se genera la variable de entorno PORT||
//Si corre localmente usará el puerto por defecto 3000     ||
//=========================================================||
process.env.PORT = process.env.PORT || 3000;

//=========================================================||
// Entorno (Desarrollo, Producción)
//=========================================================||
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//=========================================================||
// Base de datos
//=========================================================||
let urlDB;
let mongoPORT = 27017;
let db_name = 'angular_task';
//Si la variable de entorno NODE_ENV es 'dev' está en desarrollo
//Se crea una variable de entorno MONGO_URI en heroku
if (process.env.NODE_ENV === 'dev')
    urlDB = `mongodb://localhost:${mongoPORT}/${db_name}`
else
    urlDB = process.env.MONGO_URI;

process.env.URLDB = urlDB;