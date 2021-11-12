var silverAmount = "";
var goldAmount = "";
var platinumAmount = "";
var palladiumAmount = "";
var silverPrice = "";
var goldPrice = "";
var platinumPrice = "";
var palladiumPrice = "";
var silverContainer = "";
var goldContainer = "";
var platinumContainer = "";
var palladiunContainer = "";
var containers = "";
var containerNames = "";
var isSilverContainer = false;
var isGoldContainer = false;
var isPlatinumContainer = false;
var isPalladiumContainer = false;
function getSilverPrice() {
    
};
function getGoldPrice() {
    fetch('https://www.apmex.com/gold-price')
    .then(function(response) {
        return response.text()
    })
    .then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        goldPrice = parseFloat(doc.getElementsByClassName("price").item(4).innerHTML.replace(/[$,]/g, ''));
        delete parser;
    });
}
function getPlatinumPrice() {
    fetch('https://www.apmex.com/platinum-price')
    .then(function(response) {
        return response.text()
    })
    .then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        platinumPrice = parseFloat(doc.getElementsByClassName("price").item(4).innerHTML.replace(/[$,]/g, ''));
        delete parser;
    });
}
function getPalladiumPrice() {
    fetch('https://www.apmex.com/palladium-price')
    .then(function(response) {
        return response.text()
    })
    .then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        palladiumPrice = parseFloat(doc.getElementsByClassName("price").item(4).innerHTML.replace(/[$,]/g, ''));
        delete parser;
    });
}
function checkContainers(i) {
    if (containerNames.item(i).innerHTML == "Silver") {
        isSilverContainer = true;
        silverContainer = containerEdits.item(i);
        console.log("Silver Container Detected");
    }
    if (containerNames.item(i).innerHTML == "Gold") {
        isGoldContainer = true;
        goldContainer = containerEdits.item(i);
        console.log("Gold Container Detected");
    }
    if (containerNames.item(i).innerHTML == "Platinum") {
        isPlatinumContainer = true;
        platinumContainer = containerEdits.item(i);
        console.log("Platinum Container Detected");
    }
    if (containerNames.item(i).innerHTML == "Palladium") {
        isPlatinumContainer = true;
        palladiumContainer = containerEdits.item(i);
        console.log("Palladium Container Detected");
    }
}
function submit() {
    if (document.readyState !== "complete") {
        window.setTimeout(function() {submit()}, 1000);
    }
    else {
        console.log(document.querySelectorAll("specify selector"));
    }
}
function editContainers() {
    chrome.storage.sync.get("silverAmount", function(result) {
        if (result.silver == null) {
            silverAmount = 0;
        }
        else {
            silverAmount = result.silverAmount;
        }
        console.log("silver amount is " + silverAmount);
        if (isSilverContainer == true) {
            fetch('https://www.apmex.com/silver-price')
            .then(function(response) {
                return response.text()
            })
            .then(function(html) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(html, "text/html");
                silverPrice = parseFloat(doc.getElementsByClassName("price").item(4).innerHTML.replace(/[$,]/g, ''));
                console.log(silverAmount);
                console.log(silverPrice);
                silverContainer.click();
                submit();
                //element.dispatchEvent(new KeyboardEvent('keydown',{'key':'a'}));
                delete parser;
            });
        }
    });
}
function main() {
    if (document.readyState !== "complete") {
        window.setTimeout(function() {main()}, 1000);
    }
    else {
        containers = document.getElementsByClassName("sidebar-account__detail-name qa-sidebar-account-detail-name").length;
        containerNames = document.getElementsByClassName("sidebar-account__detail-name qa-sidebar-account-detail-name");
        containerEdits = document.getElementsByClassName("edit u-full-center--abs qa-sidebar-account-edit");
        for (var i = 0; i < containers; i++) {
            console.log(containerNames.item(i).innerHTML);
            checkContainers(i);
        }
        editContainers();
    }
}
main();