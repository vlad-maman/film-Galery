     
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



var img = document.getElementById('img');
var noimage = img.src;	
  
function handleFileSelect(evt) {
			var file = evt.target.files[0]; // FileList object, files[0] is your file
			console.log(file);		
			img.src = window.URL.createObjectURL(file);		
}

document.getElementById('file').addEventListener('change', handleFileSelect, false);
		
			document.querySelector('#removephoto').addEventListener('click',   function(e) {		
						document.getElementById('file').value="";
						img.src="/Acount/8847419.png";
						e.preventDefault();
  });					
document.querySelector('#img').addEventListener('click',           function(e) {	
						performClick(document.getElementById('file'));
						e.preventDefault();
  });			document.querySelector('#addphoto').addEventListener('click',     function(e) {		
						performClick(document.getElementById('file'));
						e.preventDefault();
  });	
			
function performClick(node) {			
		  	var evt = document.createEvent("MouseEvents");
			  evt.initEvent("click", true, false);
		 	 node.dispatchEvent(evt);
}

