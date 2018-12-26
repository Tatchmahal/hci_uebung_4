let questions = {
    "Fragen":[
        {"frage":"Wieviele Bücher sind im Katalog dargestellt?",
            "option1":"5",
            "option2":"3",
            "option3":"42"
        },
        {"frage":"Wieviele davon sind Bestseller?",
            "option1":"5",
            "option2":"3",
            "option3":"42"
        },
        {"frage":"Was ist die Antwort auf alles?",
            "option1":"5",
            "option2":"3",
            "option3":"42"
        }
    ]
};

let modus = 0;


function updateQuestion(){
    document.getElementById("question").innerHTML = questions["Fragen"][modus].frage;
    document.getElementById("answer1").innerHTML = questions["Fragen"][modus].option1;
    document.getElementById("answer2").innerHTML = questions["Fragen"][modus].option2;
    document.getElementById("answer3").innerHTML = questions["Fragen"][modus].option3;
}

updateQuestion();

document.getElementById("questionBut").innerText = "Überprüfen";

let answer = "-1";
function updateAnswer() {
    document.getElementById("questionResult").hidden = true;
    if (document.getElementById('gridRadios1').checked) {
        answer = document.getElementById('gridRadios1').value;
    } else if (document.getElementById('gridRadios2').checked) {
        answer = document.getElementById('gridRadios2').value;
    } else if (document.getElementById('gridRadios3').checked) {
        answer = document.getElementById('gridRadios3').value;
    }
    document.getElementById("questionBut").disabled = (answer === "-1");

}

function answerFalse() {
    document.getElementById("looser").hidden = false;
    document.getElementById("questionResult").hidden = true;
    document.getElementById("gridRadios1").disabled = true;
    document.getElementById("gridRadios2").disabled = true;
    document.getElementById("gridRadios3").disabled = true;
}

function checkAnswer() {
    document.getElementById("questionBut").disabled = true;
    if (modus === 0){
        if (answer === "1"){
            document.getElementById("questionResult").hidden = false;
            modus += 1;
            updateQuestion();
        }else {
            answerFalse();
        }
    }else if (modus === 1){
        if (answer === "2"){
            document.getElementById("questionResult").hidden = false;
            modus += 1;
            updateQuestion();
        }else {
            answerFalse();
        }
    }else {
        if (answer === "3"){
            document.getElementById("winner").hidden = false;
            document.getElementById("questionResult").hidden = true;
            document.getElementById("gridRadios1").disabled = true;
            document.getElementById("gridRadios2").disabled = true;
            document.getElementById("gridRadios3").disabled = true;
            document.getElementById("questionBut").disabled = true;
        }else {
            answerFalse();
        }
    }
    document.getElementById("gridRadios1").checked = false;
    document.getElementById("gridRadios2").checked = false;
    document.getElementById("gridRadios3").checked = false;
}
