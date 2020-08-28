// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorModal = document.getElementById('modal')
  errorModal.className='hidden'


document.addEventListener('DOMContentLoaded', function(){
  console.log('DOMContentLoaded event triggered')
  // let errorModal = document.getElementById('modal')
  // errorModal.className='hidden'

  function hideError(){
    errorModal.className='hidden'
  }//end of hide error 

function makeFullHeart(input){
  mimicServerCall()
    .then( resolution  => {
    input.innerHTML = FULL_HEART
    input.className=('activated-heart')
    console.log('changed empty heard to activated, and FULL')
    })
  .catch(function (resolution){
    let errorMessage = document.getElementById('modal-message')
    errorMessage.innerText = `${resolution}`
    errorModal.className='unhidden'
    setTimeout(hideError, 5000)
  })
} // end of fullHeart 

function makeEmptyHeart(input){
  mimicServerCall()
  .then( resolution  => {
    input.innerHTML = EMPTY_HEART
    input.className='like-glyph'
    console.log('changed full heart to empty, and grey')
    })
    .catch(function (resolution){
      let errorMessage = document.getElementById('modal-message')
      errorMessage.innerText = `${resolution}`
      errorModal.className='unhidden'
      setTimeout(hideError, 5000)
    })
}// end of emptyHeart

  document.addEventListener('click', function(e){
      console.log('enter click listener')
      let bttn= e.target
      console.log(bttn)
      if (bttn.className==='like-glyph'){
        makeFullHeart(bttn)
      } else if (bttn.className==='activated-heart'){
        makeEmptyHeart(bttn)
      }
  }) // end of click event listener 

}) // end of DOMContentLoaded event 




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  console.log('called mimicServerCall')
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
