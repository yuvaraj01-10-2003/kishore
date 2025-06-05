function clicked(){

    let startgame = confirm("hello lets play game");

if(startgame){
    let conformtwo = confirm("lets play ROCK, PAPER, SCISSOR");
    if(conformtwo){
        let Input = prompt("select ROCK, PAPER, SCISSOR");
        let onein = Input.toUpperCase().trim();   
        console.log("this is user input:" + onein);    //user input
        if(onein === "ROCK" || onein === "PAPER" || onein === "SCISSOR"){
            let computer = ["ROCK","PAPER","SCISSOR"];
            let randomNo = Math.floor(Math.random()*computer.length)
            let computerInput = computer[randomNo]; 
            let playerbg = document.querySelector(".player")  //compter input
            if(onein == computerInput){
                let computerBg = document.getElementById("comBg");
                let playerBg = document.getElementById("playBg");
                let result = document.getElementById("result");
                let compResult = document.getElementById("computerResult");
                let playerResult = document.getElementById("playerResult");
                compResult.textContent = computerInput;
                playerResult.textContent = onein;
                computerBg.style.backgroundColor = "green";
                playerBg.style.backgroundColor = "green";
                result.textContent = "GAME TIE...!"
            }
            else if(onein === "PAPER" && computerInput === "ROCK"){
                let computerBg = document.getElementById("comBg");
                let playerBg = document.getElementById("playBg");
                let result = document.getElementById("result");
                let compResult = document.getElementById("computerResult");
                let playerResult = document.getElementById("playerResult");
                compResult.textContent = computerInput;
                playerResult.textContent = onein;
                computerBg.style.backgroundColor = "red";
                playerBg.style.backgroundColor = "green";
                result.textContent = "PLAYER WIN..."
            }
            else if( onein === "SCISSOR" && computerInput === "PAPER"){             
                let computerBg = document.getElementById("comBg");
                let playerBg = document.getElementById("playBg");
                let result = document.getElementById("result");
                let compResult = document.getElementById("computerResult");
                let playerResult = document.getElementById("playerResult");
                compResult.textContent = computerInput;
                playerResult.textContent = onein;
                computerBg.style.backgroundColor = "red";
                playerBg.style.backgroundColor = "green";
                result.textContent = "PLAYER WIN..."
            }
            else if( onein === "ROCK" && computerInput === "SCISSOR"){         
                let computerBg = document.getElementById("comBg");
                let playerBg = document.getElementById("playBg");
                let result = document.getElementById("result");
                let compResult = document.getElementById("computerResult");
                let playerResult = document.getElementById("playerResult");
                compResult.textContent = computerInput;
                playerResult.textContent = onein;
                computerBg.style.backgroundColor = "red";
                playerBg.style.backgroundColor = "green";
                result.textContent = "PLAYER WIN..."
            }
            else{
                let computerBg = document.getElementById("comBg");
                let playerBg = document.getElementById("playBg");
                let result = document.getElementById("result");
                let compResult = document.getElementById("computerResult");
                let playerResult = document.getElementById("playerResult");
                compResult.textContent = computerInput;
                playerResult.textContent = onein;
                computerBg.style.backgroundColor = "green";
                playerBg.style.backgroundColor = "red";
                result.textContent = "COMPUTER WIN..."
            }
        }
        else{
            alert("you entered a invalid option..!");
        }
    }
    else{
        alert("you changed your mind.ok we play afterward");
    }
}
else{
    alert("ok..bye");
}

}


