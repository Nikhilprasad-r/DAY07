// 1.a :Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
  var res = JSON.parse(request.response);
  const display = document.getElementById("divbox");

  res.filter((element) => {
    if (element.region === "Asia") {
      console.log(element.name.common, "is in Asia");
      display.innerHTML += `<p>${element.name.common}, is in Asia</p>`;
    }
  });
};
