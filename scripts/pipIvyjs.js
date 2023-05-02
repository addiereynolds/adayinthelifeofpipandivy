const gameboard = document.getElementById('gameboard');
const catName = localStorage.getItem('catChoice');
let catObjects = [];
let objectSelectionCounter = 0;
let selectedObject = null;
let pipData = [
    { houseObject: 'couch', label: 'couch', array: ['loaf', 'scratch', 'hide underneath', 'get scared of'] },
    { houseObject: 'bed', label: 'bed', array: ['loaf', 'hide underneath', 'meow at Ivy'] }, 
    { houseObject: 'counter', label: 'counter', array: ['loaf', 'jump to window'] },
    { houseObject: 'window', label: 'window', array: ['watch birds', 'jump on sill and miss then give up'] },
    {houseObject: 'waterBowl', label: 'water bowl', array: ['have a little drink', 'get wet'] },
    {houseObject: 'foodBowl', label: 'food bowl', array: ['snack', 'throw up food'] },
    {houseObject: 'beanBag', label: 'bean bag', array:['loaf', 'check on hidden hair elastics'] },
    {houseObject: 'closet', label: 'closet', array: ['get fur on clothes', 'loaf on purses', 'play with the belts'] },
    {houseObject: 'bathroomDoor', label: 'bathroom door', array: ['meow at door', 'break in and steal tampons', 'break in and drink from toilet', 'break in and play in tub'] },
    {houseObject: 'litterBox', label: 'litter box', array: ['poop', 'sleep in', 'hide from ivy'] },
    {houseObject: 'plants', label: 'plants', array: ['chew and throw up', 'circle with suspicion', 'get scared of'] }
  ];

let ivyData = [
    {houseObject: 'couch', label: 'couch', array:  ['loaf', 'scratch', 'make biscuits', 'meow at aimlessly'] },
    {houseObject: 'bed', label: 'bed', array: ['loaf', 'mess up blankets', 'cuddle with Pip'] },
    {houseObject: 'counter', label: 'counter', array: ['knock over cups', 'play with stove'] },
    {houseObject: 'window', label: 'window', array: ['watch birds', 'scratch screen', 'climb into'] },
    {houseObject: 'waterBowl', label: 'water bowl', array: ['have a little drink', 'get water everywhere'] },
    {houseObject: 'foodBowl', label: 'food bowl', array: ['snack', 'get food everywhere'] },
    {houseObject: 'beanBag', label: 'bean bag', array: ['nap', 'make biscuits', 'jump on'] },
    {houseObject: 'closet', label: 'closet', array: ['mess up clothes', 'plan world domination', 'play with the belts'] },
    {houseObject: 'bathroomDoor', label: 'bathroom door', array: ['scratch', 'break in and lick sink', 'break in and play with hanging towels'] },
    {houseObject: 'litterBox', label: 'litter box', array: ['poop', 'drag poop everywhere', 'dig around'] },
    {houseObject: 'plants', label: 'plants', array: ['sniff', 'knock over', 'climb'] }
  ];
const startGameObjects = {
  title: "Which object would you like to play with?",
  items: [
 { thing: 'couch', label: 'couch' },
  { thing: 'bed', label: 'bed' },
  { thing: 'counter', label: 'counter' },
  { thing: 'window', label: 'window' },
  { thing: 'waterBowl', label: 'water bowl' },
  { thing: 'foodBowl', label: 'food bowl' },
  { thing: 'beanBag', label: 'bean bag' },
  { thing: 'closet', label: 'closet' },
  { thing: 'bathroomDoor', label: 'bathroom door' },
  { thing: 'litterBox', label: 'litter box' },
  { thing: 'plants', label: 'plants' },
],
titleId: "editTitle" 
};

function buildGame(objects) {
  gameboard.innerHTML ='';
  const nextBtn = document.createElement('button');
  nextBtn.classList.add('anotherNext');
  let title = document.createElement("h2");
  title.innerHTML = startGameObjects.title;
  title.setAttribute("id", startGameObjects.titleId); 
  gameboard.appendChild(title);
  objects.forEach(function(object) {
    if (object.thing === selectedObject) {
      const index = objects.indexOf(object);
      if (index > -1) {
        objects.splice(index, 1);
      }
    }
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('houseStuff'); 
    let objectChoice = document.createElement("input");
    objectChoice.type = "radio";
    objectChoice.name = "objectsRadioButtons";
    containerDiv.classList.add(object.thing );
    objectChoice.setAttribute("id", object.thing);
   //containerDiv.setAttribute('class', object.thing );
   //objectChoice.setAttribute('value', object.thing);
    objectChoice.thing = object.thing;
    gameboard.appendChild(containerDiv);
    containerDiv.appendChild(objectChoice); 
    let label = document.createElement("label");
  

    if (object.thing) {
      //containerDiv.setAttribute('class', object.thing );
      //objectChoice.setAttribute('value', object.thing);
      containerDiv.setAttribute('id', object.thing );
      objectChoice.setAttribute('value', object.thing);
      objectChoice.thing = object.thing;
      label.innerHTML = object.label;
      }
    /* else {
        console.log(object);
        containerDiv.setAttribute('id', object);
        objectChoice.setAttribute('value', object);
        label.innerHTML = object;
      } */
      gameboard.appendChild(containerDiv);
      containerDiv.appendChild(objectChoice);
      nextBtn.textContent = 'Next'; 
      nextBtn.addEventListener('click', buildThirdQuestion);
      gameboard.appendChild(nextBtn);
      
   // gameboard.appendChild(label);
    
 /*
    label.setAttribute("for", object.thing)
    label.innerHTML = object.label;
    gameboard.appendChild(label);
*/
    //containerDiv.appendChild(label);
   

});


}

function removeSelectedObject(selectedObject) {
  startGameObjects.items = startGameObjects.items.filter(item => item.thing !== selectedObject);
 
  
}


buildGame(startGameObjects.items);

function buildThirdQuestion(){
  

  let selectedObject = document.querySelector('input[name="objectsRadioButtons"]:checked').thing;
  removeSelectedObject(selectedObject);

  const nextBtn = document.createElement('button');
  nextBtn.classList.add('anotherNext');
  let catData = catName === 'pip' ? pipData : ivyData;
  const secondQuestionChoices = document.querySelectorAll('input[type=radio]');
  secondQuestionChoices.forEach( choice => {
    
    if (choice.checked) {
      
      catData.forEach( item => {
        
        if (choice.value == item.houseObject) {
          
          console.log(item.array);
          gameboard.innerHTML = '';
          item.array.forEach( catAction => {
            // put your loop to create elements and attach them to the document here.
            let containZeDiv = document.createElement('div');
            containZeDiv.classList.add('objectInteractions'); 
            let label = document.createElement("label");
          label.classList.add("labelClass");
        label.innerHTML = catAction;
            let interactionChoice = document.createElement("input");
            interactionChoice.type = "radio";
            interactionChoice.name = "interactionsRadioButtons";
            interactionChoice.classList.add("radioClass");

            // containZeDiv.classList.add( );
            interactionChoice.setAttribute("value", catAction);
            interactionChoice.houseObject = item.houseObject;
            gameboard.appendChild(containZeDiv);
            containZeDiv.appendChild(interactionChoice);
            containZeDiv.appendChild(label);

            // let labelMore = document.createElement("labelMore");
          });
        }
      });
    }
  });
      nextBtn.textContent = 'Next'; 
      nextBtn.addEventListener('click', checkForWin);
      nextBtn.addEventListener('click', returnToObjects);
      gameboard.appendChild(nextBtn);
      nextBtn.addEventListener('click', function() {

        const selectedRadio = document.querySelector('input[name="objectsRadioButtons"]:checked');
      
        if (selectedRadio) {
          selectedObject = selectedRadio.thing;
           if (object.classList.contains('startGameObject')) {
   
    objectSelectionCounter++;
    
    // Check if all startGameObjects have been selected
    if (objectSelectionCounter === startGameObjects.length) {
      const finishedMessage = document.createElement('div');
      finishedMessage.textContent = 'Game Over!';
      catAction.style.display = none;
    }
  }
          // you can also store selectedObject in local storage here
        }
      });
}

function returnToObjects(){
    
     buildGame(startGameObjects.items);
     console.log(ivyScore);
      console.log(pipScore);
   }
 
   let randomNum = Math.floor(Math.random() * 90) + 1;
   var pipScore = 0;
   var ivyScore = 0;


   function checkForWin(pipData, ivyData) {
     const pipWinningPath = ['loaf', 'hide underneath', 'loaf', 'jump on sill and miss then give up', 'have a little drink', 'throw up food', 'check on hidden hair elastics', 'get fur on clothes', 'break in and steal tampons', 'hide from ivy', 'chew and throw up'];
     const ivyWinningPath = ['scratch', 'tear at quilt', 'knock over cups', 'watch birds', 'have a little drink', 'snack', 'make biscuits', 'plan world domination', 'break in and lick sink', 'poop', 'climb'];
   
    
   
     if (pipData.array === pipWinningPath) {
       return pipScore + 100;
     }
     if (ivyData.toString() === ivyWinningPath.toString()) {
       return ivyScore + 100;
     }
     return randomNum;
     
   }
   
   
 










 




  
