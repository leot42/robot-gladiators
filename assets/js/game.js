let playerName;
let playerHealth = 100;
let playerAttack = 10;

//console.log(playerName, playerHealth, playerAttack);

let enemyName = "Roborto"
let enemyHealth = 50;
let enemyAttack = 12;

let fight = function(playerName) {
    // Alert players that they're starting the round
    window.alert(`Welcome to Robot Gladiators ${playerName}!`);

    // Subtract the value of `playerAttack` from the value of `enemyHealth`
    // and use the result to update the `enemyHealth` value.
    enemyHealth = enemyHealth - playerAttack;

    // Log the resulting message to the console so we know that it worked.
    console.log(
        `${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} remaining.`
    );

    // Check enemy health.
    if (enemyHealth <= 0) {
        window.alert(`${enemyName} has died.`);
    }
    else {
        window.alert(`${enemyName} still has ${enemyHealth} health left.`);
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth`
    // and use the result to update the value of `playerHealth`.
        playerHealth = playerHealth - enemyAttack;

    // Log the resulting message to the console so that we know that it worked.
    console.log(
        `${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} remaining.`
    );

    // Check player health
    if (playerHealth <= 0) {
        window.alert(`${playerName} has died.`)
    }
    else {
        window.alert(`${playerName} still has ${playerHealth} left.`);
    }
};
playerName = prompt("Enter Player Name")
fight(((playerName == "") ? "DebugFighter!" : playerName));