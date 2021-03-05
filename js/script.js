let form = document.querySelector('.form');
let name = form.querySelector('.form-name');
let nameUser;
const submitButton = document.getElementById("submit");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

previousButton.style.display = "none";
nextButton.style.display = "none";
submitButton.style.display = "none";

function buildQuizAfterCheck() {
  const myQuestions = [
  {
    question: "Где находится статуя Венеры Миллоской?",
    answers: {
      a: "возле Триумфальной арки",
      b: "во дворце бракосочетания",
      c: "в Лувре"
    },
    correctAnswer: "c"
  },
  {
    question: "Найдите пару Дон-Кихоту",
    answers: {
      a: "Изольда",
      b: "Дульсинея",
      c: "Изабелла"
    },
    correctAnswer: "b"
  },
  {
    question: "Настоящее имя Золушки в сказке",
    answers: {
      a: "Элиза",
      b: "Марианна",
      c: "Эльза",
    },
    correctAnswer: "c"
  }
  ];

  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label id="answer">
             <input id="radio" type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });
    quizContainer.innerHTML = output.join("");
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
      }
    });

    resultsContainer.innerHTML = nameUser + `, ваш результат ${numCorrect} из ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  const checkResult = (e) => {
    const tar = e.target;

    if (tar.tagName === "INPUT") {
      const questionNumber = tar.name.slice(-1);
      const userAnswer = tar.value;
      const isCorrect = myQuestions[questionNumber].correctAnswer === userAnswer;
      if (isCorrect) {
        tar.parentNode.style.color = "lightgreen";
      } else {
        tar.parentNode.style.color = "red";
      }
      const radioButtons = e.currentTarget.querySelectorAll(".answers input");
      radioButtons.forEach(button => button.setAttribute("disabled", true))
    }
  }

  const setAnswerHandlers = () => {
    const container = quizContainer.querySelectorAll(".slide .answers");
    container.forEach(answer => {
      answer.addEventListener("click", checkResult);
    })
  }

  setAnswerHandlers();

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
}

form.addEventListener("submit", function (event) {
  let regex = /^[A-ZА-Я]+[a-zа-я]{2,10}$/;
  name.classList.remove("error");

  if (!regex.test(name.value)) {
    event.preventDefault();
    console.log("error");
    name.classList.add("error");

    let error = document.createElement("div");
    error.className = "error-block";
    error.style.color = "red";
    error.innerHTML = "Введите ваше имя с заглавной буквы без использования цифр";
    name.parentElement.insertBefore(error, name);
  } else {
    nameUser = regex.exec(name.value);
    console.log(nameUser);
    event.preventDefault();
    form.style.display = "none";
    buildQuizAfterCheck()
  }
})

// let regex = /^[A-Za-z]{2,10}$/;