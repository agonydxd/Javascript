let microfone = {
    color: 'black',
    isOn: true,
    toggleOnOff: function(){
        if(microfone.isOn){
            console.log('Desligar')
        }else{
            console.log('Ligar')
        }
        microfone.isOn = !microfone.isOn
    }    
}
console.log(microfone.toggleOnOff)
 