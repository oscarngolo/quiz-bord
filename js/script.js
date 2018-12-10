function submit() {
  var score = 0;
  var numOfQuestions = 5;
  var ansArr = ['b', 'c', 'a', 'c', 'c'];

  var q1 = document.getElementById('q1').value;
  var q2 = document.getElementById('q2').value;
  var q3 = document.getElementById('q3').value;
  var q4 = document.getElementById('q4').value;
  var q5 = document.getElementById('q5').value;


  for (var i = 1; i <= numOfQuestions; i++) {
    if (eval('q' + i) == '') {
      alert("you missed question number" + i);
    }
  }
  for (var i = 1; i <= numOfQuestions; i++) {
    if (eval('q' + i) == ansArr[i - 1]) {
      score++;
    }
  }

  var results = document.getElementById('results')
  results.innerHTML = "<h2>Your scores " + score + " points out of " + numOfQuestions + "</h2>";
  alert('Your scores ' + score + " out of " + numOfQuestions)

};
