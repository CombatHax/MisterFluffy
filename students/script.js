
let assignments = {
    // SYNTAX !!!! number:[name, due date, correct option, other option, other option]
    1:["Palabras", "14 Jan", "Manzaña", "martes", "mucho", "madre"],
    2:["Paises", "16 Jan", "correct", "wrongo", "wrongi", "wrongu"]
};
let completedAssignments = {
    // SYNTAX !!!! number:[name, selectedoption, other option, other option, other option]
    1:["Palabras", "9/10", "Manzaña", "martes", "mucho", "madre"], 
    2:["Paises", "8/9", "correct", "wrongo", "wrongi", "wrongu"]
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
try {
    //console.log(urlParams.get('name'));
} catch (err) {
    //console.log(err);
}

let assign = document.getElementById("assignments");
let running = true;
let num = 1;
while (running){
    if (assignments[num] === undefined){
        running = false;
    } else {
        var div1 = document.createElement('div');
        var node1 = div1.appendChild(document.createElement('a'));
        node1.textContent = assignments[num][0];
        div1.setAttribute("id", "assignment");
        node1.setAttribute("id", "mediumlabel");
        let string = "";
        for (index = 0; index < assignments[num].length; index++)
        {
            string += "|";
            string += assignments[num][index];
        }
        //console.log(string);
        node1.setAttribute("href", "assignment.html?id=" + window.btoa(string));

        var node2 = div1.appendChild(document.createElement('p'));
        node2.textContent = assignments[num][1];
        assign.appendChild(div1);
    }
    num++;
}

assign = document.getElementById("completed");
running = true;
num = 1;
while (running){
    if (assignments[num] === undefined){
        running = false;
    } else {
        var div1 = document.createElement('div');
        var node1 = div1.appendChild(document.createElement('a'));
        node1.textContent = completedAssignments[num][0];
        div1.setAttribute("id", "assignment");
        node1.setAttribute("id", "mediumlabel");
        let string = "";
        for (index = 0; index < completedAssignments[num].length; index++)
        {
            string += "|";
            string += completedAssignments[num][index];
        }
        //console.log(string);
        node1.setAttribute("href", "completed.html?id=" + window.btoa(string));

        var node2 = div1.appendChild(document.createElement('p'));
        node2.textContent = completedAssignments[num][1];
        assign.appendChild(div1);
    }
    num++;
}
