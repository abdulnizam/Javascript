const Express = require('express')
const path = require('path')
const app = Express()

const NodeLib = require('./node_lib/lib')

const lib = new NodeLib()

app.use(Express.static(path.join(__dirname, 'build')))

app.use( (req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get('/', (req, res) => {
	
  res.sendFile(path.join(__dirname, 'build', 'index.html'))

});

app.get('/book', (req, res) => {

	let list = lib.booklist();
	res.json(list)
})

app.listen(8080, () => {
	console.log('server is running in 8080')
});