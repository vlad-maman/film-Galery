
let buttonSEND = document.querySelector('.buttonn')
let inputFIELD =  document.querySelector('.input_field')
let Name = document.querySelector('.hhh')
let SurName = document.querySelector('.hhhh')

let cookies = document.cookie.split('; ')
let isCookieSaved = false
let user_name = 0
for (let i = 0; i < cookies.length; i += 1) {
    if (cookies[i].split('=')[0] == 'user_name') {
        isCookieSaved = true
        user_name = cookies[i].split('=')[1]
        console.log(user_name)
        break
    }
}



function DontHaveName() {
    document.cookie = `user_name=${inputFIELD.value};max-age=5000000000000000`
    Name.style.display = 'none'
    Name.innerHTML =  inputFIELD.value
}

function HaveName(){
    Name.style.display = 'block'
 
}


let SurnameField = document.querySelector('.input_fieldSURNAME')



let cookies2 = document.cookie.split('; ')
let isCookieSaved2 = false
let user_name2 = 0
for (let i = 0; i < cookies2.length; i += 1) {
    if (cookies2[i].split('=')[0] == 'user_name2') {
        isCookieSaved2 = true
        user_name2 = cookies2[i].split('=')[1]
        console.log(user_name2)
        break
    }
}




function DontHaveName2() {
    document.cookie = `user_name2=${SurnameField.value};max-age=50000000000000`
    SurName.style.display = 'none'
    SurName.innerHTML =  SurnameField.value
}

function HaveName2(){
    SurName.style.display = 'block'
    SurName.innerHTML =  user_name2
}




if (isCookieSaved) {
    HaveName
    HaveName2


    SurName.innerHTML =  user_name2
    Name.innerHTML =  user_name 
} else {
 buttonSEND.addEventListener('click', DontHaveName )
 buttonSEND.addEventListener('click', DontHaveName2 )
}




inputFIELD.oninput = function(){
    this.value = this.value.substr(0, 12)
  
}

SurnameField.oninput = function(){
    this.value = this.value.substr(0, 12)
}






let LogInBtn = document.querySelector('.animated-button')
let WRAPPERlogIn = document.querySelector('.wrapper')
let welcomeNAME = document.querySelector('.welcomeNAME')

let SiteLog = document.querySelector('.arrow-wrap')

if(isCookieSaved = true){
        SiteLog.style.display = 'flex'
    LogInBtn.style.display = 'none'
}

if(Name.innerHTML === ""){
         SiteLog.style.display = 'none'
    LogInBtn.style.display = 'flex'
}


LogInBtn.addEventListener('click', function(){
    welcomeNAME.style.opacity = 0
    WRAPPERlogIn.style.opacity = 1
    welcomeNAME.style.display = 'none'
    WRAPPERlogIn.style.display = 'flex'
})


let conteinetIFLOno = document.querySelector('.conPROFILElognot')
let CloseconLogno = document.querySelector('.closeconnoLog')


CloseconLogno.addEventListener('click', function(){
    conteinetIFLOno.style.display = 'none'
})





let ProfeleLogIn = document.querySelector('.acounopencoIFNO')



   ProfeleLogIn.addEventListener('click', function(){
    if(isCookieSaved2 === true){
       location.href ="http://127.0.0.1:5501/Acount/acaunt.html"

    }else{
         conteinetIFLOno.style.display = 'flex'
        
       }
        })

        let LogInBtn2 = document.querySelector('.animated-button2')


        LogInBtn2.addEventListener('click', function(){
            welcomeNAME.style.opacity = 0
            WRAPPERlogIn.style.opacity = 1
            welcomeNAME.style.display = 'none'
            WRAPPERlogIn.style.display = 'flex'
                conteinetIFLOno.style.display = 'none'
        })







        let IMG_Logo = document.cookie
        .split("; ")
        .find((row) => row.startsWith("IMG_Logo="))
        ?.split("=")[1];

        console.log(document.cookie)
        

        