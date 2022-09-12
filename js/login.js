let nome_usuario = document.querySelector('input#nome-login')
let gmail_usuario = document.querySelector('input#gmail-login')
let senha_usuario = document.querySelector('input#senha-login')

criarConta = () => {
    if(gmail_usuario == localStorage.getItem('gmail')){
        alert('Essa ja existe')
    }else {
        localStorage.setItem('nome', nome_usuario.value)
        localStorage.setItem('gmail', gmail_usuario.value)
        localStorage.setItem('senha', senha_usuario.value)
        alert(`${nome_usuario.value} sua conta já esta criada.`)
    }

}
