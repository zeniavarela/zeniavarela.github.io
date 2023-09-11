var randomBomb = Math.floor(Math.random()*9)

var randomTreasure = Math.floor(Math.random()*9)
  
  const treasure = (location) => {
    return alert(location)
  }
const changeToEmoji=(location) => {
    
    if(location === randomTreasure) {
        document.getElementById("outcome").innerHTML = "Great job! You won the game!"
        document.getElementById(location).innerHTML = "&#x1f308"


    }
    else if(location === randomBomb) {
        document.getElementById("outcome").innerHTML = "Game is over, try again!"
        document.getElementById(location).innerHTML = "&#x2620"
       
    }
    else {
        document.getElementById(location).innerHTML =  "🌴"
    }
}

// counter approach
// add a rule so when location gets chosen, it resets the game