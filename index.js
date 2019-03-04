// const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

es = express()
const server = es.listen(PORT, () => console.log(`Listening on ${ PORT }`));
setInterval(() => server.getConnections(
  (err, connections) => console.log(`${connections} connections currently open`)
), 5000);

//es.use(express.static(path.join(__dirname, 'public')))
es.use(express.static(path.join(path.join(__dirname, 'ant'), 'build')))
// es.use(express.static(path.join(__dirname,'build')))
es.get('/', (req, res) => res.render('/index.html'))


// Database Connection
const { Pool } = require('pg');
const pool = new Pool({
connectionString: process.env.DATABASE_URL,
ssl: true
});


// es.set('views', path.join(__dirname, 'views'))
// es.set('view engine', 'ejs') 

// es.get('/ant', (req, res) => {
// 	res.sendFile('index.html', {root: path.join(__dirname,'ant','public')});
// })




// OLD STUFF
// --------------------------------------------------------------------------------------------------

//es.get('/', (req, res) => res.render('pages/index'))

//es.get('/cool', (req, res) => res.send(cool()))

// es.get('/cool', function(req, res) {
// 	console.log(cool())
// 	console.log(req.body)
// 	if(req.query.animal=='dog'){
// 		res.send('0 o w o 0')
// 	}
// 	else res.send(cool())
// });

// es.get('/lena', (req, res) => res.render('pages/lena'))

// es.get('/times', (req, res) => {
// let result = ''
// const times = process.env.TIMES || 5
// for (i = 0; i < times; i++) {
//   result += i + ' '
// }
// res.send(result)
// })



// es.get('/db', async (req, res) => {
// try {
//   const client = await pool.connect()
//   const result = await client.query('SELECT * FROM test_table');
//   res.render('pages/db', result);
//   client.release();
// } catch (err) {
// console.error(err);
// res.send("Error " + err);
// }
// });

