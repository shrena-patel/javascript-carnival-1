  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

// var unicornEmptyUrl = "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-0.png"
// var unicornOneUrl = "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-1.png"
// var unicornTwoUrl = "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-2.png"
// var unicornThreeUrl = "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-3.png"

// // look at the beginning of tic-tac-toe for this bit
// let unicorns = document.getElementsByTagName('img')

// for (let i = 0; i < unicorns.length; i++) {
//   unicorns[i].onclick = unicornClick
// }

// function unicornClick(e) {

//   let selectedUnicorn = e.target

//   if (selectedUnicorn.src == unicornEmptyUrl) {
//     selectedUnicorn.src = unicornOneUrl
//   } 
//   else if (selectedUnicorn.src == unicornOneUrl) {
//        selectedUnicorn.src = unicornTwoUrl
//    }
//   else if (selectedUnicorn.src == unicornTwoUrl) {
//      selectedUnicorn.src = unicornThreeUrl
//    }
//   else if (selectedUnicorn.src == unicornThreeUrl) {
//      alert('This unicorn says thank you!')
//      selectedUnicorn.src = unicornEmptyUrl
//    }
// }


// WORKING SOLUTION BELOW (NOT D.R.Y) ================================================

// var unicornOne = document.getElementById('unicorn-0')
// var unicornTwo = document.getElementById('unicorn-1')
// var unicornThree = document.getElementById('unicorn-2')

// var inflationLevel0 = 0
// var inflationLevel1 = 0
// var inflationLevel2 = 0

// unicornOne.onclick = unicornClick
// unicornTwo.onclick = unicornClick
// unicornThree.onclick = unicornClick


// function unicornClick(event) {
//   let unicorn = event.target
  
//   // increase unicorns inflation level

//   if (unicorn.id == "unicorn-0") {
//     inflationLevel0++
//     if (inflationLevel0 == 4) {
//       inflationLevel0 = 0
//     }
//     unicorn.src = "./images/unicorn-" + inflationLevel0 + ".png"
//   }

//   if (unicorn.id == "unicorn-1") {
//     inflationLevel1++
//     if (inflationLevel1 == 4) {
//       inflationLevel1 = 0
//     }
//     unicorn.src = "./images/unicorn-" + inflationLevel1 + ".png"
//   }

//   if (unicorn.id == "unicorn-2") {
//     inflationLevel2++
//     if (inflationLevel2 == 4) {
//       inflationLevel2 = 0
//     }
//     unicorn.src = "./images/unicorn-" + inflationLevel2 + ".png"
//   }
  
// }

// ==========================================================================================

//DRY SOLUTION BELOW

document.getElementById('unicorn-0').onclick = unicornClick
document.getElementById('unicorn-1').onclick = unicornClick
document.getElementById('unicorn-2').onclick = unicornClick

// var inflationLevel0 = 0
// var inflationLevel1 = 0
// var inflationLevel2 = 0

// iinflation array represents the same as above three separate inflation level variables
let inflation = [0, 0, 0]


function unicornClick(event) {
  let unicorn = event.target
  let id = unicorn.id[8]  // the 9th element of the unicorn image's id

  // increase unicorns inflation level
  inflation[id]++
  
  // If the inflation level reaches 4, set the inflation level to be 0
  if (inflation[id] == 4) {
      inflation[id] = 0
  }

  // change the image source to be the next image, according to the inflation level
  unicorn.src = "./images/unicorn-" + inflation[id] + ".png"

}