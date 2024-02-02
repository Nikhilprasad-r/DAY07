// 1.c :Print the following details name, capital, flag, using forEach function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
  var res = JSON.parse(request.response);
  const display = document.getElementById("divbox");

  res.forEach((element) => {
    console.log(
      "Capital of",
      element.name.common,
      "is",
      element.capital[0],
      "and flag is",
      element.flag
    );
    display.innerHTML += `<p>Capital of
    ${element.name.common},
    is
    ${element.capital[0]}
    and flag is
    ${element.flag}</p>`;
  });
};
