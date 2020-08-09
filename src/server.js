//importando arquivos baixados
const nunjucks = require('nunjucks')
const express = require('express')
const server = express ()

const proffys = [

        { name:"Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatszap: "9773664",
        bio: "Entusiasta das melhores tecnologias de química avançada e",
        subject: "Química",
        cost:"20" ,
        weekday:[1], 
        time_from:[720], 
        time_to:[1220]
    }

]
//Dados
const subjects = [
    
  "Artes",
    "Biologia",
  "Física",
    "Filosófia",
    "Sociologia",
    "Geografia",
    "Matemática",
    "Espanhol",
   "Ingles",
"Portugues",
  
]

const weekdays= [
    
    "Domingo",
      "Segunda-feira",
    "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    
  ]
//funcionalidades
function getSubjects(subjectNumber){
 const position = +subjectNumber - 1
    return subjects[position]
}

//configurar nunnjucks
nunjucks.configure('src/views', {
    express: server,
    noCache:  true,
})

//configurar arquivos estáticos(css, scripts, imagens)
server.use(express.static("public"))

//Rotas das páginas
.get("/" , (req, res) => {
    return res.render("index.html")
})

.get("/study" , (req, res) => {
    const fielters = req.query;
    return res.render("study.html", { proffys, fielters, subjects ,weekdays})
})

.get("/give-classes" , (req, res) => {
    const data =req.query;
    const isNoEmpty= Object.keys(data).length != 0

    if(isNoEmpty){
        data.subject=getSubjects(data.subject)
        proffys.push(data);

    return res.redirect("/study")
    }
   
    return res.render("give-classes.html", {subjects,weekdays} )
})

.listen(4000, ()=> {
    console.log("servidor rodando de boas")
})