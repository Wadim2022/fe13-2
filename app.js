let login = document.querySelector(".login")
let password = document.querySelector('.password')
let e_mail = document.getElementById('input')
let knopka = document.querySelector(".v1")
let errorMsg = document.getElementById("error-msg")


let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;



knopka.onclick = function(){
    if(e_mail.value.match(mailRegex) ){
        errorMsg.style.direction= 'none';
        e_mail.style.border = '2px solid #00ff00';
        alert('You are welcome')
    }else if(e_mail.value === ''){
        errorMsg.style.display = 'none';
        e_mail.style.border = '2px solid #7f7f7f'
    }else{
        errorMsg.style.display = 'block'
        e_mail.style.border='2px solid #ff2851'
    }
}





