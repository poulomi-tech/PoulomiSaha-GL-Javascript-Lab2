function Question(questionText, questionNo){

    this.questionText = questionText;
    this.questionNo = questionNo;

}

let question1 = new Question("Javascript supports", 1);
let question2 = new Question("Which language is used for styling web pages?", 2);
let question3 = new Question("Which is not a Javascript framework?", 3);
let question4 = new Question("Which is used to connect database?", 4);
let question5 = new Question("Javascript is a ", 5);


function Answer(answerText){

    this.answerText = answerText;
}

//Question 1
 let answer1Q1 = new Answer("Function");
 let answer2Q1 = new Answer("HTML");
 let answer3Q1 = new Answer("CSS");
 let answer4Q1 = new Answer("XHTML");

//Question 2
let answer1Q2 = new Answer("HTML");
 let answer2Q2 = new Answer("JQuery");
 let answer3Q2 = new Answer("CSS");
 let answer4Q2 = new Answer("XML");

//Question 3
 let answer1Q3 = new Answer("Python Scripts");
 let answer2Q3 = new Answer("HTML");
 let answer3Q3 = new Answer("CSS");
 let answer4Q3 = new Answer("XHTML");

//Question 4
 let answer1Q4 = new Answer("Function");
 let answer2Q4 = new Answer("HTML");
 let answer3Q4 = new Answer("CSS");
 let answer4Q4 = new Answer("All");


 //Question 5

 let answer1Q5 = new Answer("Lnanguage");
 let answer2Q5 = new Answer("Programming language");
 let answer3Q5 = new Answer("Development");
 let answer4Q5 = new Answer("All");
