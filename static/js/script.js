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
    resetDate();
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

function resetDate(){
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
    image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    image.id="get-me-cats"
    div.appendChild(image);
    console.log("MORE CATSSSSSSSSSSSS");

}

function resetCats()
{
    while(document.getElementById('get-me-cats')){
        document.getElementById('get-me-cats').remove();
    }
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
    document.getElementById('hdiv').remove();
    document.getElementById('bdiv').remove();
    document.getElementById('fdiv').remove();

    var humanDiv=document.createElement('div');
    humanDiv.id="hdiv";
    var botDiv=document.createElement('div');
    botDiv.id="bdiv";
    var finalMessageDiv=document.createElement('div');
    finalMessageDiv.id="fdiv";

    humanDiv.innerHTML="<img id='HumanChoice' src='"+imageDataBase[humanImageChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>";
    botDiv.innerHTML="<img id='BotChoice' src='"+imageDataBase[botImageChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>";
    finalMessageDiv.innerHTML="<h1 id= 'TextOut' style='color:"+finalMessage['color']+"; font-size : 60px;padding: 30px'>" + finalMessage['message']+"</h1>";    

    document.getElementById('flex-rps').appendChild(humanDiv);
    document.getElementById('flex-rps').appendChild(finalMessageDiv);
    document.getElementById('flex-rps').appendChild(botDiv);

}

function rpsReset(){
    if (document.getElementById('HumanChoice') )
    {
        document.getElementById('HumanChoice').remove();
        document.getElementById('BotChoice').remove();
        document.getElementById('TextOut').remove();
    
    
     var rockdiv='<img id="rock" src="https://image-cdn.essentiallysports.com/wp-content/uploads/20200801191404/Untitled-design-55.png" height=150 width=150 onclick="rpsGame(this)">'
     addCode('hdiv',rockdiv);
     var paperdiv='<img id="paper" src="https://i.imgur.com/5Pl6g8R.jpg" height=150 width=150 onclick="rpsGame(this)">';
     addCode('fdiv',paperdiv);
     var scissordiv='<img id="scissor" src="https://cdn.thewirecutter.com/wp-content/uploads/2017/08/03scissors.jpg" height=150 width=150 onclick="rpsGame(this)">';
     addCode('bdiv',scissordiv);
    }
}

function addCode(id,lnk) { 
    document.getElementById(id).innerHTML +=lnk;
}

//Challenge 4 : Change Colour Of All Buttons
var all_buttons=document.getElementsByTagName('button');
console.log(all_buttons);
var copyAllButtons=[];

for (let i=0; i< all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonRemoveAll(){
    for (let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    }
}

function buttonColour(colourOfButton){
    buttonRemoveAll();
    for (let i=0;i<all_buttons.length;i++){
    all_buttons[i].classList.add(colourOfButton);
    }
}

function buttonReset(){
    buttonRemoveAll();
    for (let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.add(copyAllButtons[i]);
        }

}

function buttonRandom(){
    var choices=['btn-primary','btn-secondary','btn-success','btn-danger','btn-warning','btn-dark'];
    buttonRemoveAll();
    for (let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.add(choices[(Math.floor(Math.random()*6))]);
        }
}
//Challenge 5 : PLay Blackjack
let blackjackGame={
    'you': {
        'scoreSpan':'#your-blackjack-result',
        'div':'#your-box',
        'score':0
    },
    'dealer': {
        'scoreSpan':'#dealer-blackjack-result',
        'div':'#dealer-box',
        'score':0
    }
}
const hitSound = new Audio('static/sounds/swish.m4a');
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit);

function blackjackhit(){
    document.querySelector(YOU['div']).style.height=null;
    document.querySelector(DEALER['div']).style.height=null;
    let cardImage= document.createElement('img');
    cardImage.src='static/images/Q.png';
    document.querySelector(YOU['div']).appendChild(cardImage);
    hitSound.play();

}
