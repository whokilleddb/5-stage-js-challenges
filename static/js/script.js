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

function generatecat(){
    var image=document.createElement('img');
    var div=document.getElementById("cat-gen");
    image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}