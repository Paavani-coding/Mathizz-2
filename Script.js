var player1;
var player2;
var score1=0;
var score2=0;
var number1;
var number2;
var random_number;
var answer;
function login(){
    player1=document.getElementById("p1").value;
    player2=document.getElementById("p2").value;
    localStorage.setItem("Player-1", player1);
    localStorage.setItem("Player-2", player2);
    window.location="question.html";
}
function set(){
    document.getElementById("1").innerHTML="Score of "+localStorage.getItem("Player-1")+": "+ score1;
    document.getElementById("2").innerHTML="Score of "+localStorage.getItem("Player-2")+": "+ score2;
}
function generate(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    random_number=Math.floor(Math.random()*3);
    if (random_number==0){
        document.getElementById("q").innerHTML= number1+ " "+"+"+" "+number2;
    }
    if (random_number==1){
        document.getElementById("q").innerHTML= number1+ " "+"-"+" "+number2;
    }
    if (random_number==2){
        document.getElementById("q").innerHTML= number1+ " "+"*"+" "+number2;
    }
}
function submit(){
    answer=document.getElementById("a").value;
    if ((number1+number2== answer)||(number1-number2==answer)||(number1*number2==answer)){
        document.getElementById("1").innerHTML="Score of "+localStorage.getItem("Player-1")+": "+ score1;
        document.getElementById("2").innerHTML="Score of "+localStorage.getItem("Player-2")+": "+ score2;
        score1= score1+1;
        document.getElementById("1").innerHTML="Score of "+player1+"= "+score1;
    }
    else{
        document.getElementById("1").innerHTML="Score of "+localStorage.getItem("Player-1")+": "+ score1;
        document.getElementById("2").innerHTML="Score of "+localStorage.getItem("Player-2")+": "+ score2;
        score1= score1-1;
        document.getElementById("1").innerHTML="Score of "+player1+"= "+score1; 
    }
}
