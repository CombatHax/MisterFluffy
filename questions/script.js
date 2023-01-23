let currentQuestion = 0;
const questionsList = []
const wrongAnswer = num => {
    document.querySelector(".answers").children[num].style["animation"] = ".5s linear 0s 1 normal forwards running toRed";
}
const correctAnswer = num => {
    console.log(`${currentQuestion} ${questionsList.length}`)
    for(let el of document.getElementsByClassName("fade")) {
        el.style["animation"] = ".5s linear 0s 1 normal forwards running fadeOut";
    }
    if(currentQuestion < questionsList.length - 1) {
        document.body.style["animation"] = "1s linear 0s toGreen";
        setTimeout(() => {
            setQuestion(questionsList[currentQuestion][0], questionsList[currentQuestion][1], true);
        }, 500);
        currentQuestion++;
    } else {
        finishedQuestions();
    }
}
function randomizeList(points) {
    points = JSON.parse(JSON.stringify(points));
    return points.sort(() => Math.random() - 0.5);
}
const setQuestion = (question, answers, fade) => {
    const shuffled = randomizeList(answers);
    document.querySelector(".question").innerHTML = question;
    if(fade) {
        document.querySelector(".question").style["animation-play-state"] = "running";
        document.querySelector(".question").style["animation-name"] = "fadeIn";
    }
    document.querySelector(".answers").innerHTML = "";
    for(let i = 0; i < shuffled.length; i++) {
        const ans = shuffled[i];
        const el = document.createElement("div");
        el.innerHTML = ans;
        el.className = "answer";
        if(ans === answers[0]) {
            el.addEventListener("click", () => {
                correctAnswer(i)
            });
        } else {
            el.addEventListener("click", () => {
                wrongAnswer(i)
            });
        }
        document.querySelector(".answers").appendChild(el);
    }
    document.querySelector(".answers").style["animation"] = ".5s linear 0s 1 normal forwards running fadeIn"
}
const createQuestions = questionss => {
    for(let q in questionss) {
        questionsList.push([q, questionss[q]]);
    }
    setQuestion(questionsList[currentQuestion][0], questionsList[currentQuestion][1]);
}
const finishedQuestions = () => {
    console.log("Done");
}