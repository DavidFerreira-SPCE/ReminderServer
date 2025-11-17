const {Pool} = require('pg')
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'remind',
    password:'wcc@2023',
    port:5432,
});



pool.connect()
.then(()=>console.log('conectado ao postgreSQL'))
.catch(err => console.error('erro na conexão',err));


module.exports= pool