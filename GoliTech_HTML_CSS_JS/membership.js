// BAR MENU
const bar = document.getElementById('bar');
const times = document.getElementById('times');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(times){
    times.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// FORM REGISTRATION
const submitregist = document.getElementById("submit");

submitregist.addEventListener('click', ()=>{
	const name = document.getElementById('name').value;
	const gender = document.getElementById('gender').value;
	const country = document.getElementById('country').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const addr = document.getElementById('addr').value;
	const tnc = document.getElementById('tnc').checked;

	event.preventDefault();
	if(name === "" || gender === "" || email === "" || phone === "" || addr === "" || !tnc || country === ""){
		if(name === "") alert("Please fill your Name");
		else if(email === "") alert ("Fill Email");
		else if(phone === "") alert ("Fill Phone");
		else if(addr === "") alert ("Fill Address");
		else if(gender === "") alert ("Fill Gender");
		else if(country === "") alert ("Fill Country")
		
		
		else alert ("Fill Terms and Conditions");
		return;
	}

	let keong = 0, dot = 0;
	let emaillen = email.length;

	for(let i = 0; i < emaillen; i++){
		if(email[i] === '@') keong++;
		else if(email[i] === '.') dot++;
	}

	if(keong != 1 || dot < 1){
		alert("Email is invalid");
		return;
	}

	let phoneLen = phone.length;

	for(let i = 0; i < phoneLen; i++){
		let asciiVal = phone.charCodeAt(i);
		if((asciiVal < 48 || asciiVal > 57) && phone[i] != '-'){
			alert ("Invalid phone number");
			return;
		}
	}

	const form = document.getElementById("form-container");
	form.reset();
	alert("You are registered!");

})