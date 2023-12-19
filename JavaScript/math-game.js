function generate() {
    var one = Math.floor(Math.random() * 90) + 10;
    return one
}

async function wrongAnswer() {
    document.getElementById("wrongImage").style.display = "block"
    new Audio('audio/wrongBuzzer.mp3').play()
    await new Promise(r => setTimeout(r, 1000));
    document.getElementById("wrongImage").style.display = "none"
}

//document.getElementById("question").innerHTML= `${one} + ${two} = ?`;
document.getElementById("question").innerHTML= `Press Go to Begin!`;
document.getElementById("submitButton").innerHTML= `Go`
document.getElementById("answerBox").style.display = "none";
document.getElementById("total").style.display = "none";
var one = 0
var two = 0
var n = 0
var total = 0

function checkInput() {
    document.getElementById("answerBox").style.display = "flex";
    document.getElementById("submitButton").innerHTML= `Submit`;

    var userInput = document.getElementById("answerBox").value;
    if (userInput == one + two) {
        if( n != 0) {
            document.getElementById("question").style.marginBottom = "118px";
            document.getElementById("total").style.display = "block";
            document.getElementById("total").innerHTML = `Total: ${total += 1}`;
            document.getElementById("answerBox").value = ""
        }
        else {
            n += 1
        }
    } else {
        document.getElementById("answerBox").value = ""
        total = 0
        document.getElementById("total").innerHTML = `Total: ${total}`;
        wrongAnswer()
    }

    one = generate()
    two = generate()
    var sum = one + two
    document.getElementById("question").innerHTML= `${one} + ${two} = ?`;

}
