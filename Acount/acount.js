     
let CARDNAME = document.querySelector('.CARDNAME')




    let cookieValue1 = document.cookie
    .split("; ")
    .find((row) => row.startsWith("user_name="))
    ?.split("=")[1];
  
    


    let cookieValue2 = document.cookie
    .split("; ")
    .find((row) => row.startsWith("user_name2="))
    ?.split("=")[1];
    
    
    
CARDNAME.innerHTML = cookieValue1 + "  "  +  cookieValue2



function DontHaveName() {
    document.cookie = `user_name=${inputFIELD.value};max-age=5000000000000000`
    Name.style.display = 'none'
    Name.innerHTML =  inputFIELD.value
}




	function DontHaveName() {
		document.cookie = `user_name=${inputFIELD.value};max-age=5000000000000000`
		Name.style.display = 'none'
		Name.innerHTML =  inputFIELD.value
	}









    let photomas = [
          
        "/imgProfile/(.jpg ",
        "/imgProfile/2abedb36-1dd1-43b3-a2b8-30e3bd6a3a77.jpg ",
        "/imgProfile/4fb377d7-28a9-4ffd-b207-008719b72deb.jpg ",
        "/imgProfile/05d7f474-3c67-467b-be14-b026d7e31b28.jpg ",
        "/imgProfile/7d7dde30-3999-4c4f-9283-c10fa82b1215.jpg",
        "/imgProfile/48b80b58-5cba-4c0e-81f8-40424c1f9f7b.jpg ",
        "/imgProfile/60fb33b5-f869-41fe-97e5-f503dbb6d08d.jpg ",
        "/imgProfile/63dbd280-c5c3-4f03-aa37-51d9a2c57080.jpg ",
        "/imgProfile/372b6367-ca95-4fd6-b2ab-66483a6c782c.jpg ",
        "/imgProfile/3187cb2c-b7c2-4732-add1-815e687c8547.jpg ",
        "/imgProfile/6847a4f2-1022-4ed0-87a8-161ca57d6521.jpg ",
        "/imgProfile/6897f017-c12a-49cb-bffc-623bc2021bcf.jpg ",
        "/imgProfile/a943c073-1413-4fa5-9645-4dde907a6d7c.jpg ",
        "/imgProfile/audrey 👻.jpg ",
        "/imgProfile/Baby Patrick.jpg ",
        "/imgProfile/bf14aff4-db95-4904-91b6-deb7753e0fd7.jpg ",
        "/imgProfile/c2bc4ba5-9ddc-4f3a-96b4-ff4a8ddbfd3a.jpg ",
        "/imgProfile/c137f57d-3979-4f4f-a96c-349c96aeea80.jpg ",
        "/imgProfile/cat.jpg ",
        "/imgProfile/Cat🎀.jpg ",
        "/imgProfile/cc1f8e7c-347d-4e99-953a-da0ee08e3f8e.jpg ",
        "/imgProfile/d5a5ac4a-8934-453e-99bb-96c659114767.jpg ",
        "/imgProfile/e9c46e73-0e86-4475-9343-e80187001df3.jpg ",
        "/imgProfile/líkє whαt чσu ѕєє_ fσllσw mє_ ριитєяєѕт….jpg ",
        "/imgProfile/Lilith (@wiitadaech).jpg ",
        "/imgProfile/𝐌𝐲 𝐥𝐨𝐯𝐞𝐫 ; 𝐒𝐜𝐚𝐫𝐚𝐦𝐨𝐮𝐜𝐡𝐞  - 3_ Detention_ A date_.jpg ",
        "/imgProfile/Tag someone with a temper.jpg ",
        "/imgProfile/Zxc Cat GIF – Zxc Cat – Ищите GIF-файлы и обменивайтесь ими.gif ",
        "/imgProfile/Аватарки на все случаи жизни.jpg ",
        "/imgProfile/вот вам на аву!.jpg ",
        "/imgProfile/завантаження (1).jpg ",
        "/imgProfile/завантаження (2).jpg ",
        "/imgProfile/завантаження.jpg ",
        "/imgProfile/Стикер телеграм ✋ из набора «DL TSP II».jpg ",
        "/imgProfile/физрук до 1999.jpg ",
        "/imgProfile/Хомяк.jpg ",
        "/imgProfile/Чмош 2.jpg ",


    ]

    
    let closeconphoto = document.querySelector('.close-con-photo')
    let conPhoto = document.querySelector('.con-Photo')



    closeconphoto.addEventListener('click', function(){
        conPhoto.style.background = 'red'
        conPhoto.style.display = "none"
    })


    for (let i = 0; i < photomas.length; i++) {
        let photoFor = photomas[i];
        
    function renderDataaaa() {



            conPhoto.innerHTML += `<img src="${photoFor}" class="photo-photo"></img>`

     
    }
    console.log(photoFor)

    renderDataaaa()

    }
	
// let photoPHOTO = document.querySelectorAll('.photo-photo')


// photoPHOTO.forEach(element => {
//     element.addEventListener('click', function(){
//         element.src = 
//         console.log(photoPHOTO)
//     })
// });

