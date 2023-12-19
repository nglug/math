function generate() {
    var one = Math.floor(Math.random() * 90) + 10;
    return one
}

//document.getElementById("question").innerHTML= `${one} + ${two} = ?`;
document.getElementById("question").innerHTML= `Press Go to Begin!`;
document.getElementById("submitButton").innerHTML= `Go`
document.getElementById("answerBox").style.display = "none";
document.getElementById("total").style.display = "none";
var one = 0
var two = 0
var n = 0

function checkInput() {
    document.getElementById("answerBox").style.display = "flex";
    document.getElementById("submitButton").innerHTML= `Submit`;

    var userInput = document.getElementById("answerBox").value;
    console.log(userInput)
    if (userInput == one + two) {
        if( n != 0) {
            document.getElementById("question").style.marginBottom = "118px";
            document.getElementById("total").style.display = "block";
            document.getElementById("total").innerHTML = `Total: ${parseInt(document.getElementById("total").innerHTML) + 1}`;
        }
        else {
            n += 1
        }
    } else {
        alert("false");
    }

    one = generate()
    two = generate()
    var sum = one + two
    console.log(sum);
    document.getElementById("question").innerHTML= `${one} + ${two} = ?`;

}
console.log(one + two)