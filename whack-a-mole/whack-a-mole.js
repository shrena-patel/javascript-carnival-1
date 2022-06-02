  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

// Start time needs to be called only when the first mole is clicked
// currently just gets call on refresh of page
startTimer()

// ================ Working solution ==============================

let whackedMoleCount = 0
// GET A RANDOM CELL ============================

let cells = document.getElementsByTagName('TD')

let randomNumber = Math.floor(Math.random() * cells.length)

let randomCell = cells[randomNumber]

// MOLE IMAGE APPEARS IN THE RANDOM CELL ======================

let mole = document.createElement('img')

mole.src = './mole.PNG'

mole.id = "mole"

randomCell.appendChild(mole)

// CLICK ON THE MOLE =============================================

mole.onclick = whackedMole

// MOLE RESPAWNS IN ANOTHER RANDOM CELL ===========================

function whackedMole () {
  randomNumber = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomNumber]
  randomCell.appendChild(mole)

  let audio = new Audio('./whack-audio.wav') 
  audio.play()
  whackedMoleCount++
  console.log(whackedMoleCount)
  document.getElementById("count").innerHTML = whackedMoleCount
}


// STRETCH ++++++++++++++++++++++++++++++++++++++++++++++++++++=
// SET COUNTDOWN TIMER OF 10 SECONDS

function startTimer () {
  let timeLeft = 10
  let countdownTimer = setInterval(function() {
  if(timeLeft == 0) {
    clearInterval(countdownTimer)
    alert("Time's up!")
    whackedMoleCount = 0
  }
  document.getElementById('time').innerHTML = timeLeft
  timeLeft -= 1
}, 1000)
}

