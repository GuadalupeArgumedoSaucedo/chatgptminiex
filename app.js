"use strict";

finalFlash("Vegeta"); 
finalFlash("Trunks"); 
finalFlash("Goku"); 

function finalFlash(characterName) {
    console.log(characterName + " executes Final Flash!");
  }

  let vegetaAttackPower = 9000;
  let vegetaDefensePower = 5000;
  
  let vegetaTotalPower = calculateTotalPower(vegetaAttackPower, vegetaDefensePower);
  console.log("Vegeta's total power level is: " + vegetaTotalPower); 
  
function calculateTotalPower(attackPower, defensePower) {
    return attackPower - defensePower;
  }

finalFlash("Vegeta"); 

let gokuAttackPower = 10000;
let gokuDefensePower = 3000;
let gokuTotalPower = calculateTotalPower(gokuAttackPower, gokuDefensePower);

console.log("Goku's total power level is: " + gokuTotalPower); 
