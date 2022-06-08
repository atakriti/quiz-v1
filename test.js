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
  
let loopCorrect = ""
for (let i of quizData) {
  loopCorrect += i.correct
}
let one = loopCorrect
// console.log(quizData.filter(n => n.correct))
console.log("---",one)

let loopKeys = ""
for (let i of quizData) {
    loopKeys=Object.keys(i)
}
console.log(loopKeys.join(" "));

// function fun() {
//     let a = ""
//     if (loopCorrect == loopKeys.join(" ")) {
//         a += loopKeys
//     }
//     return a
// }
// console.log(fun())
console.log(quizData[0].correct.includes("d"))

