function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Scissors";
        case 1:
            return "Paper";
        case 2:
            return "Rock";
        default:
            return null;
    }
}

function getWinner(pChoice, cChoice) {
    switch (pChoice) {
        case "Rock":
            switch (cChoice) {
                case "Rock":
                    return 0;
                case "Paper":
                    return -1;
                case "Scissors":
                    return 1;
            }
            break;
        case "Scissors":
            switch (cChoice) {
                case "Rock":
                    return -1;
                case "Paper":
                    return 1;
                case "Scissors":
                    return 0;
            }
            break;
        case "Paper":
            switch (cChoice) {
                case "Rock":
                    return 1;
                case "Paper":
                    return 0;
                case "Scissors":
                    return -1;
            }
            break;
        default:
            return null;
    }
}

function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

function tryPlaying() {
    let pChoice = prompt("Enter your choice:");
    if (!pChoice || pChoice.length < 2) {
        return null;
    }

    pChoice = capitalize(pChoice);
    let cChoice = getComputerChoice();
    let result = getWinner(pChoice, cChoice);

    switch (result) {
        case 0:
            return `You tied! ${pChoice} ties with ${cChoice}.`;
        case -1:
            return `You lost! ${pChoice} loses against ${cChoice}.`;
        case 1:
            return `You won! ${pChoice} wins against ${cChoice}.`;
        default:
            return null;
    }
}

function game() {
    console.log("Let's play Rock Paper Scissors!");
    for (let i = 0; i < 5; i++) {
        let result = tryPlaying();
        if (!result) {
            alert("Invalid input entered. Skipping game.");
            i--;
            continue;
        }
        alert(result);
    }
}

game();