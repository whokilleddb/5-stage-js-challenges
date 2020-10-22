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
    image.id="get-me-cats";
    div.appendChild(image);
}

function resetImages(val)
{
    while(document.getElementById(val)){
        document.getElementById(val).remove();
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
var copyAllButtons=[];

for (let i=0; i< all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

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
        'score':0,
        'no-bust':0,
    },
    'dealer': {
        'scoreSpan':'#dealer-blackjack-result',
        'div':'#dealer-box',
        'score':0,
        'no-bust':0,
    },
    'cards':['2','3','4','5','6','7','8','9','10','K','Q','J','A'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'Q':10,'J':10,'A':[1,11]}
}

let scoreboard={'win':0,'loss':0,'draw':0}

const hitSound = new Audio('static/sounds/swish.m4a');
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit);
document.querySelector('#blackjack-deal-button').addEventListener('click',resetBoard);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerBot);

function blackjackhit(){
    document.querySelector(YOU['div']).style.height=null;
    document.querySelector(DEALER['div']).style.height=null;
    cardVal=randomCard();
    updateScore(cardVal,YOU);
    showScore(YOU);
    showCard(cardVal,YOU);
}

function showCard(card,player){
    if (player['score']<=21){
        let cardImage= document.createElement('img');
        cardImage.src=`static/images/${card}.png`;
        cardImage.id='player-card';
        document.querySelector(player['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function resetBoard(){
    resetImages('player-card');
    resetImages('dealer-card');
    document.querySelector(YOU['scoreSpan']).textContent = 0;
    document.querySelector(DEALER['scoreSpan']).textContent = 0;
    YOU['score']=0;
    DEALER['score']=0;
    console.log(YOU['no-bust']);
    console.log(DEALER['no-bust']);
    YOU['no-bust']=0;
    DEALER['no-bust']=0;
    document.querySelector(YOU['scoreSpan']).style.color = "white";
    document.querySelector(DEALER['scoreSpan']).style.color = "white";
    document.querySelector(YOU['div']).style.height="350px";
    document.querySelector(DEALER['div']).style.height="350px";
    document.querySelector('#blackjack-result').textContent="Let's Play!";
    document.querySelector('#blackjack-result').style.color="#000000";
    
}

function randomCard(){
    let randomIndex=Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function updateScore(card,activeplayer){
    let temp=activeplayer['score'];
    if (card !='A'){
        activeplayer['score'] += blackjackGame['cardsMap'][card];
    }
    else{
        if((activeplayer['score']+11)>21){
            activeplayer['score'] += blackjackGame['cardsMap']['A'][0];
        }
        else{
            activeplayer['score'] += blackjackGame['cardsMap']['A'][1];
        }
    }

    if (activeplayer['score'] >21){
        activeplayer['no-bust']=temp;
    }
    else{
        activeplayer['no-bust']=activeplayer['score'];
    }
}

function showScore(activeplayer){
    if(activeplayer['score']>21){
        document.querySelector(activeplayer['scoreSpan']).textContent = "BUSTED";
        document.querySelector(activeplayer['scoreSpan']).style.color = "red";
        
    }
    else
    {
        document.querySelector(activeplayer['scoreSpan']).textContent = activeplayer['score'];
    }
    
}

function dealerLogic(){
    document.querySelector(YOU['div']).style.height=null;
    document.querySelector(DEALER['div']).style.height=null;
    dealercard = randomCard();
    updateScore(dealercard,DEALER);
    showScore(DEALER);
    showCard(dealercard,DEALER);
}

function dealerBot(){
    do{
        dealerLogic();
    }while(DEALER['score']<22);
    showWinner();
}

function getWinner(){
    if (YOU['score']!=YOU['no-bust']){
        if (DEALER['score']!=DEALER['no-bust']){
            return 0.5;
        }
        else{
            return 0;
        }
    }
    else{
        if (DEALER['score']!=DEALER['no-bust']){
            return 1;
        }
        else if (YOU['no-bust']==DEALER['no-bust']){
            return 0.5;
        }
        else if (YOU['no-bust']<DEALER['no-bust']){
            return 0;
        }
        else{
            return 1;
        }
    }
}

function showWinner()
{
    out=getWinner();
    if (out==1){
        document.querySelector('#blackjack-result').textContent="You Win !";
        document.querySelector('#blackjack-result').style.color="#0dee00";
        scoreboard['win'] += 1;
        document.querySelector('#wins').textContent=scoreboard['win'];
    }
    else if(out==0.5){
        document.querySelector('#blackjack-result').textContent="Draw!";
        document.querySelector('#blackjack-result').style.color="#f9d700";
        scoreboard['draw'] += 1;
        document.querySelector('#draws').textContent=scoreboard['draw'];
    }
    else{
        document.querySelector('#blackjack-result').textContent="You Lost !";
        document.querySelector('#blackjack-result').style.color="#e01100";
        scoreboard['loss'] += 1;
        document.querySelector('#loses').textContent=scoreboard['loss'];
    }
}

function tablereset(){
    scoreboard['win'] = 0;
    scoreboard['draws'] = 0;
    scoreboard['loss'] = 0;
    document.querySelector('#wins').textContent=scoreboard['win'];
    document.querySelector('#draws').textContent=scoreboard['draw'];
    document.querySelector('#loses').textContent=scoreboard['loss'];
    resetBoard();
}
