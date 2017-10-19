
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

  var database = firebase.database();

  // 2. Button for adding Trains
$("#submit").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#trainName").val();
  var destination = $("#destination").val();
  var firstTrain = $("#firstTrain").val();
  var frequency = $("#frequency").val();

  // Creates local "temporary" object for holding traub data
  var newTrain = {
    TrainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  };

  // Uploads employee data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(trainName.trainName);
  console.log(destination.destination);
  console.log(firstTrain.firstTrain);
  console.log(frequency.frequency);
});