const questions = [
    {
      question: "What does DOM stand for in JavaScript?",
      answers: [
        "Document of Object Multiple",
        "Document of Object Model",
        "Document Object Model",
      ],
      correct: 2,
    },
    {
      question: "What is the correct way to write a comment in JavaScript?",
      answers: [
        "// This is a comment",
        "<!-- This is a comment -->",
        "' This is a comment",
      ],
      correct: 0,
    },
    {
      question: "Which of these methods is used to change the content of an HTML element?",
      answers: [
        "innerHTML",
        "createTextNode",
        "appendChild",
      ],
      correct: 0,
    },
    {
      question: "How do you declare a variable in JavaScript?",
      answers: [
        "variable myVar;",
        "v myVar;",
        "var myVar;",
      ],
      correct: 2,
    },
    {
      question: "What is a ternary operator in JavaScript?",
      answers: [
        "An operator that operates on three variables",
        "An operator that operates on two operands",
        "An operator that operates on a conditional expression",
      ],
      correct: 2,
    },
    {
      question: "What is the strict equality operator in JavaScript?",
      answers: [
        "==",
        "===",
        "=",
      ],
      correct: 1,
    },
    {
      question: "What is an array in JavaScript?",
      answers: [
        "A variable that contains only numbers",
        "A data structure that stores a collection of elements",
        "A type of loop in JavaScript",
      ],
      correct: 1,
    },
    {
      question: "What is the correct way to select an HTML element using its ID in JavaScript?",
      answers: [
        "getElementByName('id')",
        "selectElementByID('id')",
        "getElementById('id')",
      ],
      correct: 2,
    },
    {
      question: "What is the output of the code: console.log(typeof([]));",
      answers: [
        "'object'",
        "'array'",
        "'undefined'",
      ],
      correct: 0,
    },
    {
      question: "What does the 'push()' method do on an array in JavaScript?",
      answers: [
        "Removes an element from the end of the array",
        "Adds an element to the beginning of the array",
        "Adds an element to the end of the array",
      ],
      correct: 2,
    },
  ];
  
const quiz = document.querySelector(".quiz")
const template = document.querySelector("template")
const hits = new Set()
const totalOfQuestions = questions.length
const totalOfHits = document.querySelector(".hits span")
totalOfHits.textContent = hits.size + " out of " + totalOfQuestions

for(const item of questions) {
  const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.question
  
  for (let answer of item.answers) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("input").setAttribute("name", "question-" + questions.indexOf(item))
    dt.querySelector("input").value = item.answers.indexOf(answer)
    dt.querySelector("input").onchange = (event) => {
      const isCorrect = event.target.value == item.correct
      
      hits.delete(item)
      if(isCorrect) {
        hits.add(item)
      }

      totalOfHits.textContent = hits.size + " out of " + totalOfQuestions
    }
    dt.querySelector("span").textContent = answer

    quizItem.querySelector("dl").appendChild(dt)
  }
  quizItem.querySelector("dl dt").remove()

  quiz.appendChild(quizItem)
}