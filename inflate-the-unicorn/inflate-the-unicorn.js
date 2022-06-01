  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

var unicornEmptyUrl = "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-0.png"
var unicornOneUrl = "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-1.png"
var unicornTwoUrl = "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-2.png"
var unicornThreeUrl = "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-3.png"

// look at the beginning of tic-tac-toe for this bit
let unicorns = document.getElementsByTagName('img')

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = unicornClick
}

function unicornClick(e) {

  let selectedUnicorn = e.target

  if (selectedUnicorn.src == unicornEmptyUrl) {
    selectedUnicorn.src = unicornOneUrl
  } 
  else if (selectedUnicorn.src == unicornOneUrl) {
       selectedUnicorn.src = unicornTwoUrl
   }
  else if (selectedUnicorn.src == unicornTwoUrl) {
     selectedUnicorn.src = unicornThreeUrl
   }
  else if (selectedUnicorn.src == unicornThreeUrl) {
     alert('This unicorn says thank you!')
     selectedUnicorn.src = unicornEmptyUrl
   }
}
