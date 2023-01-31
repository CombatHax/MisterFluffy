const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
try {
    id = urlParams.get('id');
    //console.log(id);
} catch (err) {
    //console.log(err);
}
assignment = window.atob(id).split('|');
console.log(assignment);
let btn = assignment[3]

function retry(){
    window.location.replace("/students/assignment.html?id=" + id);
}

assignments = assignment
label = document.getElementById('label');
label.innerHTML = assignment[1];

let running = true;
let num = 0;
assignments.splice(0, 1);
assignments.splice(0, 1);
assignments.splice(0, 1);
assignments = assignments.sort(() => Math.random() - 0.5);
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
console.log(assignment);
let button = assignments.indexOf(btn);
let selectedbutton = document.getElementById('question' + button);
selectedbutton.style.backgroundColor = 'grey';
for (let i = 0; i < assignments.length; i++) {
    if (i !== button){ 
        document.getElementById('question' + i).style.backgroundColor = 'white';
    }
}