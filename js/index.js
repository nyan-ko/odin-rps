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

function tryPlaying(pChoice) {
    if (!pChoice || pChoice.length < 2) {
        return null;
    }

    setImage(pChoice, "#player");
    pChoice = capitalize(pChoice);

    let cChoice = getComputerChoice();
    setImage(cChoice, "#computer");

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

function setImage(choice, who) {
    const img = document.querySelector(who);
    switch (choice.toLowerCase()) {
        case "rock":
            img.setAttribute("src", "style/img/rock.jpg");
            img.setAttribute("alt", "Rock!");
            break;
        case "paper":
            img.setAttribute("src", "style/img/paper.jpg");
            img.setAttribute("alt", "Paper!");
            break;
        case "scissors":
            img.setAttribute("src", "style/img/scissors.jpg");
            img.setAttribute("alt", "Scissors!");
            break;
        default:
            img.setAttribute("src", "style/img/question_mark.png");
            img.setAttribute("alt", "Waiting...");
            break;
    }
}

function onClick(e) {
    tryPlaying(this.getAttribute("id"));
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', onClick)
});