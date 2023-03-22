function CalculateDisplacement(){
    let bore = document.getElementById('bore').value;
    let stroke = document.getElementById('stroke').value;
    let numberOfCylinders = document.getElementById('cylinders').value;
    let pi = 3.14;
    let radius = bore/2;

    let displacement = (pi * (radius*radius) * stroke * numberOfCylinders);

    document.getElementById('result').innerHTML = 
        "Your engine dispplacement is: " + (displacement/1000).toFixed(0) + "cc";
}