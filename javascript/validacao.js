let nome = document.getElementById('nome')
let Email = document.getElementById('Email')
let tele = document.getElementById('tele')
let msg = document.getElementById('msg')
let btEnvia = document.getElementById('btEnvia')

function validar(){
    if (nome.value == 0) {
         window.alert('Digite o seu nome')
         nome.focus()
         return false
    }
    if(Email.search("@") ==-1 && Email.value ==0) {
         window.alert('Digite um e-mail válido')
         email.focus()
         return false
    }
    if(tele.value == " "){
        window.alert('Digite o seu telefone')
        tele.focus()
        return false 
    } 
    if(msg.value == 0){
        window.alert('Deixe uma mensagem')
        msg.focus()
        return false
    }
}