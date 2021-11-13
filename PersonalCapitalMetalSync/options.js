var silverEntry = "";
var goldEntry = "";
var platinumEntry = "";
var palladiumEntry = "";
function setSilver() {
    chrome.storage.sync.get("silverAmount", function(result) {
        if (result.silverAmount == null) {
            chrome.storage.sync.set({["silverAmount"]: 0});
            location.reload();
        }
        else if (silverEntry.length != 0) {
            chrome.storage.sync.set({["silverAmount"]: silverEntry});
            location.reload();
        }
        else {
            document.getElementById("silverDisplay").innerHTML = result.silverAmount;
        }
    });
}
function setGold() {
    chrome.storage.sync.get("goldAmount", function(result) {
        if (result.goldAmount == null) {
            chrome.storage.sync.set({["goldAmount"]: 0});
            location.reload();
        }
        else if (goldEntry.length != 0) {
            chrome.storage.sync.set({["goldAmount"]: goldEntry});
            location.reload();
        }
        else {
            document.getElementById("goldDisplay").innerHTML = result.goldAmount;
        }
    });
}
function setPlatinum() {
    chrome.storage.sync.get("platinumAmount", function(result) {
        if (result.platinumAmount == null) {
            chrome.storage.sync.set({["platinumAmount"]: 0});
            location.reload();
        }
        else if (platinumEntry.length != 0) {
            chrome.storage.sync.set({["platinumAmount"]: platinumEntry});
            location.reload();
        }
        else {
            document.getElementById("platinumDisplay").innerHTML = result.platinumAmount;
        }
    });
}
function setPalladium() {
    chrome.storage.sync.get("palladiumAmount", function(result) {
        if (result.palladiumAmount == null) {
            chrome.storage.sync.set({["palladiumAmount"]: 0});
            location.reload();
        }
        else if (palladiumEntry.length != 0) {
            chrome.storage.sync.set({["palladiumAmount"]: palladiumEntry});
            location.reload();
        }
        else {
            document.getElementById("palladiumDisplay").innerHTML = result.palladiumAmount;
        }
    });
}
document.getElementById('saveButton').addEventListener('click', function() {
    silverEntry = parseFloat(document.getElementById("silver").value);
    goldEntry =  parseFloat(document.getElementById("gold").value);
    platinumEntry =  parseFloat(document.getElementById("platinum").value);
    palladiumEntry = parseFloat(document.getElementById("palladium").value);
    setSilver();
    setGold();
    setPlatinum();
    setPalladium();
});
document.addEventListener('DOMContentLoaded', function() {
    setSilver();
    setGold();
    setPlatinum();
    setPalladium();
});