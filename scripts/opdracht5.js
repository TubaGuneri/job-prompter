const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
console.log(userInput);

if(userInput !== 'marketing' && userInput !== 'sales' && userInput !== 'customer-service')
    document.getElementById('error-message').textContent =`Ongeldige keuze. Probeer het opnieuw door de pagina te verversen`;
else {
    let jobLength = departments[userInput].jobs.length;
    let jobTitles="";
    for (let i = 0; i < jobLength; i++)
        jobTitles += i + ' : ' + departments[userInput].jobs[i].title + '\n';

    let choice = prompt(`Je koos ${userInput}. Over welke functie wil je meer weten? Voer een getal tussen 0 en ${jobLength} in:\n${jobTitles}`);

    if (choice === undefined || choice > jobLength)
        document.getElementById('error-message').textContent = 'Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.';
    else {
        document.getElementById('role-title').textContent = `${departments[userInput].jobs[choice].title}`;
        document.getElementById('department-description').textContent = `${departments[userInput].description}`;
        document.getElementById('role-description').textContent = `${departments[userInput].jobs[choice].description}`;
        document.getElementById('role-visitor').textContent = 'Tuba Guneri!';
    }
}