// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded',()=>{
  const liker=document.querySelector('.like-glyph')
  liker .forEach(liker=>{
    liker.addEventListener('click',()=>{
      if(liker.innerText===FULL_HEART){
        liker.classList.remove('activated-heart')
        liker.innerText=EMPTY_HEART
      }
      else{
        mimicServerCall()
        .then(()=>{
          liker.innerText=FULL_HEART
          liker.classList.add('activated.heart')
        })
        .catch(()=>{
          let error=document.getElementById('modal')
          error.classList.remove('hidden')
          let message=document.getElementById('modal-message')
          message.innerText='Random server error.Try again.'
          setTimeout(()=>{error.classList.add('hidden')})
        })
      
      }
    })
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
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
