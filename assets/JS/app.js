
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAqY_cDn9KnKnvPZeHqhhtUWlPQc4xz1dg",
    authDomain: "trainschedule-e29a5.firebaseapp.com",
    databaseURL: "https://trainschedule-e29a5.firebaseio.com",
    projectId: "trainschedule-e29a5",
    storageBucket: "",
    messagingSenderId: "160276224936"
  };

  firebase.initializeApp(config);

  //a variable to referance the database

  var database = firebase.database();

  //variables from form

var trainName = "";
var destination = "";
var firstTrain = 0;
var frequency = 0;

  // 2. Button for adding Trains
$("#submit").on("click", function(event) {
  event.preventDefault();


	trainName = $("#trainName").val().trim();

	destination = $("#destination").val().trim();

	firstTrain = $("#firstTrain").val().trim();

	frequency = $("#frequency").val().trim();

//console log worked up to here. 

  database.ref().push({

	    trainName: trainName,
	    destination: destination,
	    firstTrain: firstTrain,
	    frequency: frequency

	});
});

database.ref().on("child_added", function(childSnapshot) {

 

  		//monthsWorked = moment().diff(moment(startDate),"months");
  		//totalBilled = monthsWorked * (childSnapshot.val().monthlyRate);


      	var myRow = $("<tr>");
      	var myData = $("<td>");
      	myData.html(childSnapshot.val().trainName);
      	myRow.append(myData);

       	myData = $("<td>");
      	myData.html(childSnapshot.val().destination);
      	myRow.append(myData);

       	//myData = $("<td>");
      	//myData.html(childSnapshot.val().firstTrain);
      	//myRow.append(myData);

       	myData = $("<td>");
      	myData.html(childSnapshot.val().frequency);
      	myRow.append(myData);

       	//myData = $("<td>");
      	//myData.html(totalBilled);
      	//myRow.append(myData);
   
	    $("tbody").append(myRow);

	     // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);

});



