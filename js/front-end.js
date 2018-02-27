//AJAX CODE
 
/*global $ */
 
console.log("it is working")
 
/*global $ */
 
$(document).ready(function(){
    // $("#sign-in").click(function(){
        // $("#Login").hide();
        // $("#home").show();
    // });
    $("#week-1").click(function(){
        $("#home").hide();
        $("#Spelling").show();
    });
    $("#back-1").click(function(){
		$("#home").show();
        $("#Spelling").hide();
    });
    $("#week-2").click(function(){
        $("#home").hide();
        $("#Spelling2").show();
    });
    $("#back-2").click(function(){
        $("#home").show();
        $("#Spelling2").hide();
    });
    $("#week-3").click(function(){
        $("#home").hide();
        $("#Spelling3").show();
    });
     $("#back-3").click(function(){
        $("#home").show();
        $("#Spelling3").hide();
    });
    $("#week-4").click(function(){
        $("#home").hide();
        $("#Spelling4").show();
    });
    $("#back-4").click(function(){
        $("#home").show();
        $("#Spelling4").hide();
    });
    $("#Log-Out").click(function(){
        $("#home").hide();
        $("#LogOut").show();
    });
	$("#preview-1").click(function(){
        $("#word-1").show();
		$("#word-2").show();
		$("#word-3").show();
		$("#word-4").show();
		$("#word-5").show();
		$("#word-6").show();
		$("#word-7").show();
		$("#word-8").show();
		$("#word-9").show();
		$("#word-10").show();
    });
	$("#test-1").click(function(){
        $("#word-1").hide();
		$("#word-2").hide();
		$("#word-3").hide();
		$("#word-4").hide();
		$("#word-5").hide();
		$("#word-6").hide();
		$("#word-7").hide();
		$("#word-8").hide();
		$("#word-9").hide();
		$("#word-10").hide();
    });
	$("#preview-2").click(function(){
        $("#word-2-1").show();
		$("#word-2-2").show();
		$("#word-2-3").show();
		$("#word-2-4").show();
		$("#word-2-5").show();
		$("#word-2-6").show();
		$("#word-2-7").show();
		$("#word-2-8").show();
		$("#word-2-9").show();
		$("#word-2-10").show();
    });
	$("#test-2").click(function(){
        $("#word-2-1").hide();
		$("#word-2-2").hide();
		$("#word-2-3").hide();
		$("#word-2-4").hide();
		$("#word-2-5").hide();
		$("#word-2-6").hide();
		$("#word-2-7").hide();
		$("#word-2-8").hide();
		$("#word-2-9").hide();
		$("#word-2-10").hide();
    });
	$("#preview-3").click(function(){
        $("#word-3-1").show();
		$("#word-3-2").show();
		$("#word-3-3").show();
		$("#word-3-4").show();
		$("#word-3-5").show();
		$("#word-3-6").show();
		$("#word-3-7").show();
		$("#word-3-8").show();
		$("#word-3-9").show();
		$("#word-3-10").show();
    });
	$("#test-3").click(function(){
        $("#word-3-1").hide();
		$("#word-3-2").hide();
		$("#word-3-3").hide();
		$("#word-3-4").hide();
		$("#word-3-5").hide();
		$("#word-3-6").hide();
		$("#word-3-7").hide();
		$("#word-3-8").hide();
		$("#word-3-9").hide();
		$("#word-3-10").hide();
    });
	$("#preview-4").click(function(){
        $("#word-4-1").show();
		$("#word-4-2").show();
		$("#word-4-3").show();
		$("#word-4-4").show();
		$("#word-4-5").show();
		$("#word-4-6").show();
		$("#word-4-7").show();
		$("#word-4-8").show();
		$("#word-4-9").show();
		$("#word-4-10").show();
		$("#word-4-11").show();
		$("#word-4-12").show();
		$("#word-4-13").show();
		$("#word-4-14").show();
		$("#word-4-15").show();
    });
	$("#test-4").click(function(){
        $("#word-4-1").hide();
		$("#word-4-2").hide();
		$("#word-4-3").hide();
		$("#word-4-4").hide();
		$("#word-4-5").hide();
		$("#word-4-6").hide();
		$("#word-4-7").hide();
		$("#word-4-8").hide();
		$("#word-4-9").hide();
		$("#word-4-10").hide();
		$("#word-4-11").hide();
		$("#word-4-12").hide();
		$("#word-4-13").hide();
		$("#word-4-14").hide();
		$("#word-4-15").hide();
    });
});


$(document).ready(function(){
$("#sign-in").click(function(){
console.log("Function entered")
  var user_name=$('#user_name').val();
  var password_hash=$('#password_hash').val();
$.ajax(
	{
	type: 'POST',
	url: "https://project-spell.herokuapp.com/auth/login",
// headers: {
// 'Authorization': 'Basic ' + btoa(data.user_name + ':' + data.password_hash)
// },
	dataType: "json",
	data:{ user_name: user_name, password_hash: password_hash },
	success: function(responseData, textStatus, jqXHR) {
		$('#home').show();
		$('#Login').hide();
	},
	error: function(jqXHR, textStatus, errorThrown) {
		window.alert("There has been an error - Username and Password have been incorrectly entered");
	  }
	});
  });
});
 
 
 
 

 