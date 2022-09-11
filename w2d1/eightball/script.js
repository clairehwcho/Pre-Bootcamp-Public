var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function getAnswer () {
    var pic = document.querySelector(".content img");
    pic.src = "ball.gif";

    setTimeout(function () {
        var pic = document.querySelector(".content img")
        pic.src = "ballStill.jpg";
    }, 3000);

    var input = (document.querySelector("#question").value).trim();
    console.log(input);
    if (input != "") {
        if (document.querySelector("#question").value != "") {
            var num = Math.floor(Math.random() * lifesAnswers.length);

            var answer = lifesAnswers[num];

            document.querySelector("#answer").innerHTML = answer;
        }
        else {
            document.querySelector("#answer").innerHTML = "Please enter a question.";
        }
    }
}

function replace () {

}