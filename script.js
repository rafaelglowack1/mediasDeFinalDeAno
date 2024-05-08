let formulario = document.querySelector('#formulario')
var linhas = ''
const valorNota = []
const valorNome = []

const spanaprovado = '<span class="aprovado">aprovado</span>'
const spanreprovado = '<span class="reprovado">reprovado</span>' 
formulario.addEventListener("submit" , function(e){
    e.preventDefault()
    addLinha()
    addPagina()
    atualisaMedia()
    
})

function addPagina(){
    let tabela = document.querySelector('#tbody')
    tabela.innerHTML=linhas

    nota.value=''
    nome.value=''
}
 
function addLinha(){
    const nome = document.querySelector("#nome")
    const nota = document.querySelector('#nota')

    if (valorNome.includes(nome.value)){
        alert(`a matéria ${nome.value} já foi adicionada , digite outra matéria !!! `)
    }else{
        valorNome.push(nome.value)
        valorNota.push(Number(nota.value))

        var linha = '<tr>'
        linha+= `<td> ${ nome.value} </td>`
        linha+= `<td> ${nota.value}</td>`
        linha+= `<td> ${nota.value >= 7 ? '😁' : '🥶'} </td>`
        linha+='</tr>'
        linhas+=linha
    }
  
}
function atualisaMedia(){
    let mediafinal = calculoMedia()

    document.querySelector('#media').innerHTML = mediafinal
    document.querySelector('#resultado').innerHTML= mediafinal >=7 ? spanaprovado : spanreprovado ;
}
function calculoMedia(){
    let somaNotas = 0

    for (let i = 0 ; i < valorNota.length ; i++){
        somaNotas += valorNota[i]
        
    }
    return somaNotas / valorNota.length
}
