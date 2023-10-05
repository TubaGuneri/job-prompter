//Opdracht 3a:
let choice =  prompt(`Je koos ${userInput}. Over welke functie wil je meer weten? Voer een getal tussen 0 en 4 in: 
    0 : ${departments.marketing.jobs[0].title}
    1 : ${departments.marketing.jobs[1].title}
    2 : ${departments.marketing.jobs[2].title}
    3 : ${departments.marketing.jobs[3].title}
    4 : ${departments.marketing.jobs[4].title}`);

console.log(choice)

//Opdracht 3b:

switch(choice){
    case '0':
         console.log(`Je koos ${departments.marketing.jobs[0].title}. Een uitdagende rol! ${departments.marketing.jobs[0].description}`)
        break;
    case '1':
        console.log(`Je koos ${departments.marketing.jobs[1].title}. Een uitdagende rol! ${departments.marketing.jobs[1].description}`)
        break;
    case '2':
        console.log(`Je koos ${departments.marketing.jobs[2].title}. Een uitdagende rol! ${departments.marketing.jobs[2].description}`)
        break;
    case '3':
        console.log(`Je koos ${departments.marketing.jobs[3].title}. Een uitdagende rol! ${departments.marketing.jobs[3].description}`)
        break;
    case '4':
        console.log(`Je koos ${departments.marketing.jobs[4].title}. Een uitdagende rol! ${departments.marketing.jobs[4].description}`)
        break;
    default:
        console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.')
}
