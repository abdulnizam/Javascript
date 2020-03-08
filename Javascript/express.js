const Express = require('Express');
const app = Express();

app.use(Express.static('public'))

app.get('/app', (req, res) => {
    res.send("hello world");
})

app.listen(3002, () => { console.log('3002 is running')});
