fetch('https://www.apmex.com/silver-price')
    .then(function(response) {
        return response.text()
    })
    .then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        var silverPrice = parseFloat(doc.getElementsByClassName("price").item(4).innerHTML.replace('$', ''));
        console.log(silverPrice);
    });