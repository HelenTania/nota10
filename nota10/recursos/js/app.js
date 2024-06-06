let cont = 0

function registerLogin(){
	
	let login =  localStorage.getItem("login")
	if(login === null){
	localStorage.setItem("login","icet2024")	]
	localStorage.setItem("password","icet2024")
	}
}
function userValidation(){
	
	let logintorage =  localStorage.getItem("login")
	let passwordStorage = localStorage.getItem("password")
	if(loginStorage === null || passwordStorage === null){
		alert("realize seu cadastro")
	}
}
const loginInput = document.getElementById('login').value
const passwordInput = document.getElementById('password').value
if(( loginStorage == loginInput && passwordStorage == passwordInput)&& loginStorage != '' && passwordStorage !=''){
	window.location.href="home.html"
}else{
	if(cont == 0){
		createElementsinId('span')
	}
}
	
alert("Login ou Senha Incorreta")