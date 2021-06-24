// import functions

// reference needed DOM elements


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

  
const catSound = document.getElementById('cat-sound');
const cat = document.getElementById('cat');
cat.addEventListener('click', ()=>{
    catSound.play();
})
const dogSound = document.getElementById('dog-sound');
const dog = document.getElementById('dog');
dog.addEventListener('click', ()=>{
  dogSound.play();
})
const horseSound = document.getElementById('horse-sound');
const horse = document.getElementById('horse');
horse.addEventListener('click', ()=>{
  horseSound.play();
})
const velociraptorSound = document.getElementById('velociraptor-sound');
const velociraptor = document.getElementById('velociraptor');
velociraptor.addEventListener('click', ()=>{
  velociraptorSound.play();
})