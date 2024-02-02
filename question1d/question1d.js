// 1.d :Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
  var res = JSON.parse(request.response);
  const display = document.getElementById("divbox");

  const population = res.reduce((acc, element) => {
    return acc + element.population;
  }, 0);
  console.log("Total population of given countries:", population);
  display.innerHTML += `Total population of given countries:${population}`;
};
