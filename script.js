let container = document.querySelector(".container");
let region;
let salisdiv;
let forwrapper = document.querySelector(".forwrapper");
let forcont = document.querySelector(".forcont");

// Buttons
let mygtukasAll = document.querySelector(".mygtukasAll");
let mygtukasEu = document.querySelector(".mygtukasEu");
let mygtukasAsia = document.querySelector(".mygtukasAsia");
let mygtukasOce = document.querySelector(".mygtukasOce");
let mygtukasAfrica = document.querySelector(".mygtukasAfrica");
let mygtukasAme = document.querySelector(".mygtukasAme");
let close = document.querySelector("#close");
let forecast = document.querySelector(".forecast");
let button0 = document.querySelector(".button0");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
forecast.addEventListener("click", createforecast);
mygtukasAll.addEventListener("click", callAll);
mygtukasEu.addEventListener("click", callEu);
mygtukasAsia.addEventListener("click", callAsia);
mygtukasOce.addEventListener("click", callOce);
mygtukasAfrica.addEventListener("click", callAf);
mygtukasAme.addEventListener("click", callAm);

//Search
let search = document.querySelector("#search");
let searchbox = document.querySelector(".searchbox");
let searchclear = document.querySelector("#searchclear");
search.addEventListener("keyup", ieskoti);

//Content
let ximg0 = document.querySelector(".ximg0");
let xstatus0 = document.querySelector(".xstatus0");
let xtemp0 = document.querySelector(".xtemp0");
let ximg1 = document.querySelector(".ximg1");
let xstatus1 = document.querySelector(".xstatus1");
let xtemp1 = document.querySelector(".xtemp1");
let ximg2 = document.querySelector(".ximg2");
let xstatus2 = document.querySelector(".xstatus2");
let xtemp2 = document.querySelector(".xtemp2");
let ximg3 = document.querySelector(".ximg3");
let xstatus3 = document.querySelector(".xstatus3");
let xtemp3 = document.querySelector(".xtemp3");
let ximg4 = document.querySelector(".ximg4");
let xstatus4 = document.querySelector(".xstatus4");
let xtemp4 = document.querySelector(".xtemp4");
let ximg5 = document.querySelector(".ximg5");
let xstatus5 = document.querySelector(".xstatus5");
let xtemp5 = document.querySelector(".xtemp5");
let ximg6 = document.querySelector(".ximg6");
let xstatus6 = document.querySelector(".xstatus6");
let xtemp6 = document.querySelector(".xtemp6");
let ximg7 = document.querySelector(".ximg7");
let xstatus7 = document.querySelector(".xstatus7");
let xtemp7 = document.querySelector(".xtemp7");
let ximg8 = document.querySelector(".ximg8");
let xstatus8 = document.querySelector(".xstatus8");
let xtemp8 = document.querySelector(".xtemp8");
let ximg9 = document.querySelector(".ximg9");
let xstatus9 = document.querySelector(".xstatus9");
let xtemp9 = document.querySelector(".xtemp9");
let ximg10 = document.querySelector(".ximg10");
let xstatus10 = document.querySelector(".xstatus10");
let xtemp10 = document.querySelector(".xtemp10");
let ximg11 = document.querySelector(".ximg11");
let xstatus11 = document.querySelector(".xstatus11");
let xtemp11 = document.querySelector(".xtemp11");
let popflag = document.querySelector(".popflag");
let popname = document.querySelector(".popname");
let popregion = document.querySelector(".popregion");
let poplang = document.querySelector(".poplang");
let popcapital = document.querySelector(".popcapital");
let popcurrency1 = document.querySelector(".popcurrency1");
let popcurrency2 = document.querySelector(".popcurrency2");
let popcurrency3 = document.querySelector(".popcurrency3");

//--------------- Forecast button --------------------------

function createforecast() {
  if (forecast.classList.contains("forecast")) {
    forecast.classList.remove("forecast");
    forecast.style.backgroundColor = "#fbffb0";
    forecast.style.color = "black";
    document.querySelector(".popup").classList.add("borders");
    forwrapper.style.display = "block";
  } else {
    forecast.classList.add("forecast");
    document.querySelector(".popup").classList.remove("borders");
    forwrapper.style.display = "none";
    forecast.style.backgroundColor = "rgba(0, 0, 0, 0)";
    forecast.style.color = "white";
    forcont.style.display = "none";
  }
}

//------------------ Search ---------------------------

if (container.children.length == 0) {
  document.querySelector(".searchbox").classList.add("hidden");
}

function ieskoti() {
  let filter, p, value, i, x;
  filter = search.value.toUpperCase();
  x = container.getElementsByTagName("div");
  for (i = 0; i < x.length; i++) {
    p = x[i].getElementsByTagName("p")[0];
    value = p.textContent || p.innerText;
    if (p.innerHTML.toUpperCase().indexOf(filter) === 0) {
      x[i].style.display = "";
      console.log(search.value.length);
    } else {
      x[i].style.display = "none";
    }
  }
}

searchclear.addEventListener("click", function() {
  search.value = "";
  ieskoti();
});

//----------------- Close button -----------------------------

close.addEventListener("click", function() {
  document.querySelector(".popup").style.display = "none";
  document.querySelector(".popup").classList.remove("borders");
  forwrapper.style.display = "none";
  forecast.style.backgroundColor = "rgba(0, 0, 0, 0)";
  forecast.style.color = "white";
  forcont.style.display = "none";
  forecast.classList.add("forecast");
});

// -----------------  All countries ---------------------------

function callAll() {
  if (mygtukasAll.classList.contains("mygtukasAll")) {
    region = "all";
    mygtukasAll.classList.remove("mygtukasAll");
    mygtukasAll.style.backgroundColor = "#88e3d1";
    searchbox.classList.remove("hidden");
    salisdiv = "salis";
    fetchSalys();
  } else {
    let div = document.querySelectorAll(".salis").forEach(e => e.remove());
    mygtukasAll.classList.add("mygtukasAll");
    mygtukasAll.style.backgroundColor = "rgba(230, 230, 230, 0)";
    if (container.children.length == 0) {
      document.querySelector(".searchbox").classList.add("hidden");
    }
  }
}

//------------------ Europe -----------------------------------

function callEu() {
  if (mygtukasEu.classList.contains("mygtukasEu")) {
    region = "region/europe";
    mygtukasEu.classList.remove("mygtukasEu");
    mygtukasEu.style.backgroundColor = "#88e3d1";
    searchbox.classList.remove("hidden");
    salisdiv = "salisEU";
    fetchSalys();
  } else {
    let div = document.querySelectorAll(".salisEU").forEach(e => e.remove());
    mygtukasEu.classList.add("mygtukasEu");
    mygtukasEu.style.backgroundColor = "rgba(230, 230, 230, 0)";
    if (container.children.length == 0) {
      document.querySelector(".searchbox").classList.add("hidden");
    }
  }
}

//------------------- Asia ------------------------------------

function callAsia() {
  if (mygtukasAsia.classList.contains("mygtukasAsia")) {
    region = "region/asia";
    mygtukasAsia.classList.remove("mygtukasAsia");
    mygtukasAsia.style.backgroundColor = "#88e3d1";
    searchbox.classList.remove("hidden");
    salisdiv = "salisAZ";
    fetchSalys();
  } else {
    let div = document.querySelectorAll(".salisAZ").forEach(e => e.remove());
    mygtukasAsia.classList.add("mygtukasAsia");
    mygtukasAsia.style.backgroundColor = "rgba(230, 230, 230, 0)";
    if (container.children.length == 0) {
      document.querySelector(".searchbox").classList.add("hidden");
    }
  }
}

//------------------- Oceania ------------------------------------

function callOce() {
  if (mygtukasOce.classList.contains("mygtukasOce")) {
    region = "region/oceania";
    mygtukasOce.classList.remove("mygtukasOce");
    mygtukasOce.style.backgroundColor = "#88e3d1";
    searchbox.classList.remove("hidden");
    salisdiv = "salisOK";
    fetchSalys();
  } else {
    let div = document.querySelectorAll(".salisOK").forEach(e => e.remove());
    mygtukasOce.classList.add("mygtukasOce");
    mygtukasOce.style.backgroundColor = "rgba(230, 230, 230, 0)";
    if (container.children.length == 0) {
      document.querySelector(".searchbox").classList.add("hidden");
    }
  }
}

//------------------- Africa ------------------------------------

function callAf() {
  if (mygtukasAfrica.classList.contains("mygtukasAfrica")) {
    region = "region/africa";
    mygtukasAfrica.classList.remove("mygtukasAfrica");
    mygtukasAfrica.style.backgroundColor = "#88e3d1";
    searchbox.classList.remove("hidden");
    salisdiv = "salisAF";
    fetchSalys();
  } else {
    let div = document.querySelectorAll(".salisAF").forEach(e => e.remove());
    mygtukasAfrica.classList.add("mygtukasAfrica");
    mygtukasAfrica.style.backgroundColor = "rgba(230, 230, 230, 0)";
    if (container.children.length == 0) {
      document.querySelector(".searchbox").classList.add("hidden");
    }
  }
}

//------------------- America ------------------------------------

function callAm() {
  if (mygtukasAme.classList.contains("mygtukasAme")) {
    region = "region/americas";
    mygtukasAme.classList.remove("mygtukasAme");
    mygtukasAme.style.backgroundColor = "#88e3d1";
    searchbox.classList.remove("hidden");
    salisdiv = "salisAM";
    fetchSalys();
  } else {
    let div = document.querySelectorAll(".salisAM").forEach(e => e.remove());
    mygtukasAme.classList.add("mygtukasAme");
    mygtukasAme.style.backgroundColor = "rgba(230, 230, 230, 0)";
    if (container.children.length == 0) {
      document.querySelector(".searchbox").classList.add("hidden");
    }
  }
}

//-------------------------- Fetch ------------------------------------
async function fetchSalys() {
  try {
    const res = await fetch("https://restcountries.eu/rest/v2/" + region);
    const salys = await res.json();
    console.log(salys);

    salys.forEach(salis => {
      const div = document.createElement("div");
      div.setAttribute("class", salisdiv);
      const flag = document.createElement("img");
      flag.src = salis.flag;
      const name = document.createElement("p");
      name.innerHTML = salis.name;
      container.appendChild(div);
      div.appendChild(flag);
      div.appendChild(name);

      div.addEventListener("click", popup);
      function popup() {
        const fetchOrai = async () => {
          try {
            let capitalname = salis.capital;
            const res = await fetch(
              "https://api.weatherapi.com/v1/forecast.json?key=92b368d9a2284febab595130202811&q=" +
                capitalname +
                "&days=3"
            );
            const oras = await res.json();
            console.log(oras);
            button0.value = oras.forecast.forecastday[0].date;
            button1.value = oras.forecast.forecastday[1].date;
            button2.value = oras.forecast.forecastday[2].date;
            document.querySelector(".popup").style.display = "block";
            popflag.src = salis.flag;
            popname.innerHTML = salis.name;
            popregion.innerHTML = salis.region;
            poplang.innerHTML = JSON.stringify(salis.languages[0].name).replace(/\"/g,"");
            popcapital.innerHTML = salis.capital;
            popcurrency1.innerHTML = JSON.stringify(salis.currencies[0].name).replace(/\"/g, "");
            popcurrency2.innerHTML = JSON.stringify(salis.currencies[0].code).replace(/\"/g, "");
            popcurrency3.innerHTML = JSON.stringify(salis.currencies[0].symbol);
            let orasicon = document.querySelector(".weathericon");
            orasicon.src = oras.current.condition.icon;
            let orasstatus = document.querySelector(".orasstatus");
            orasstatus.innerHTML = oras.current.condition.text;
            let temperature = document.querySelector(".temperature");
            temperature.innerHTML = oras.current.temp_c;
            let orascapital = document.querySelector(".orascapital");
            orascapital.innerHTML = oras.location.name;
            let windspeed = document.querySelector(".windspeed");
            windspeed.innerHTML = oras.current.wind_kph;
            let winddir = document.querySelector(".winddir");
            winddir.innerHTML = oras.current.wind_dir;
            let windgust = document.querySelector(".windgust");
            windgust.innerHTML = oras.current.gust_kph;
            let humidity = document.querySelector(".humidity");
            humidity.innerHTML = oras.current.humidity;
            let clouds = document.querySelector(".clouds");
            clouds.innerHTML = oras.current.cloud;

            //---------------------------------- forecast --------------------------------------------

            let day1 = oras.forecast.forecastday[0];
            let day2 = oras.forecast.forecastday[1];
            let day3 = oras.forecast.forecastday[2];
            button0.addEventListener("click", showforecast0);
            button1.addEventListener("click", showforecast1);
            button2.addEventListener("click", showforecast2);

            function showforecast0() {
              forcont.style.display = "block";
              ximg0.src = day1.hour[0].condition.icon;
              xstatus0.innerHTML = day1.hour[0].condition.text;
              ximg1.src = day1.hour[2].condition.icon;
              xstatus1.innerHTML = day1.hour[2].condition.text;
              ximg2.src = day1.hour[4].condition.icon;
              xstatus2.innerHTML = day1.hour[4].condition.text;
              ximg3.src = day1.hour[6].condition.icon;
              xstatus3.innerHTML = day1.hour[6].condition.text;
              ximg4.src = day1.hour[8].condition.icon;
              xstatus4.innerHTML = day1.hour[8].condition.text;
              ximg5.src = day1.hour[10].condition.icon;
              xstatus5.innerHTML = day1.hour[10].condition.text;
              ximg6.src = day1.hour[12].condition.icon;
              xstatus6.innerHTML = day1.hour[12].condition.text;
              ximg7.src = day1.hour[14].condition.icon;
              xstatus7.innerHTML = day1.hour[14].condition.text;
              ximg8.src = day1.hour[16].condition.icon;
              xstatus8.innerHTML = day1.hour[16].condition.text;
              ximg9.src = day1.hour[18].condition.icon;
              xstatus9.innerHTML = day1.hour[18].condition.text;
              ximg10.src = day1.hour[20].condition.icon;
              xstatus10.innerHTML = day1.hour[20].condition.text;
              ximg11.src = day1.hour[22].condition.icon;
              xstatus11.innerHTML = day1.hour[22].condition.text;
              xtemp0.innerHTML = "&nbsp;" + day1.hour[0].temp_c;
              xtemp1.innerHTML = "&nbsp;" + day1.hour[2].temp_c;
              xtemp2.innerHTML = "&nbsp;" + day1.hour[4].temp_c;
              xtemp3.innerHTML = "&nbsp;" + day1.hour[6].temp_c;
              xtemp4.innerHTML = "&nbsp;" + day1.hour[8].temp_c;
              xtemp5.innerHTML = "&nbsp;" + day1.hour[10].temp_c;
              xtemp6.innerHTML = "&nbsp;" + day1.hour[12].temp_c;
              xtemp7.innerHTML = "&nbsp;" + day1.hour[14].temp_c;
              xtemp8.innerHTML = "&nbsp;" + day1.hour[16].temp_c;
              xtemp9.innerHTML = "&nbsp;" + day1.hour[18].temp_c;
              xtemp10.innerHTML = "&nbsp;" + day1.hour[20].temp_c;
              xtemp11.innerHTML = "&nbsp;" + day1.hour[22].temp_c;
            }

            function showforecast1() {
              forcont.style.display = "block";
              ximg0.src = day2.hour[0].condition.icon;
              xstatus0.innerHTML = day2.hour[0].condition.text;
              ximg1.src = day2.hour[2].condition.icon;
              xstatus1.innerHTML = day2.hour[2].condition.text;
              ximg2.src = day2.hour[4].condition.icon;
              xstatus2.innerHTML = day2.hour[4].condition.text;
              ximg3.src = day2.hour[6].condition.icon;
              xstatus3.innerHTML = day2.hour[6].condition.text;
              ximg4.src = day2.hour[8].condition.icon;
              xstatus4.innerHTML = day2.hour[8].condition.text;
              ximg5.src = day2.hour[10].condition.icon;
              xstatus5.innerHTML = day2.hour[10].condition.text;
              ximg6.src = day2.hour[12].condition.icon;
              xstatus6.innerHTML = day2.hour[12].condition.text;
              ximg7.src = day2.hour[14].condition.icon;
              xstatus7.innerHTML = day2.hour[14].condition.text;
              ximg8.src = day2.hour[16].condition.icon;
              xstatus8.innerHTML = day2.hour[16].condition.text;
              ximg9.src = day2.hour[18].condition.icon;
              xstatus9.innerHTML = day2.hour[18].condition.text;
              ximg10.src = day2.hour[20].condition.icon;
              xstatus10.innerHTML = day2.hour[20].condition.text;
              ximg11.src = day2.hour[22].condition.icon;
              xstatus11.innerHTML = day2.hour[22].condition.text;
              xtemp0.innerHTML = "&nbsp;" + day2.hour[0].temp_c;
              xtemp1.innerHTML = "&nbsp;" + day2.hour[2].temp_c;
              xtemp2.innerHTML = "&nbsp;" + day2.hour[4].temp_c;
              xtemp3.innerHTML = "&nbsp;" + day2.hour[6].temp_c;
              xtemp4.innerHTML = "&nbsp;" + day2.hour[8].temp_c;
              xtemp5.innerHTML = "&nbsp;" + day2.hour[10].temp_c;
              xtemp6.innerHTML = "&nbsp;" + day1.hour[12].temp_c;
              xtemp7.innerHTML = "&nbsp;" + day1.hour[14].temp_c;
              xtemp8.innerHTML = "&nbsp;" + day2.hour[16].temp_c;
              xtemp9.innerHTML = "&nbsp;" + day2.hour[18].temp_c;
              xtemp10.innerHTML = "&nbsp;" + day2.hour[20].temp_c;
              xtemp11.innerHTML = "&nbsp;" + day2.hour[22].temp_c;
            }

            function showforecast2() {
              forcont.style.display = "block";
              ximg0.src = day3.hour[0].condition.icon;
              xstatus0.innerHTML = day3.hour[0].condition.text;
              ximg1.src = day3.hour[2].condition.icon;
              xstatus1.innerHTML = day3.hour[2].condition.text;
              ximg2.src = day3.hour[4].condition.icon;
              xstatus2.innerHTML = day3.hour[4].condition.text;
              ximg3.src = day3.hour[6].condition.icon;
              xstatus3.innerHTML = day3.hour[6].condition.text;
              ximg4.src = day3.hour[8].condition.icon;
              xstatus4.innerHTML = day3.hour[8].condition.text;
              ximg5.src = day3.hour[10].condition.icon;
              xstatus5.innerHTML = day3.hour[10].condition.text;
              ximg6.src = day3.hour[12].condition.icon;
              xstatus6.innerHTML = day3.hour[12].condition.text;
              ximg7.src = day3.hour[14].condition.icon;
              xstatus7.innerHTML = day3.hour[14].condition.text;
              ximg8.src = day3.hour[16].condition.icon;
              xstatus8.innerHTML = day3.hour[16].condition.text;
              ximg9.src = day3.hour[18].condition.icon;
              xstatus9.innerHTML = day3.hour[18].condition.text;
              ximg10.src = day3.hour[20].condition.icon;
              xstatus10.innerHTML = day3.hour[20].condition.text;
              ximg11.src = day3.hour[22].condition.icon;
              xstatus11.innerHTML = day3.hour[22].condition.text;
              xtemp0.innerHTML = "&nbsp;" + day3.hour[0].temp_c;
              xtemp1.innerHTML = "&nbsp;" + day3.hour[2].temp_c;
              xtemp2.innerHTML = "&nbsp;" + day3.hour[4].temp_c;
              xtemp3.innerHTML = "&nbsp;" + day3.hour[6].temp_c;
              xtemp4.innerHTML = "&nbsp;" + day3.hour[8].temp_c;
              xtemp5.innerHTML = "&nbsp;" + day3.hour[10].temp_c;
              xtemp6.innerHTML = "&nbsp;" + day3.hour[12].temp_c;
              xtemp7.innerHTML = "&nbsp;" + day3.hour[14].temp_c;
              xtemp8.innerHTML = "&nbsp;" + day3.hour[16].temp_c;
              xtemp9.innerHTML = "&nbsp;" + day3.hour[18].temp_c;
              xtemp10.innerHTML = "&nbsp;" + day3.hour[20].temp_c;
              xtemp11.innerHTML = "&nbsp;" + day3.hour[22].temp_c;
            }
          } catch (error) {
            console.log(error);
          }
        };
        fetchOrai();
      }
    });
  } catch (klaida) {
    console.log(klaida);
  }
}
fetchSalys();

//---------------------------------------------------------------------------------------------------
