console.log("i have a secret number between 1 to 10,can you geuss it?");
function startgame(){
    var secretnumber=Math.floor(Math.random()*10);
    console.log(secretnumber);
    var guess=parseInt
    console.log("enter your guess");
if(guess==secretnumber)
    {
        console.log("congratulations! you guessed the number");
    }  
else
    {
        console.log("no thats wrong please try again")
    }      
}
startgame(); 