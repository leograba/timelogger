const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const readline = require('readline');
const cfg = require("./config.json");

function addEntryToHours(data){
    // Expect data in the following format
    /*var data = {
        'description': 'asdfasdf',
        'analytic_account': 'IN206',
        'product': 'GRCost99',
        'quantity': 4.5
    }*/

    // Create object
    var xhr = new XMLHttpRequest();

    // Constants
    var url = cfg.msflow_url;
    var data_json = JSON.stringify(data);

    // Action
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(JSON.parse(xhr.responseText));
        }
    }

    // Send request
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(data_json);
}

function getUserInput(callback){
    /* Get user input from STDIN and pass resulting object to callback
    already in the format expected by MS Flow.

    No input validation is performed. */

    var user_input = { "product": "GRCost99"};
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question('Enter Analytic Account: ', (answer) => {
        user_input.analytic_account = answer;
        rl.question('Enter Description: ', (answer) => {
            user_input.description = answer;
            rl.question('Enter hours worked: ', (answer) => {
                user_input.quantity = answer;
                rl.close();
                return callback(null, user_input)
            });
        });
    });
}

// Make it usable standalone or as a library
if (typeof require != 'undefined' && require.main==module) {
    addEntryToHours();
}
