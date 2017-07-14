	$("#submit-btn").on("click", function(event) {

		event.preventDefault();

		var surveyResults = {
			name : $("#name").val().trim(),
			picture : $("#picture").val().trim(),
			survey : [$("#question1").val(), $("#question2").val(), $("#question3").val(), $("#question4").val(), $("#question5").val(), $("#question6").val(), $("#question7").val(), $("#question8").val(), $("#question9").val(), $("#question10").val()]
		}


		var url = window.location.origin;

		$.post(url + "/api/friends", surveyResults, function(data) {
		
		

	    		$("#currentMatchName").html("<h1>" + data.name + "</h1>");

	    		$("#currentMatchPhoto").html("<img src=" + data.picture + ">");


	    	});

	});