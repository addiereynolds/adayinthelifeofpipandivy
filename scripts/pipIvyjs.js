const gameboard = document.getElementById('gameboard');
const catName = localStorage.getItem('catChoice');
let catObjects = [];
let pipData = [
    { houseObject: 'couch', label: 'couch', array: ['loaf', 'scratch', 'hide underneath', 'get scared of'] },
    { houseObject: 'bed', label: 'bed', array: ['loaf', 'tear at quilt', 'meow at Ivy'] }, 
    { houseObject: 'counter', label: 'counter', array: ['loaf', 'jump to window'] },
    { houseObject: 'window', label: 'window', array: ['watch birds', 'jump on sill'] },
    {houseObject: 'waterBowl', label: 'water bowl', array: ['have a little drink', 'get wet'] },
    {houseObject: 'foodBowl', label: 'food bowl', array: ['snack', 'throw up food'] },
    {houseObject: 'beanBag', label: 'bean bag', array:['loaf', 'check on hidden hair elastics'] },
    {houseObject: 'closet', label: 'closet', array: ['get fur on clothes', 'loaf on purses', 'play with the belts'] },
    {houseObject: 'bathroomDoor', label: 'bathroom door', array: ['meow at door', 'break in and lick sink', 'break in and drink from toilet', 'break in and play in tub'] },
    {houseObject: 'litterBox', label: 'litter box', array: ['poop', 'sleep in', 'hide from ivy'] },
    {houseObject: 'plants', label: 'plants', array: ['chew and throw up', 'circle suspiciously', 'get scared of'] }
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
    {houseObject: 'bathroomDoor', label: 'bathroom door', array: ['scratch', 'break in and steal tampons', 'break in and play with hanging towels'] },
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
  let title = document.createElement("h2");
  title.innerHTML = startGameObjects.title;
  title.setAttribute("id", startGameObjects.titleId); 
  gameboard.appendChild(title);
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
      //gameboard.appendChild(label);
    
 
    //label.setAttribute("for", object.thing)
    //label.innerHTML = object.label;
    //gameboard.appendChild(label);
    //containerDiv.appendChild(label);


    // Adds event listener to each radio button
    let catData = catName === 'pip' ? pipData : ivyData;
    objectChoice.addEventListener('click', function() {

      // Do something when the radio button is clicked
      console.log(`You clicked on  ${object.thing} for ` + catName);
      if (event.target.type === 'radio') {
        let selectedObject = event.target.thing;
        let matchingData = catData.find(function(data) {
          return data.houseObject === selectedObject;
        });
        console.log(matchingData.array);

        function thirdQ(objects) {
          gameboard.innerHTML ='';
          objects.forEach(function(object) {
            let containZeDiv = document.createElement('div');
            containZeDiv.classList.add('objectInteractions'); 
            let label = document.createElement("label");
          label.classList.add("labelClass");
        //label.innerHTML = object.label;
            let interactionChoice = document.createElement("input");
            interactionChoice.type = "radio";
            interactionChoice.name = "interactionsRadioButtons";
            interactionChoice.classList.add("radioClass");

            containZeDiv.classList.add(object.houseObject );
            interactionChoice.setAttribute("id", object.houseObject);
            interactionChoice.houseObject = object.houseObject;
            gameboard.appendChild(containZeDiv);
            containZeDiv.appendChild(interactionChoice); 
            let labelMore = document.createElement("labelMore");
            if (object.houseObject) {
              containZeDiv.setAttribute('id', object.houseObject );
              interactionChoice.setAttribute('value', object.houseObject);
              
              interactionChoice.houseObject = object.houseObject;
              labelMore.innerHTML = object.labelMore;
              }
              else {
                console.log(object);
                containZeDiv.setAttribute('id', object);
                interactionChoice.setAttribute('value', object);
                label.innerHTML = object;
              }
              label.setAttribute("for", object.houseObject)
              gameboard.appendChild(containZeDiv);
              //containZeDiv.appendChild(interactionChoice); 
              containZeDiv.appendChild(label);
             
             // label.innerHTML = object.label;

             
            });
          }

          thirdQ(matchingData.array);


      }
    });
    
     
   

  });
    
}

  buildGame(startGameObjects.items);

 




  
