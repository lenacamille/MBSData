const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

es = express()
  
 es.use(express.static(path.join(__dirname, 'public')))
  
 es.set('views', path.join(__dirname, 'views'))
 es.set('view engine', 'ejs')
 es.get('/', (req, res) => res.render('pages/index'))
 //es.get('/cool', (req, res) => res.send(cool()))
 es.get('/cool', function(req, res) {
 	console.log(cool())
 	console.log(req.body)
 	if(req.query.animal=='dog'){
 		res.send('0 o w o 0')
 	}
 	else res.send(cool())
 });

 es.get('/lena', (req, res) => res.render('pages/lena'))
 es.listen(PORT, () => console.log(`Listening on ${ PORT }`))
 
 es.get('/times', (req, res) => {
  let result = ''
  const times = process.env.TIMES || 5
  for (i = 0; i < times; i++) {
    result += i + ' '
  }
  res.send(result)
})

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM test_table');
    res.render('pages/db', result);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});