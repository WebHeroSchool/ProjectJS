let num = '0';
let score;

const question1 = {
  question: 'вопрос1',
  correctAnswer: 'ответ1'
}

const question2 = {
  question: 'вопрос2',
  correctAnswer: 'ответ2'
}

const question3 = {
  question: 'вопрос3',
  correctAnswer: 'ответ3'
}

const question4 = {
  question: 'вопрос4',
  correctAnswer: 'ответ4'
}

let questionsArray = [question1, question2, question3, question4]

let answer;

function showQuestion(obj) {
  answer = prompt(obj.question);
  return answer;
}

showQuestion(question2)

function checkAnswer(obj) {
  if (answer === obj.correctAnswer) {
    alert('Верно');
  } else {
    alert('Неверно');
  }
}

checkAnswer(question2)