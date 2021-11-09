
document.getElementById('saveButton').addEventListener('click', function(){
    var silver = document.getElementById("silver").value;   //gets values of all inputs
    var gold =  document.getElementById("gold").value;
    var platinum =  document.getElementById("platinum").value;
    var palladium = document.getElementById("palladium").value;
    if (silver.length == 0) //if input is left blank, saves 0 instead
    {
        chrome.storage.sync.set({silverAmount: silver.length});
        console.log('Saving silver: 0 oz');
    }
    else    //otherwise saves input normally
    {
        chrome.storage.sync.set({silverAmount: silver});
        console.log('Saving silver: ' + silver + ' oz');
    }
    if (gold.length == 0)
    {
        chrome.storage.sync.set({goldAmount: gold.length});
        console.log('Saving gold: 0 oz');
    }
    else
    {
    chrome.storage.sync.set({goldAmount: gold});
    console.log('Saving gold: ' + gold + ' oz');
    }
    if (platinum.length == 0)
    {
        chrome.storage.sync.set({platinumAmount: platinum.length});
        console.log('Saving platinum: 0 oz');
    }
    else
    {
    chrome.storage.sync.set({platinumAmount: platinum});
    console.log('Saving platinum: ' + platinum + ' oz');
    }
    if (palladium.length == 0)
    {
        chrome.storage.sync.set({palladiumAmount: palladium.length});
        console.log('Saving palladium: 0 oz');
    }
    else
    {
    chrome.storage.sync.set({palladiumAmount: palladium});
    console.log('Saving palladium: ' + palladium + ' oz');  //updates display numbers
    }
    chrome.storage.sync.get(["silverAmount"], function(result) {
        document.getElementById("silverDisplay").innerHTML = result.silverAmount;
    });
    chrome.storage.sync.get(["goldAmount"], function(result) {
        document.getElementById("goldDisplay").innerHTML = result.goldAmount;
    });
    chrome.storage.sync.get(["platinumAmount"], function(result) {
        document.getElementById("platinumDisplay").innerHTML = result.platinumAmount;
    });
    chrome.storage.sync.get(["palladiumAmount"], function(result) {
        document.getElementById("palladiumDisplay").innerHTML = result.palladiumAmount;
    });
});
document.addEventListener('DOMContentLoaded', function(){   //updates display numbers when webpage is refreshed
    chrome.storage.sync.get(["silverAmount"], function(result) {
        document.getElementById("silverDisplay").innerHTML = result.silverAmount;
    });
    chrome.storage.sync.get(["goldAmount"], function(result) {
        document.getElementById("goldDisplay").innerHTML = result.goldAmount;
    });
    chrome.storage.sync.get(["platinumAmount"], function(result) {
        document.getElementById("platinumDisplay").innerHTML = result.platinumAmount;
    });
    chrome.storage.sync.get(["palladiumAmount"], function(result) {
        document.getElementById("palladiumDisplay").innerHTML = result.palladiumAmount;
    });
});