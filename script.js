/* ## Requirements

**Handle click events:** 

When you click an attack button:

-  update _state_ variable(s) to make the Freaky Fungus lose hit points (HP), and to reduce your attack points (AP). 
- See [Attacks](#attacks) below, for the AP and HP values of each attack
- State may be held in one our more variables of your choosing
- HP and AP values may not be negative (set to zero, if they would otherwise be negative)


**Render state changes to the DOM**

- Update the text above the attack buttons (eg, "100 AP")
- Update the text above the enemy fungus (eg, "100 HP")
- If the Freaky Fungus runs out of HP, the monster is dead and you win! Replace the `walk` class with a `dead` class on the freaky-fungus element, to make them fall over and die.
- If you run out of AP, the monster wins and humanity is doomed 😢 Replace the `walk` class with a `jump` class on the freaky-fungus element, to make them jump for the glory of the fungal race.
  - You may no longer attack, if AP is `0`. Give all of the attack buttons a [`disabled`](https://www.w3schools.com/tags/att_button_disabled.asp) attribute, so they may no longer be used. 

## Stretch Goals

**Progress Bar**

When state changes:
  - Update the value of each `<progress>` element

> Hint: the jQuery `.val()` method updates the `value` attribute of HTML elements!

**HP Regeneration**

[Scientist have recently revealed](https://www.nature.com/articles/s41598-022-05715-9) that fungi are tougher under harsh conditions.

If the Freaky Fungus' HP falls below 50, have it regenerate 1 HP every second.

> HINT: Look up the built in `setInterval()` function!


## Attacks

### ![arcane scepter](./images/arcane-scepter.png) Arcane Scepter

- **AP Cost:** 12
- **HP Damage:** 14


### ![entangle](./images/entangle-3.png) Entangle

- **AP Cost:** 23
- **HP Damage:** 9

### ![dragon blade](./images/dragon-blade-3.png) Dragon Blade

- **AP Cost:** 38
- **HP Damage:** 47

### ![star fire](./images/star-fire.png) Star Fire

- **AP Cost:** 33
- **HP Damage:** 25
 */

/* | Tasks |
[x] - Create global variables for AP amount and fungus health that will be updated in various states
    - AP amount will be subtracted with every
        - Using up AP with every attack/ button click
    - Fungus losing HP with every attack/ button click, so subtract relevant amount

[]  - Add Functionality to each attack buttons
[]    - Need to make event listener and handlers for:
        - Arcane
        - Entangle
        - Dragon Blade
        - Star Fire
[]  - Event handler functions created for each button
        - Event handlers are:
            - arcaneAttack
            - entangleAttack
            - dragonBladeAttack
            - starFireAttack
            - render
                - will render all states to DOM
        - CSS classes for animations:
            - run hurt animation class when monster is hit
            - run screen shake animation class when attack button clicked
            - when death class fungus health falls below 0
[]  - Event handler states:
        - arcaneAttack
            - AP Cost: 12
            - HP Damage: 14
        - entangleAttack
            - AP Cost: 23
            - HP Damage: 9
        - dragonBladeAttack
            - AP Cost: 38
            - HP Damage: 47
        - starFireAttack
            - AP Cost: 33
            - HP Damage: 25
[]  - Rendering:
[]      - Update the text above the attack buttons (eg, "100 AP")
            - Whenever an attack is used
[]      - Update the text above the enemy fungus (eg, "100 HP")
            - Whenever fungus is injured by attack
[]      - If the Freaky Fungus runs out of HP, the monster is dead and you win! 
            - Replace the `walk` class with a `dead` class on the freaky-fungus element, to make them fall over and die.
[]      - If you run out of AP, the monster wins and humanity is doomed 😢 
        - Replace the `walk` class with a `jump` class on the freaky-fungus element, to make them jump for the glory of the fungal race.
[       - You may no longer attack, if AP is `0`. Give all of the attack buttons a [`disabled`](https://www.w3schools.com/tags/att_button_disabled.asp) attribute, so they may no longer be used. 
[]  - Make sure:
        - AP and HP values do not fall below 100
            - So create conditional for this
        - 
*/

$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// - State Variables -
// Health of Freaky Fungus
let fungusHP = 100;

// Attack points of player
let playerAP = 100;

// This variable needs to be stored for attack run, dunno if needed but making just in case
// Will show what attacks depleted and killed all of monster HP(win) or all of AP(lose)
let attacks = [];


function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    // Attack Buttons
    // Event listeners and handlers
    $('.attack-btn.arcane-scepter').on('click', arcaneAttackHandler);
    $('.attack-btn.entangle').on('click', entangleAttackHandler);
    $('.attack-btn.dragon-blade').on('click', dragonBladeAttackHandler);
    $('.attack-btn.star-fire').on('click', starFireAttackHandler);

} // end onReady

// - Functions -
// Event Handlers
// Function will run arcaneAttackHandler
function arcaneAttackHandler() {
console.log("Attacked with Arcane Scepter");

} // end arcaneAttack

// Function will run entangleAttackHandler
function entangleAttackHandler() {


} // end entangleAttackHandler

// Function will run dragonBladeAttackHandler
function dragonBladeAttackHandler() {


} // end dragonBladeAttackHandler

// Function will run starFireAttackHandler
function starFireAttackHandler() {


} // end starFireAttackHandler