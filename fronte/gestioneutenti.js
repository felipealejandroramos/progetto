

// location.url location.serch 
var utenteattivo

function accesso(){
    let signupForm = document.getElementById('datiaccesso');
    signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let formEmail = document.getElementById('emaila').value;
    let formPassword = document.getElementById('passworda').value;
    let url = "http://localhost:3000/utenti/acesso";
    let thisUserData = {
        email: formEmail,
        password: formPassword
    }
    let u = new URLSearchParams(thisUserData).toString();
    
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: u
    }) .then(res=>{return res.json().then(data => { 
        if(data!== false){
                utenteattivo= [data.email,data.ruolo]
                cambiapassword()
                document.getElementById('elimina').style.display="block"
                togliintoduzione()
                }
        if(data.ruolo === "dipendente") 
            creatabelladipendenti()
        else if(data.ruolo==="cliente")
            creatabellaclienti()
        else
            console.log("errore")
    })})
    .then(response => console.log('Success: ', response))
    .catch(error => console.error('Error: ', error));
    })

    
 
}
function togliintoduzione(){
    document.getElementById('Bentornato').style.display="block"
    document.getElementById('benvenuto').style.display="none"
    document.getElementById('accesso').style.display="none"
    document.getElementById('registrazione').style.display="none"
    document.getElementById('intro').style.display="none"
   // document.getElementById('accesso').style.display="none"
}
function creatabellaclienti(){
    document.getElementById('tabellacliente').style.display= "block"
}

function cambiapassword(){
    document.getElementById('modifica').style.display="block"
    let signupForm = document.getElementById('datimodifica');
    signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let utente= {
        email: utenteattivo[0],
        password: document.getElementById('passwordm').value
    }
     
    let url = "http://localhost:3000/utenti/modifica";
    let u = new URLSearchParams(utente).toString();
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: u
    })
})}

function eliminaccaunt(){
    let utentee= {
        email: utenteattivo[0],
    }
    let u = new URLSearchParams(utentee).toString() ;
    let url = "http://localhost:3000/utenti/elimina";
    fetch(url, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: u
    })
}


function rgitrati(){
    let signupForm = document.getElementById('datiregsitrazione');
    signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let formEmail = document.getElementById('emailr').value;
    let formPassword = document.getElementById('passwordr').value;
    if(formEmail==="" || formPassword===""){
        alert("nessun dato inserito ")
        return
    }
        
    let url = "http://localhost:3000/utenti/aggungi";
    let newUserData = {
        email: formEmail,
        password: formPassword
    }
    let u = new URLSearchParams(newUserData).toString();
    
    fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: u
        })
   
  
    })
}




function creatabelladipendenti(){
        fetch("http://localhost:3000/utenti/mostra",{ 
            method: 'GET'
        }) .then((res) => {return res.json().then(data=>{
                console.log(data)
               // let testo=" "
                //document.getElementById("testoperonale").innerHTML= JSON.stringify(data)
              /* for (var i = 0; i < data.length ; i++) {
                
                console.log(data[i].email)
                testo = testo +" utente n " + data[i].n +" email "+ data.email[i] +" password "+ data[i].password
               
                }/*/
                document.getElementById("testoperonale").innerHTML=JSON.stringify(data)
            })
        })
       
        
            
           // document.getElementById("tabellapersonale").style.display = "block"
            
                
            /*
        /*/
    }
    rgitrati()
    accesso()
   