function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
  
}

function leashDog(dogName,dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`;
}

function walkToPark(dogName,dogBreed) {
 console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}

function throwFrisbee(dogName,dogBreed) {
 console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

function walkHome(dogName,dogBreed) {
 console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`;
}

function unleashDog(dogName,dogBreed) {
 console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`;
}

  let routine=[];
   routine=[wakeDog(dogName,dogBreed),leashDog(dogName,dogBreed),walkToPark(dogName,dogBreed),throwFrisbee(dogName,dogBreed),walkHome(dogName,dogBreed),unleashDog(dogName,dogBreed)];
   return routine;





   /*   ✓ has variables for each activity
      1) has an array called 'routine' that contains each activity
    the function that runs the array o' functions
      2) calls into the independent functions*/
