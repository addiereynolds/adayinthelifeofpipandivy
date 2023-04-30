const gameboard = document.getElementById('gameboard');
const catName = localStorage.getItem('catChoice');
let catObjects = [];
let pipData = [
    { houseObject: 'couch', label: 'couch', array: ['loaf', 'scratch', 'hide underneath', 'get scared of'] },
    { houseObject: 'bed', label: 'bed', array: ['loaf', 'tear at quilt', 'meow at Ivy'] }, 
    { houseObject: 'counter', label: 'counter', array: ['loaf', 'jump to window'] },
    { houseObject: 'window', label: 'window', array: ['watch birds', 'jump on sill'] },
    {houseObject: 'water bowl', label: 'water bowl', array: ['have a little drink', 'get wet'] },
    {houseObject: 'food bowl', label: 'food bowl', array: ['snack', 'throw up food'] },
    {houseObject: 'bean bag', label: 'bean bag', array:['loaf', 'check on hidden hair elastics'] },
    {houseObject: 'closet', label: 'closet', array: ['get fur on clothes', 'loaf on purses', 'play with the belts'] },
    {houseObject: 'bathroom door', label: 'bathroom door', array: ['meow at door', 'break in and lick sink', 'break in and drink from toilet', 'break in and play in tub'] },
    {houseObject: 'litter box', label: 'litter box', array: ['poop', 'sleep in', 'hide from ivy'] },
    {houseObject: 'plants', label: 'plants', array: ['chew and throw up', 'circle suspiciously', 'get scared of'] }
  ];

let ivyData = [
    {houseObject: 'couch', label: 'couch', array:  ['loaf', 'scratch', 'make biscuits', 'meow at aimlessly'] },
    {houseObject: 'bed', label: 'bed', array: ['loaf', 'mess up blankets', 'cuddle with Pip'] },
    {houseObject: 'counter', label: 'counter', array: ['knock over cups', 'play with stove'] },
    {houseObject: 'window', label: 'window', array: ['watch birds', 'scratch screen', 'climb into'] },
    {houseObject: 'water bowl', label: 'water bowl', array: ['have a little drink', 'get water everywhere'] },
    {houseObject: 'food bowl', label: 'food bowl', array: ['snack', 'get food everywhere'] },
    {houseObject: 'bean bag', label: 'bean bag', array: ['nap', 'make biscuits', 'jump on'] },
    {houseObject: 'closet', label: 'closet', array: ['mess up clothes', 'plan world domination', 'play with the belts'] },
    {houseObject: 'bathroom door', label: 'bathroom door', array: ['scratch', 'break in and steal tampons', 'break in and play with hanging towels'] },
    {houseObject: 'litter box', label: 'litter box', array: ['poop', 'drag poop everywhere', 'dig around'] },
    {houseObject: 'plants', label: 'plants', array: ['sniff', 'knock over', 'climb'] }
  ];
const startGameObjects = 
[ { thing: 'couch', label: 'couch' },
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
];


function buildGame(objects) {
  gameboard.innerHTML ='';
  console.log(objects);
  objects.forEach(function(object) {
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
      else {
        console.log(object);
        containerDiv.setAttribute('id', object);
        objectChoice.setAttribute('value', object);
        label.innerHTML = object;
      }
      gameboard.appendChild(containerDiv);
      containerDiv.appendChild(objectChoice); 
      gameboard.appendChild(label);
    });
  }





    
    //label.setAttribute("for", object.thing)
    //label.innerHTML = object.label;

   
    //gameboard.appendChild(label);
    //containerDiv.appendChild(label);
    // Add event listener to each radio button
    objectChoice.addEventListener('click', function() {
      // Do something when the radio button is clicked
      console.log(`You clicked on ${object.label} (${object.thing})`);
      function catAction(thing, cat){
        console.log(thing + ' clicked for ' + cat);
        let catData = null;
       if (cat === "pip") {
        catData = pipData;
       }
       else if (cat === 'ivy') {
        catData = ivyData;
       }
      catData.forEach( obj => {
        if (obj.houseObject == thing) {
          console.log(catData.array)
        }

      });

      const radioButtons = Array.from(document.querySelectorAll('input[name="objectsRadioButtons"]'));

      radioButtons.forEach( button => {
        button.addEventListener('change', function() {
          catAction(this.value, catName);
        });
      });
      buildGame(catData.array);
      }
      

    });




buildGame(startGameObjects);


  

// Add event listener to all radio buttons







/*
radioButtons.forEach(function(radioButton) {
  radioButton.addEventListener('click', function() {
    console.log('Radio button clicked');
    // Get the value of the selected radio button
    const selectedObject = this.value;

    // Perform action based on selected object
    if (selectedObject === 'couch') {
   const couchArray = catObjects.find(object => object.value === 'couch').array;
 displayArray(couchArray);
    } else if (selectedObject === 'bed') {
   const bedArray = catObjects.find(object => object.value === 'bed').array;
displayArray(bedArray);
    } else if (selectedObject === 'counter') {
      const counterArray = catObjects.find(object => object.value === 'counter').array;
displayArray(counterArray);
    } else if (selectedObject === 'window'){
      const windowArray = catObjects.find(object => object.value === 'window').array;
displayArray(windowArray);
    }
    else if (selectedObject === 'water bowl'){
      const waterBowlArray = catObjects.find(object => object.value === 'water bowl').array;
displayArray(waterBowlArray);
    }
    else if (selectedObject === 'food bowl'){
      const foodBowlArray = catObjects.find(object => object.value === 'food bowl').array;
displayArray(foodBowlArray);
    }
    else if (selectedObject === 'bean bag'){
      const beanBagArray = catObjects.find(object => object.value === 'bean bag').array;
displayArray(beanBagArray);
    }
    else if (selectedObject === 'closet'){
      const closetArray = catObjects.find(object => object.value === 'closet').array;
displayArray(closetArray);
    }
    else if (selectedObject === 'bathroom door'){
      const bathroomDoorArray = catObjects.find(object => object.value === 'bathroom door').array;
displayArray(bathroomDoorArray);
    }
    else if (selectedObject === 'litter box'){
      const litterBoxArray = catObjects.find(object => object.value === 'litter box').array;
displayArray(litterBoxArray);
    }
    else if (selectedObject === 'plants'){
      const plantsArray = catObjects.find(object => object.value === 'plants').array;
displayArray(plantsArray);
    }
  })
});
     
*/

