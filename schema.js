const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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

function getUserInput(){
    
}

// Make it usable standalone or as a library
if (typeof require != 'undefined' && require.main==module) {
    const readline = require('readline');
    addEntryToHours();
}
