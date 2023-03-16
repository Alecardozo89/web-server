require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//HANDLEBARS: Esto es para renderizar las partes repetitivas, del generico y elements por ejemplo
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('home', {
        nombre: 'Alejandro Cardozo',
        titulo: 'Curso de Node',
        subtitulo: 'Web y Rest Server'
    });
});

app.get('/generic', (req, res) =>{
    res.render('generic', {
        nombre: 'Alejandro Cardozo',
        titulo: 'Curso de Node',
        subtitulo: 'Web y Rest Server'
    });
});

app.get('/elements', (req, res) =>{
    res.render('elements', {
        nombre: 'Alejandro Cardozo',
        titulo: 'Curso de Node',
        subtitulo: 'Web y Rest Server'
    });
});

app.get('*', (req, res) =>{
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () =>{ 
    console.log(`Pagina corriendo en http://localhost:${port}`)
});
    


