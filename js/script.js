let num = '0';
let score = 0;

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

let q = [question1.question, question2.question, question3.question, question4.question]
 
function buildQuiz(q) {
  let question = document.getElementById('question');
  question.innerHTML = q;
}

buildQuiz(q)

let answer;

function showQuestion(obj) {
  answer = prompt('Ответьте на ' + obj.question);
  return answer;
}

function checkAnswer(obj) {
  if (answer === obj.correctAnswer) {
    alert('Верно');
    score++
  } else {
    alert('Неверно');
  }
}

showQuestion(question1)
checkAnswer(question1)

showQuestion(question2)
checkAnswer(question2)

showQuestion(question3)
checkAnswer(question3)

showQuestion(question4)
checkAnswer(question4)

let result = document.getElementById('result');
result.innerHTML = ('Количество верных ответов: ' + score);

function showSlide() {
  console.log('Номер слайда')
}

const buttonNext = document.getElementById('button-next')

buttonNext.addEventListener('click',(event) => {
  showSlide();
})

const buttonPrevious = document.getElementById('button-previous')

buttonPrevious.addEventListener('click',(event) => {
  showSlide();
})