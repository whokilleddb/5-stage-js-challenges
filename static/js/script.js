//Challenge1 : Your Age In Days 
function addleap(yr){
    var add = 0;
    for(let i=yr;i<=2020;i++)
    {
        if (i%4==0)
        {
            add++;
        }
    }
    return add;
}

function getYear(){
    reset();
    var birthYear = prompt("Enter Your Birth Year :");
    var age=(2020-birthYear)*365;
    age = age + addleap(birthYear);
    var h1= document.createElement('h1');
    console.log(birthYear);
    if(birthYear==="" || birthYear==null )
    {
        var textAnswer = document.createTextNode("Empty Parameters !");
    }
    else if (isNaN(birthYear))
    {
        var textAnswer = document.createTextNode("Get Me Numbers !");
    }
    else if (birthYear > 2020)
    {
        var textAnswer = document.createTextNode("Bro You Aren't Even Born !");
    }
    else
    {
        var textAnswer = document.createTextNode("You Are : "+ age+ " days old");
    }
    h1.setAttribute('id','getYear');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    if(document.getElementById('getYear'))
    {
        document.getElementById('getYear').remove();
    }
    else{
        console.log("Already Empty");
    }
}

//Challenge 2 : Get Me Cats !!!
function generatecat(){
    var image=document.createElement('img');
    var div=document.getElementById("cat-gen");
    image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}

//Challenge 3 : Rock Paper Scissors !
function rpsGame(yourChoice){
var humanChoice , botChoice;
humanChoice=yourChoice.id;
botChoice= numberToChoice(rndToRpsInt());
//results = decideWinner(humanChoice,botChoice);
message=finalMessage(decideWinner(humanChoice,botChoice));
rpsFrontEnd(yourChoice.id, botChoice,message)
console.log(yourChoice.id);
console.log(botChoice);
console.log(message);
}

function rndToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(num){
    return ['rock','paper','scissor'][num];
}

function decideWinner(yourChoice,computerChoice){
    var rpsData={
        'rock':{'scissor': 1, 'rock':0.5 , 'paper':0},
        'paper':{'rock': 1, 'paper':0.5 , 'scissor':0},
        'scissor':{'paper': 1, 'scissor':0.5 , 'rock':0}
    }

    var yourScore = rpsData[yourChoice][computerChoice];
    return yourScore;
}

function finalMessage(yourscore){
    if (yourscore===0){
        return {'message': "You Lost !" ,"color" : "red"}
    }
    else if (yourscore===0.5){
        return {'message': "You Tied !" ,"color" : "yellow"}
    }
    else
    {
        return {'message': "You Won !" ,"color" : "green"}
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imageDataBase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('scissor').remove();
    document.getElementById('paper').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var finalMessageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='"+imageDataBase[humanImageChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>";
    botDiv.innerHTML="<img src='"+imageDataBase[botImageChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>";
    finalMessageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+"; font-size : 60px;padding: 30px'>" + finalMessage['message']+"</h1>";    

    document.getElementById('flex-rps').appendChild(humanDiv);
    document.getElementById('flex-rps').appendChild(finalMessageDiv);
    document.getElementById('flex-rps').appendChild(botDiv);

}
