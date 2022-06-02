  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

let headIndex = 0

let clothingIndex = 0
// for clothingIndex: 0 = head, 1 = body, 2 = shoes

function changeClownHead(moveNumber) {
  let headImage = document.getElementById('head')

  headIndex += moveNumber
  if (headIndex < 0) {
    headIndex = 5
  }

  if(headIndex > 5) {
    headIndex = 0
  }
  let headImageSrc = "./images/head" + headIndex + ".png" 
  headImage.src = headImageSrc
}

window.addEventListener('keydown', function(e) {
  switch (e.key) {
    case 'ArrowLeft':
      changeClownHead(-1)
      break
    case 'ArrowRight':
      changeClownHead(1)
      break
  }
})
