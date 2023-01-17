function verificar() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('tabu')

    if (num.value == 0) {
        window.alert('Por favor, digite um número!')
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            item.value = `tab${c}`
            c++
        }
    }
}