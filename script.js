var num = document.getElementById('txtNum')
var sel = document.getElementById('selInforma')
var resultado = document.getElementById('resultado')
var valores = []

function isNumber(numero){
  if(Number(numero)>= 1 && Number(numero <100)){
    return true
  }else{
    return false
  }
}
function inList(n,l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}

function carregar(){
  if (isNumber(num.value) && !inList(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    sel.appendChild(item)
    resultado.innerHTML = ''
  }else{
    alert('Valor invalido ou nao encontrado na lista')
  }
  num.value = ''
  num.focus()
}

function finalizar(){

  if (valores.length == 0){
    alert('Informe valores antes de finalizar!')  
  }else{
    let total = valores.length

    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores){
      soma += valores[pos]
      if(valores[pos] > maior){
        maior = valores[pos]
      if(valores[pos] < menor){
        menor = valores[pos]
      }
      }
      media = soma / total
    }
    resultado.innerHTML = `<p>Ao todo, temos ${total} numeros cadastrados</p>`
    resultado.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    resultado.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    resultado.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

  }


}