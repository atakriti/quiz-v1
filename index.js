const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
// ==============
// The title ================================
let question = document.getElementById("question");
// the answers
let answerA = document.getElementById("a_text");
let answerB = document.getElementById("b_text");
let answerC = document.getElementById("c_text");
let answerD = document.getElementById("d_text");
let answers = document.querySelectorAll(".answer");
// ============= btn
let btn = document.getElementById("submit");
question.innerHTML = quizData[0].question;
answerA.innerHTML = quizData[1].a;
// ========= btn function
let index = 0;
load(index);
btn.addEventListener("click", () => {
    if (
        !answers[0].checked &&
        !answers[1].checked &&
        !answers[2].checked &&
        !answers[3].checked
    ) {return}
  
    if (index < quizData.length) {
        index++;
        load(index);
        deSelect();
  }
});
function load(i) {
  question.innerHTML = quizData[i].question;
  answerA.innerHTML = quizData[i].a;
  answerB.innerHTML = quizData[i].b;
  answerC.innerHTML = quizData[i].c;
  answerD.innerHTML = quizData[i].d;
}
// deselecting
function deSelect() {
  answers.forEach((i) => (i.checked = false));
}
