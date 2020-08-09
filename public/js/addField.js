//procurar o botão
document.querySelector("#add-time")

.addEventListener('click' , cloneField);
//executar um codigo

function cloneField() {
  // console.log("cheguei aqui");

//duplicar os campos
const newFieldscontainer=  document.querySelector('.schedule-item').cloneNode(true)
//limar os campos
const fields = newFieldscontainer.querySelectorAll('input')

//reptiçao de dados
fields.forEach(function(field){
//pegar o field do momento
  field.value = ""
})

//colocar na página
document.querySelector("#schedule-item").appendChild(newFieldscontainer)
}