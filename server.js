const express = require('express');

const exphbs  = require('express-handlebars');
const fileUpload = require('express-fileupload');

const app = express();
const hbs = exphbs.create({ /* config */ });
const PORT = 5000;

app.use(fileUpload());
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.post('/', (req, res)=>{

    if(!req.files){
        return res.status(400).send('file can not find.');
    }
    console.log(req.files);
})


/* app.get('/', (req, res)=> {
    res.send("<h1>Tomoko</h1><p>Tomoko</p>");
}) */

app.listen(PORT, ()=> console.log('Server :'))