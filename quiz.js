// Array of quiz questions and answers
const quizQuestions = [
    { question: "What is the capital of India?", answer: "new delhi" },
    { question: "Who is the father of computers?", answer: "charles babbage" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is H2O commonly known as?", answer: "water" },
    { question: "What is the largest mammal on Earth?", answer: "blue whale" }
];

// Function to run the quiz
function runQuiz() {
    let score = 0; // score counter

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        // If user clicks cancel → treat as empty string
        if (userAnswer === null) {
            userAnswer = "";
        }

        // Normalize input
        userAnswer = userAnswer.toLowerCase().trim();

        // Check answer
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! ");
        } else {
            alert("Incorrect \nCorrect Answer: " + quizQuestions[i].answer);
        }
    }

    // Final Score
    alert("Quiz Finished!\nYour Score: " + score + " / " + quizQuestions.length);
}

// Run the quiz
runQuiz();