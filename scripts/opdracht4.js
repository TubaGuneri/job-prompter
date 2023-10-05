console.log( userInput + " is een leuke afdeling om te werken. Er werken op dit moment " + departments[userInput].numberOfEmployees + " medewerkers.")

//Opdracht 4b:

const choice = prompt(`Je koos ${userInput}. Over welke functie wil je meer weten? Voer een getal tussen 0 en 4 in: 
 0: ${departments[userInput].jobs[0].title}
 1: ${departments[userInput].jobs[1].title}
 2: ${departments[userInput].jobs[2].title}
 3: ${departments[userInput].jobs[3].title}`)
console.log(choice);

//Opdracht 4c:

switch (choice) {
    case '0':
         console.log(`Je koos ${departments[userInput].jobs[0].title}. ${departments[userInput].jobs[0].description}.`)
        break;
    case '1':
        console.log(`Je koos ${departments[userInput].jobs[1].title}. ${departments[userInput].jobs[1].description}.`)
        break;
    case '2':
        console.log(`Je koos ${departments[userInput].jobs[2].title}. ${departments[userInput].jobs[2].description}.`)
        break;
    case '3':
        console.log(`Je koos ${departments[userInput].jobs[3].title}. ${departments[userInput].jobs[3].description}.`)
        break;
}

