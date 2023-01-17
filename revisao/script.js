var div =document.getElementById('area')
div.addEventListener('click', clicar)
div.addEventListener('mouseenter', entrar)

function clicar() {
  div.innerText = 'clicou'
}

function entrar(){
    div.innerText = 'entrou!'
}