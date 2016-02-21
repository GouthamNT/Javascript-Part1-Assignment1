

function checkNum() {
    var radiusInput = document.querySelector("#radius").value;
    var radius = parseFloat(radiusInput);
    
    if (typeof (radius) === 'number') {
        var area = calCircleArea(radius);
        var result = document.querySelector('#area');
        result.textContent = 'THe radius of circle is '+ area;
    }

    else {
        alert("Enter a numeric value");
    }
}

function calCircleArea(radius) {
    var result = 22 * radius * radius / 7;
    return result.toFixed(10);
}