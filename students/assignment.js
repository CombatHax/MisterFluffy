const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
try {
    id = urlParams.get('id');
    console.log(id);
} catch (err) {
    console.log(err);
}
assignments = window.atob(id).split('|')
console.log(assignments);

questions = document.getElementById('questions');
label = document.getElementById('label');
label.innerHTML = assignments[1];

let running = true;
let num = 0;
let randnum = 0;
let final = [];
console.log("\n");
assignments.splice(0, 1);
assignments.splice(0, 1);
assignments.splice(0, 1);
final = assignments.sort(() => Math.random() - 0.5);
console.log(final);
console.log("\n");
assignments = final;
while (running){
    if (assignments[num] === undefined){
        running = false;
    } else {
        var node1 = document.createElement('button');
        node1.textContent = assignments[num];
        node1.setAttribute("id", "question" + num);
        node1.setAttribute("class", "question" + num);
        node1.setAttribute("onclick", `buttonclicked(${num})`);
        questions.appendChild(node1);
    }
    num++;
}
randnum = (Math.round(Math.random()*10) % 2);
console.log(randnum);

let selectedbutton = undefined;
function buttonclicked(button){
    let selectedbutton = document.getElementById('question' + button);
    selectedbutton.style.backgroundColor = 'grey';
    for (let i = 0; i < assignments.length; i++) {
        if (i !== button){ 
            document.getElementById('question' + i).style.backgroundColor = 'white';
        }
    }
}

function submit(){
    window.location.replace("index.html");
}