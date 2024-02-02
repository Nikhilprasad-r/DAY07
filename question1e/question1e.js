// 1.e :Print the country that uses US dollars as currency.

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
  var res = JSON.parse(request.response);
  const display = document.getElementById("divbox");

  for (let j of res) {
    if (j.currencies && j.currencies.USD) {
      console.log(j.name.common, "uses US dollars");
      display.innerHTML += `<p>${j.name.common} uses US dollars </p>`;
    }
  }
};
