var allQuestions = [{
    question: "Why use css?",
    choices: ["it helps make the web page's browser independent.", "it helps create unique web pages.", "it allows for the separation of style and content"],
    correctAnswer: 2
  },

  {
    question: "What are style sheets used for?",
    choices: ["to script web pages.", "to control the look and feel of web documents.", "to store the keywords of web pages"],
    correctAnswer: 1
  },

  {
    question: "Select the attribute that organizes the inline styling:",
    choices: ["style.", "id.", "class."],
    correctAnswer: 0
  },

  {
    question: " Where should the style tag be declared to organize an internal CSS? ",
    choices: ["external file.", "body", "head"],
    correctAnswer: 2
  },

  {
    question: "From the three types of styling, which one is the most useful in terms of website optimization?",
    choices: ["External", "Inline", "Internal"],
    correctAnswer: 0
  }
]

var currentquestion = 0;
var correctAnswers = 0;

function setupOptions() {
  $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
  var options = allQuestions[currentquestion].choices;
  var formHtml = '';
  for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"<label for="option' + i + '">' +
      allQuestions[currentquestion].choices[i] + '</label></div><br/>';
  }
  $('#form').html(formHtml);
  $("#option0").prop('checked', true);
};

function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
  };
};

$(document).ready(function() {

  $(".jumbotron").hide();
  $(".well").hide()
  $('#start').click(function() {
    $(".jumbotron").fadeIn();
    $(".well").fadeIn();
    $(this).hide();
  });


  setupOptions();

  $("#next").click(function() {
    event.preventDefault();
    checkAns();
    currentquestion++;

    if (currentquestion < allQuestions.length) {
      setupOptions();
      if (currentquestion == allQuestions.length - 1) {
        $('#next').html("Submit");
        $('#next').click(function() {
          $("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
          $("#result").fadeIn();
        });

      };

    };
  });
});
