import questions from "./questions.js";

const btn = document.querySelector("button");
const actualQuizSection = document.querySelector(".actualQuizSection");
const timerDiv = document.querySelector(".time");
const ques = document.querySelector(".ques");
const queopt = document.querySelector(".queopt");
const userAnswers = []

let queCount = 0;
let timer = 5;
btn.addEventListener("click", () => {
    btn.style.display = "none";
    
    //for pring the first que instantly
    timerDiv.innerHTML = timer;
    timerDiv.style.cssText="background-color:black; color:white; border-radius:50%; width:30px; height:30px; display:flex; justify-content:center; align-items:center";
    displayQuestionAndOptions(queCount);
    
    // actualQuizSection.classList.add("bg-white","rounded-lg");
    // timerDiv.classList.add("bg-white","rounded-lg");
    const interval = setInterval(() => {
        if (timer === 0) {
            if (queCount < questions.length - 1) {
                queCount++
                timer = 5;
                timerDiv.innerHTML = timer;
                displayQuestionAndOptions(queCount);
            }
            else {
                clearInterval(interval);
                actualQuizSection.innerHTML = "";
                timerDiv.innerHTML = "";
                calculateScore()
            }
        }
        else {
            timer--;
            timerDiv.innerHTML = timer;
        }
    }, 1000)

});

function displayQuestionAndOptions(queCount) {
    ques.innerHTML = "";
    queopt.innerHTML = "";
    const heading = document.createElement("h1");

    heading.innerHTML = questions[queCount].q;
    ques.append(heading);
    actualQuizSection.append(ques);

    questions[queCount].options.map((opt) => {
        const option = document.createElement("p");
        option.classList.add("w-[46%]", "my-4", "bg-black", "text-white", "border-2", "rounded-lg", "px-4", "py-1", "cursor-pointer", "hover:bg-white", "hover:text-black", "capitalize")
        option.innerHTML = opt;
        option.addEventListener("click", storeUserAnswer);
        queopt.append(option);
        actualQuizSection.append(queopt);
    })

}

function storeUserAnswer(e) {
    userAnswers.push(e.target.innerText);
}

function calculateScore() {
    // console.log("calculating score");
    let score = 0
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].a) score++;
    })
    console.log("Your score is: " + score);
    

}





// // let count = 0;
// // btn.addEventListener("click", () => {
// //     const interval = setInterval(() => {
// //         if (count === 5) clearInterval(interval);
// //         else {
// //             console.log("Khushi");
// //             count++;
// //         }
// //     }, 1000);
// // });

// // queAns();





// import questions from "./questions.js";

// const btn = document.querySelector("button");
// const actualQuizSection = document.querySelector(".actualQuizSection");
// const timerDiv = document.querySelector(".time");

// let queCount = 0;
// let timer = 2;

// btn.addEventListener("click", () => {
//     btn.style.display = "none";

//     timerDiv.innerHTML = timer;
//     displayQuestionAndOptions(queCount);

//     const interval = setInterval(() => {
//         if (timer === 0) {
//             if (queCount < questions.length - 1) {
//                 queCount++;
//                 timer = 2;
//                 timerDiv.innerHTML = timer;
//                 displayQuestionAndOptions(queCount);
//             } else {
//                 clearInterval(interval);
//                 actualQuizSection.innerHTML = "";
//                 timerDiv.innerHTML = "";
//             }
//         } else {
//             timer--;
//             timerDiv.innerHTML = timer;
//         }
//     }, 1000);
// });

// function displayQuestionAndOptions(queCount) {
//     actualQuizSection.innerHTML = "";

//     const heading = document.createElement("h1");
//     heading.innerHTML = questions[queCount].q;
//     actualQuizSection.append(heading);

//     const queopt = document.createElement("div");

//     questions[queCount].options.forEach((opt) => {
//         const option = document.createElement("p");
//         option.innerHTML = opt;
//         queopt.append(option);
//     });

//     actualQuizSection.append(queopt);
// }
