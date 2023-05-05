function convert() {
    var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = (celsius * 1.8) + 32;
    var result = document.getElementById('result');
    result.innerHTML = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
  }