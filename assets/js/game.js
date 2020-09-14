// Declaring Robot's Name, Health, and Attack
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// Logging Robot Variables
console.log(playerName, playerAttack, playerHealth);

// Declaring Enemy Name, Health, and Attack
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyAttack, enemyHealth);

// Creates a function named "fight"
var fight = function() {
    // Alert user to start of round
    window.alert("Welcome to Robot Gladiators!");

    // Subtract playerAttack from enemyHealth
    enemyHealth = enemyHealth - playerAttack;

    // Log result message
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract enemyAttack from playerHealth
    playerHealth = playerHealth - enemyAttack;

    // Log result message
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

// Execute fight function
fight();