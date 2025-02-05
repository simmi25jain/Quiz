import questions from "./questions.js";
const btn = document.querySelector("button")

        let quesNo=0;
        let timer=5;
        const quizSection=document.querySelector(".quizSection");
        const timerDiv=document.querySelector(".timer");

        btn.addEventListener("click",()=>{
            btn.style.display="none";

            //for printing the first question instantly
            timerDiv.innerHTML=timer;
            displayQuestionAndOptions(quesNo);
            quizSection.classList.add("bg-white","rounded-b-xl");
            timerDiv.classList.add("bg-white","rounded-t-xl");
            const interval = setInterval(()=>{
                if(timer===0){
                    if(quesNo<questions.length-1){
                    quesNo++;
                    timer=5
                    timerDiv.innerText=timer;
                    displayQuestionAndOptions(quesNo);
                }
                else{
                    clearInterval(interval);
                    quizSection.innerHTML="";
                    timerDiv.innerHTML="";
                }
            }
                    else{
                    timer--;
                    timerDiv.innerText=timer;
                }
            },1000);
        });
        function displayQuestionAndOptions(quesNo){
            quizSection.innerHTML="";
            const q = document.createElement("h1");
            q.innerHTML=questions[quesNo].q;
            quizSection.append(q);
            
            questions[quesNo].options.map((options)=>{
                const p = document.createElement("p");
                p.innerText=options;
                quizSection.append(p);
            });
        }

        // let count=0;
        // btn.addEventListener("click", ()=>{
        //    const interval = setInterval(()=>{
        //     if (count===5)clearInterval(interval);
        //     else{
        //         console.log("simmi");
        //         count++;
        //     }
        //    },1000)
        // });