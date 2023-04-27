// script.js

//access and modify text inside an element
const title = document.getElementById("title")  //store sa variable
console.log(title.innerText)                    //displays text ng title sa console log
title.innerText = 'Capcom Games'                //binago ung text ng title kaya capcom na lumabas

//Modify elements inside an element
const games = document.getElementsByClassName("games")      //store sa variable
games[0].innerHTML = "<h3>" + games[0].innerText +"</h3>"   //magkasamang css at js

//Get the value of an attribute
for (let a = 0; a < games.length; a++) {                    //traverse sa class na games
    console.log(games[a].getAttribute("id"))                //piniprint sa console ung attribute
    games[a].style = "color: pink;"                         //sineset color 
}
    // games[a].style.color= "blue" // this also works
    // games[0].removeAttribute("style")                    //Remove an attribute from an element.

    //Remove an element itself.
    const gamesList = document.getElementById("games-list")     //store sa variable
    const list = gamesList.getElementsByTagName("li");          //store sa variable
    gamesList.removeChild(list[0])                              //tinanggal

    //Append an element to the list of elements
    const newGame = document.createElement("li");              //new variable panggawa ng bagong element sa list
    const newGameText = document.createTextNode("New Game");   //eto ung content
    newGame.appendChild(newGameText);                          //nilagay as child ng list
    gamesList.appendChild(newGame);                            //nilagay sa list

    //create an entirely new HTML element.
    const newElement = document.createElement("h1")                     //new variable panggawa bagong element
    newElement.innerText = "Hello!"                                     //laman ng element
    document.getElementsByTagName('body')[0].appendChild(newElement)    //nilagay sa body

    //Event Listeners


    function getSum() {
        const num1 = Number(document.getElementById("num1").value);
        const num2 = Number(document.getElementById("num2").value);
        // Add the values together and display the result
        const sum = num1 + num2;
        alert(`The sum is ${sum}`);
    }
    const calcSum = document.getElementById("calc-sum");
    calcSum.addEventListener("click", getSum);
