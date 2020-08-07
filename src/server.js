const proffys = [
    {
        name: "Victor Amorim",
        avatar: "https://avatars3.githubusercontent.com/u/63806098?s=460&u=8feca71f0c0f06427657a9b1a5950ce864cf14e1&v=4",
        whatsapp: "99999-9999",
        bio: "99999-9999",
        subject: "Irei dar as melhores aulas de Geografia da sua vida, mesmo não sabendo nada sobre.",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
];

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
];

const weekdays = [
    'Domingo',
    'Segunda',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo'
];

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1

    return subjects[position];
}

const express = require("express");
const { static } = require("express");
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('src/views', {
    express: app,
    noCache: true,

});
app.use(static("public"));

app.get('/', (request, response) => {
    return response.render('index.html');
});

app.get('/study', (request, response) => {
    const filters = request.query;
    return response.render('study.html', {proffys, filters, subjects, weekdays});
});

app.get('/give-classes', (request, response) => {
    const data = request.query

    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {
      data.subject = getSubject(data.subject);
      proffys.push(data);
      return response.redirect("/study");
    } 

    return response.render('give-classes.html', {subjects, weekdays});
})

app.listen(5500);