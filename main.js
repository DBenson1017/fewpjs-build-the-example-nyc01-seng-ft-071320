// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function(){
  console.log('DOMContentLoaded event triggered')
  let errorModal = document.getElementById('modal')
  errorModal.className='hidden'

  document.addEventListener('click', function(e){
      console.log('click registered')
      let bttn= e.target
      console.log(bttn)
      if (bttn.className==='like-glyph'){
      let person= bttn.parentNode.parentNode.parentNode.parentNode
      console.log(person)
      let id= person.id //string 
      console.log(id)
      mimicServerCall()
      console.log('passed mimicServerCall')
      }
  }) // end of click event listener 



})




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
