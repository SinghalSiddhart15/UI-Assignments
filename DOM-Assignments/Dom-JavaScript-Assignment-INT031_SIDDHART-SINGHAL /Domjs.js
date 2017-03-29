function mydrop() {
	document.getElementById("mydrop").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.header_button')) {

		var eledrop = document.getElementsByClassName("header_drop");
		var i;
		for (i = 0; i < eledrop.length; i++) {
			var down = eledrop[i];
			if (down.classList.contains('show')) {
				down.classList.remove('show');
			}
		}
	}
}

function mycheck() {

	if (document.getElementById("check").checked == true) {
		var permanetAddr = document.getElementById("paddress");
		var currentAddr = document.getElementById("caddress");

		currentAddr.value = permanetAddr.value;

		document.getElementById('caddress').disabled = true;
		document.getElementById("mypassword").value = "";
		document.getElementById("Cpassword").value = "";
		document.getElementById("reg").disabled = true;
	} else {
		document.getElementById("caddress").value = "";
		document.getElementById('caddress').disabled = false;
	}
}

function myfname() {

	var name = document.getElementById('myname').value;

	if (name.search(/^[a-zA-Z]/) === -1) {
		alert("No spaces and numbers allowed  ");

		document.getElementById("mypassword").value = "";
		document.getElementById("Cpassword").value = "";
		document.getElementById("reg").disabled = true;
	}

}

function myadd() {
	var address = document.getElementById('paddress').value;

	if (address.length == 0) {
		alert(" Address cannot be blank");

		document.getElementById("mypassword").value = "";
		document.getElementById("Cpassword").value = "";
		document.getElementById("reg").disabled = true;
	}
}

function myemail() {

	var email = document.getElementById('email').value;
	var reg = /^([A-Za-z0-9_.-])+\@([A-Za-z])+\.([A-Za-z]{2,3})/;

	if (!reg.test(email)) {
		alert("email not vaild");
		document.getElementById("mypassword").value = "";
		document.getElementById("Cpassword").value = "";
		document.getElementById("reg").disabled = true;
	}
}

function myphn() {

	var phone = document.getElementById("myphone").value;
	var reg = /[0-9]{10}/;

	if (!reg.test(phone)) {
		alert("only digits allowed");
		document.getElementById("mypassword").value = "";
		document.getElementById("Cpassword").value = "";
		document.getElementById("reg").disabled = true;
	}
}

function mypass() {

	var password = document.getElementById("mypassword").value;

	if (password.search(/^\S*$/) == -1) {
		alert("No Spaces are allowed");
	} else if (password.length < 8) {
		alert("Password should be of eight character long");
	} else if (password.search(/\d/) == -1) {
		alert("Password should contain at least one number  ");
	} else if (password.search(/[A-Z]/) == -1) {
		alert("Password should contain at least one  Upper case letter");

	} else if (password.search(/[a-z]/) == -1) {
		alert("Password should contain at least one lower case letter");
	} else if (password.search(/[!@#$%^&*()_+{}?/<>`~;:'"]/) == -1) {
		alert("Password should contain one special character");
	} else {
		return true;
	}
	password.preventDefault();
}


function passmatch() {

	var password = document.getElementById("mypassword").value;
	var cpassword = document.getElementById("Cpassword").value;

	if (password != cpassword) {
		alert("Passwords donot match");
		document.getElementById("reg").disabled = true;

	} else {
		document.getElementById("reg").disabled = false;
		document.getElementById("reg").style.backgroundColor = "#4caf50";
	}
}


function myreg() {

	var name = document.getElementById('myname').value;
	if (name.length == 0) {
		alert(" Name cannot be blank");
		return false;
	}

	var address = document.getElementById('paddress').value;

	if (address.length == 0) {
		alert(" Address cannot be blank");
		return false;
	}

	var caddress = document.getElementById('caddress').value;

	if (caddress.length == 0) {
		alert(" Current Address cannot be blank");
		return false;
	}

	var email = document.getElementById('email').value;
	if (email.length == 0) {
		alert(" Email cannot be blank");
		return false;
	}

	var phone = document.getElementById("myphone").value;
	if (phone.length == 0) {
		alert(" Phone number cannot be blank");
		return false;
	}

	var password = document.getElementById("mypassword").value;
	if (password.length == 0) {
		alert(" Password cannot be blank");
		return false;
	}

	var cpassword = document.getElementById("Cpassword").value;
	if (cpassword.length == 0) {
		alert(" Please Re- Enter password");
		return false;
	}


	var firstname = document.getElementById("myname").value;
	var lastname = document.getElementById("mylname").value
	var email = document.getElementById("email").value;
	showDashboard(firstname, lastname, email);


}

function showDashboard(firstname, lastname, email) {
	var parentElement = document.getElementById('parent-div');
	var inputElement = document.createElement("INPUT");
	inputElement.setAttribute("type", "button");
	inputElement.setAttribute("title", email);
	inputElement.setAttribute("class", "testclass");
	inputElement.setAttribute("value", firstname + " " + lastname);
	parentElement.appendChild(inputElement);
}

function myres() {

	document.getElementById("myname").value = "";
	document.getElementById("mylname").value = "";
	document.getElementById("check").value = "";
	document.getElementById("paddress").value = "";
	document.getElementById("caddress").value = "";
	document.getElementById("email").value = "";
	document.getElementById("myphone").value = "";
	document.getElementById("mypassword").value = "";
	document.getElementById("Cpassword").value = "";
}
window.onload = function() {
	document.getElementById("myname").onblur = function() {
		myfname();
	}
	document.getElementById("paddress").onblur = function() {
		myadd();
	}
	document.getElementById("check").onclick = function() {
		mycheck();
	}
	document.getElementById("email").onblur = function() {
		myemail();
	}
	document.getElementById("myphone").onblur = function() {
		myphn();
	}
	document.getElementById("mypassword").onblur = function() {
		mypass();
	}
	document.getElementById("Cpassword").onblur = function() {
		passmatch();
	}
	document.getElementById("res").onclick = function() {
		myres();
	}
	document.getElementById("reg").onclick = function() {
		myreg();
	}
	document.getElementById("drop").onclick = function() {
		mydrop();
	}
}
