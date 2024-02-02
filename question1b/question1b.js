// 1.b :Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
  var res = JSON.parse(request.response);
  const display = document.getElementById("divbox");

  res.filter((element) => {
    if (element.population < 200000)
      console.log(element.name.common, "has population less than 200000");
    display.innerHTML += `<p>${element.name.common},has population less than 200000</p>`;
  });
};
