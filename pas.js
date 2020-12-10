document.querySelector('.Bg-Message').style.display = 'flex';

document.querySelector('.Ok').addEventListener('click', function(){
    document.querySelector('.Bg-Message').style.display = 'none';
});

document.querySelector('.button').addEventListener('click', function(){
    

    let username = document.forms["login"]["username"].value;
    let password = document.forms["login"]["password"].value;

    if (username == "CobaMasuk" && password == "909090") {
        document.querySelector('.Bg-Message1').style.display= 'flex';
    } 
    
    else {
        document.querySelector('.Bg-Message2').style.display= 'flex';
    }

})

let formLogin = document.getElementById("formLogin")
formLogin.addEventListener("click", function(event){
    event.preventDefault()
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.Bg-Message1').style.display = 'none';
});

document.querySelector('.close1').addEventListener('click', function(){
    document.querySelector('.Bg-Message2').style.display = 'none';
});

