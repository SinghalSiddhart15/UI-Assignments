$(document).ready(function() {
	$("#myname").on('blur', function() {

		var name = $("#myname").val();

		if ((name.search(/^[a-zA-Z]/) === -1)) {
			alert("No spaces and numbers allowed  ");

			$('#mypassword').val("");
			$('#Cpassword').val("");
			$("#reg").attr("disabled", true);
		}

	});

	$("#check").on('click', function() {

		if ($('#check').is(':checked')) {

			var permanetaddress = $("#paddress").val();

			$("#caddress").val(permanetaddress);

			$("#caddress").attr("disabled", true);

			$('#mypassword').val("");
			$('#Cpassword').val("");
			$("#reg").attr("disabled", true);
		} else {

			$("#caddress").val("");
			$("#caddress").attr("disabled", false);

		}

	});

	$("#email").on('blur', function() {

		var email = $("#email").val();
		var reg = /^([A-Za-z0-9_.-])+\@([A-Za-z])+\.([A-Za-z]{2,3})/;


		if (!reg.test(email)) {
			alert("email not vaild");
			$('#mypassword').val("");
			$('#Cpassword').val("");
			$("#reg").attr("disabled", true);
		}

	});

	$('#myphone').on('blur', function() {

		var phone = $('#myphone').val();
		var reg = /[0-9]{10}/;

		if (!reg.test(phone)) {
			alert("only digits allowed");
			$('#mypassword').val("");
			$('#Cpassword').val("");
			$("#reg").attr("disabled", true);
		}

	});

	$('#mypassword').on('blur', function() {

		var password = $('#mypassword').val();

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

	});

	$("#Cpassword").on('blur', function() {


		var password = $('#mypassword').val();
		var cpassword = $('#Cpassword').val();

		if (password != cpassword) {
			alert("password donot match");
			$("#reg").attr("disabled", true);

		} else {

			var registerButton = $("#reg");
			registerButton.attr("disabled", false);
			registerButton.attr("style", "background-color:green");
		}

	});

	$("#reg").on('click', function() {

		var name = $("#myname").val();

		if (!name.trim()) {
			alert(" Name cannot be blank");
			return false;
		}

		var permanetaddress = $("#paddress").val();

		if (!permanetaddress.trim()) {
			alert("Permanet Adress cannot be blank");
			return false;

		}

		var currentaddress = $("#caddress").val();

		if (!currentaddress.trim()) {
			alert("Current Adress cannot be blank");
			return false;

		}

		var email = $("#email").val();

		if (!email.trim()) {
			alert("Email cannot be blank");
			return false;

		}

		var phone = $('#myphone').val();

		if (!phone.trim()) {
			alert("Phone number cannot be blank");
			return false;

		}
		var password = $('#mypassword').val();

		if (!password.trim) {
			alert("password cannot be blank");
			return false;

		}

		var cpassword = $('#Cpassword').val();

		if (!cpassword.trim) {
			alert("Please re enter password");
			return false;
		}

		var lname = $("#mylname").val();
		var name = $("#myname").val();
		var email = $("#email").val();

		$("#parent-div").append(name + " " + lname + "<br>").attr('title', email).addClass("testclass");

	});

	$("#res").on('click', function() {
		$("#myname").val("");
		$("#mylname").val("");
		$("#paddress").val("");
		$("#caddress").val("");
		$("#email").val("");
		$('#myphone').val("");
		$('#mypassword').val("");
		$('#Cpassword').val("");
		$('#check').prop('checked', false);
	});


	$(".header_button").on('click', function() {
		$('#mydrop').toggleClass('show');

	});

});
