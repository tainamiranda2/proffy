const Database = require('./db')
const createProffy = require ('./createProffy')

 Database.then((db)=> {
 //inserir dados 
proffyValue = {
 name: "Diego Fernandes",
 avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
 whatszap: "9773664",
 bio: "Entusiasta das melhores tecnologias de química avançada"

}

classValue = {
    subject:"Química",
    cost: "20"
}

classScheduleValues = [
    //class_id virra pelo banco de dados
    {
        weekday:1,
        time_from: 720,
        time_to: 1220
    }
]

 createProffy(db, {proffyValue, classScheduleValues, classValue}).then
//consultar dados inseridos

}) 