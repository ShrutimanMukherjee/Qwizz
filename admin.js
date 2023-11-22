// var fs = require("fs"); /* Uncaught reference : require is not defined */
/* But works on local node console */
// fs.readFile('data.json'); 

// import * as f from fs; /* Cannot use import outside module */

// import("/node_modules/fs").then((mod) => {console.log(mod.readFile('data.json'));}) /* 404 */

var page_content = document.getElementById("page_content");
var qtable = document.getElementById("qtable");

fetch('data.json')
    .then((res) => {
        return res.json();
    })
    .then( (obj) => {
        return obj['qlist'];
    })
    .then((questions) => {
        for(quest of questions) {
            let row = document.createElement("tr");
            
            let qstr = document.createElement("td");
            qstr.innerHTML = quest['question']
            row.appendChild(qstr)

            let options_cell = document.createElement("td");
            let options = document.createElement("ol");

            let option1 = document.createElement("li");
            option1.innerHTML = quest['choice1'];
            options.appendChild(option1);

            let option2 = document.createElement("li");
            option2.innerHTML = quest['choice2'];
            options.appendChild(option2);

            let option3 = document.createElement("li");
            option3.innerHTML = quest['choice3'];
            options.appendChild(option3);

            let option4 = document.createElement("li");
            option4.innerHTML = quest['choice4'];
            options.appendChild(option4);

            options_cell.appendChild(options);
            row.appendChild(options_cell)

            let correct = document.createElement("td");
            correct.innerHTML = quest['answer']
            row.appendChild(correct)

            qtable.appendChild(row)

            console.log('----------------');
            console.log(quest['question']);
            console.log(quest['choice1']);
            console.log(quest['choice2']);
            console.log(quest['choice3']);
            console.log(quest['choice4']);
            console.log(quest['answer']);
        }
    })
    .catch((err) => {
        console.error(err);
    });