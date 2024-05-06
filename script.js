let formulario = document.querySelector('#formulario')
var linhas = ''
  
formulario.addEventListener("submit" , function(e){
    e.preventDefault()
    
    const nome = document.querySelector("#nome")
    const nota = document.querySelector('#nota')

  

    var linha = '<tr>'
    linha+= `<td> ${ nome.value} </td>`
    linha+= `<td> ${nota.value}</td>`
    linha+= `<td> ${nota.value >= 7 ? '😁' : '🥶'} </td>`
    linha+='</tr>'
    linhas+=linha

    let tabela = document.querySelector('#tbody')
    tabela.innerHTML=linhas

    nota.value=''
    nome.value=''
})