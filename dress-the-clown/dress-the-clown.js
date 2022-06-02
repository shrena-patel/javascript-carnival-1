  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0

let clothingIndex = 0
// for clothingIndex: 0 = head, 1 = body, 2 = shoes

function changeHorizontal(moveNumber) {
  let headImage = document.getElementById('head')
  let bodyImage = document.getElementById('body')
  let shoesImage = document.getElementById('shoes')

    // change head
    if (clothingIndex == 0) {
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

    // change body
    if (clothingIndex == 1) {
      bodyIndex += moveNumber
  
      if (bodyIndex < 0) {
        bodyIndex = 5
      }
      if(bodyIndex > 5) {
        bodyIndex = 0
      }
      let bodyImageSrc = "./images/body" + bodyIndex + ".png" 
      bodyImage.src = bodyImageSrc
    }

    // change shoes

    if (clothingIndex == 2) {
      shoesIndex += moveNumber
  
      if (shoesIndex < 0) {
        shoesIndex = 5
      }
      if(shoesIndex > 5) {
        shoesIndex = 0
      }
      let shoesImageSrc = "./images/shoes" + shoesIndex + ".png" 
      shoesImage.src = shoesImageSrc
    }
}

function changeVertical(moveNumber) {
  clothingIndex += moveNumber

  if (clothingIndex > 2) {
    clothingIndex = 0
  }
  if (clothingIndex < 0) {
    clothingIndex = 2
  }
}

window.addEventListener('keydown', function(e) {
  switch (e.key) {
    case 'ArrowLeft':
      changeHorizontal(-1)
      break
    case 'ArrowRight':
      changeHorizontal(1)
      break
    case 'ArrowUp':
      changeVertical(-1)
      break
    case 'ArrowDown':
      changeVertical(1)
  }
})
