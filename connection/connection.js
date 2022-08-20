const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Savita@123",
  database:"surat_company123"

});





// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


// con.connect(function(err) {
//         if (err) throw err;
//         console.log("Connected!");
//         con.query("CREATE DATABASE surat_company123", function (err, result) {
//           if (err){;
//           console.log(" alredy  created");
//           }else{
//               console.log("database creted")
//           }
//         });
//       });
    



const options = {
  client: 'mysql',
  connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'Savita@123',
      database: "surat_company123"
  }
}
const knex = require('knex')(options);


// knex.schema.hasTable('registeration').then(function (exists) {
//   if (!exists) {
//       knex.schema.createTable('registeration', (table) => {
//           table.increments('user_id').primary();
//           table.string('name', 255).notNullable()
//           table.string('email', 255).notNullable()
//           table.string('password', 255).notNullable()
//           table.unique('email')
//       }).then(() => console.log("table created"))
//           .catch((err) => { console.log("alredy creted") })
//   }
// })




  
knex.schema.hasTable('registeration').then(function (exists) {
  if (!exists) {
      knex.schema.createTable('postData', (table) => {

          table.increments('post_id').primary();
          table.string('title', 255).notNullable()
          table.string('body', 255).notNullable()
          table.string('created_by',255).notNullable();
          table.string('ActiveInactive',255).notNullable();
          table.string('Geo_location/latitude/longitude',255).notNullable();

      }).then(() => console.log("table created"))
          .catch((err) => { console.log("alredy creted") })
          
  }
})

module.exports=knex


