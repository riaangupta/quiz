"use strict";

var quiz = {
  user: "Human",
  questions: [{
    text: "What state are we researching on?",
    responses: [{
      text: "Maharashtra"
    }, {
      text: "Punjab",
      correct: true
    }, {
      text: "Gujarat"
    }, {
      text: "Chandigarh"
    }]
  }, {
    text: "What Role does Riaan play?",
    responses: [{
      text: "Travel Guide",
      correct: true
    }, {
      text: "Researcher"
    }, {
      text: "Student"
    }, {
      text: "Teacher"
    }]
  }, {
    text: "What is the purpose of this?",
    responses: [{
      text: "Attract people"
    }, {
      text: "Showcase understanding",
      correct: true
    }, {
      text: "Advertise"
    }, {
      text: "None of the above"
    }]
  }, {
    text: "How many rivers is Punjab made up of?",
    responses: [{
      text: "5",
      correct: true
    }, {
      text: "8"
    }, {
      text: "4"
    }, {
      text: "7"
    }]
  }, {
    text: "What is Punjab's climate?",
    responses: [{
      text: "Hot"
    }, {
      text: "Cold"
    }, {
      text: "Tropical",
      correct: true
    }, {
      text: "Multi-seasonal"
    }]
  }, {
    text: "Name any one significant location in Punjab",
    responses: [{
      text: "Taj Mahal"
    }, {
      text: "Statue of Unity"
    }, {
      text: "Jallianwala Bhag",
      correct: true
    }, {
      text: "Islamabad"
    }]
  }, {
    text: "Which of these is not part of traditional Punjabi attire?",
    responses: [{
      text: "Chorn",
      correct: true
    }, {
      text: "Phulkari "
    }, {
      text: "Turban"
    }, {
      text: "Tehmat"
    }]
  }, {
    text: "Which of these is not widely famous in Punajb?",
    responses: [{
      text: "Chhole Bhature"
    }, {
      text: "Anda Bhurji",
      correct: true
    }, {
      text: "Lassi "
    }, {
      text: "Aloo Paratha"
    }]
  }, {
    text: "Which impact is not mentioned?",
    responses: [{
      text: "Environmental"
    }, {
      text: "Social "
    }, {
      text: "Political",
      correct: true
    }, {
      text: "Economical"
    }]
  }, {
    text: "Which of these are issues faces in Punjab?",
    responses: [{
      text: "Argarian Issues"
    }, {
      text: "All of the above",
      correct: true
    }, {
      text: "Drug Addiction"
    }, {
      text: "Gender Discrimination"
    }]
  }]
},
    userResponseSkelaton = Array(quiz.questions.length).fill(null);
var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false
  },
  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    }
  },
  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index); //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length) this.questionIndex++;
    },
    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;

      for (let i = 0; i < this.userResponses.length; i++) {
        if (typeof this.quiz.questions[i].responses[this.userResponses[i]] !== "undefined" && this.quiz.questions[i].responses[this.userResponses[i]].correct) {
          score = score + 1;
        }
      }

      return score; //return this.userResponses.filter(function(val) { return val }).length;
    }
  }
});