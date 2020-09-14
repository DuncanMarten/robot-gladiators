// Declaring Robot's Name, Health, and Attack
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Logging Robot Variables
console.log(playerName, playerAttack, playerHealth);

// Declaring Enemy Name, Health, and Attack
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyAttack, enemyHealth);

// Creates a function named "fight"
var fight = function() {
    // Fight or Skip prompt
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // Alert user to start of round
    window.alert("Welcome to Robot Gladiators!");

    // if player chose fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Subtract playerAttack from enemyHealth
        enemyHealth = enemyHealth - playerAttack;
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
    }
    // if player chose skip
    else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes, leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money
            playerMoney + playerMoney -2;
        }
        // if no, run fight() again
        else {
            fight();
        }
    }
    else {
        window.alert("You need to pick a valid option. Try again!");
    }
};

// Execute fight function
fight();