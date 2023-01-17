function contar() {
    var ini = document.getElementById('pas1')
    var fim = document.getElementById('pas2')
    var passo = document.getElementById('pas3')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value == 0 || passo.value == 0){
        window.alert('ERROR falta dados')
     }else {
       res.innerHTML = 'contando:'
       var i = Number(ini.value)
       var f = Number(fim.value)
       var p = Number(passo.value)
       for(var c = i ; c <= f ; c += p )
       res.innerHTML += `${c}`
    }
} 