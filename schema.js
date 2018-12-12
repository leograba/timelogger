const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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
    var url = "https://prod-85.westeurope.logic.azure.com:443/workflows/2b8d5fe1f9984b94a6bcee8e8262f199/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ByACRiHlv8q7wTVnKW3F0-_lUijkp1us9nI7acL92k8";
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
