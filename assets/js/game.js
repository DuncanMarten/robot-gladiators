




// Declaring Robot's Name, Health, and Attack
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Logging Robot Variables
console.log(playerName, playerAttack, playerHealth);

// Declaring Enemy Name, Health, and Attack
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyNames);
console.log(enemyNames.length);

// Creates a function named "fight"
var fight = function(enemyName) {
    
    while(enemyHealth > 0 && playerHealth > 0){

        // Fight or Skip prompt
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player chose skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

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
                playerMoney = playerMoney + 20;
                break;
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
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
        
        else {
            window.alert("You need to pick a valid option. Try again!");
        }
    }
};

// start game function
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // For loop to fight each robot
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));

        var pickedEnemyName = enemyNames[i];

        enemyHealth = 50;

        //debugger;

        // call fight function
        fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    // player is out of health or out of enemies to fight
    endGame();
};

// end game function
var endGame = function() {
    // player alive
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// calls the start game function
startGame();