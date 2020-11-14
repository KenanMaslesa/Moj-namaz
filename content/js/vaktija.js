var zora, izlazak_sunca, podne, ikindija, aksam, jacija, sati, minute;
var countDownDate = new Date();
window.onload = function () {
  var theme = localStorage.getItem("theme");
  if (theme === "dark")
    DarkTheme();
  else
    LightTheme();

  if (localStorage.getItem("location") === null) {
    localStorage.setItem("location", 77);
  }
  else {
    var value = localStorage.getItem("location");
    var x = $('#locations option[value=' + value + ']').prop('selected', true);
  }
}

function getPoziv(funk, url) {

  var zahtjev = new XMLHttpRequest();
  zahtjev.onload = function () {
    if (zahtjev.status == 200) {
      funk(JSON.parse(zahtjev.responseText));
    }
    else {
      alert("Error " + zahtjev.statusText);
    }
  }

  zahtjev.onerror = function () {
    alert("Greška u komunikaciji sa serverom");
  };

  zahtjev.open("GET", url, true);
  zahtjev.send(null);
}
if (localStorage.getItem("location") == null)
  urlGetVaktija = 'https://api.vaktija.ba/vaktija/v1/77';
else
  urlGetVaktija = 'https://api.vaktija.ba/vaktija/v1/' + localStorage.getItem("location");

getPoziv(ucitajPodatke, urlGetVaktija);

function ucitajPodatke(obj) {
  zora = obj.vakat[0];
  izlazak_sunca = obj.vakat[1];
  podne = obj.vakat[2];
  ikindija = obj.vakat[3];
  aksam = obj.vakat[4];
  jacija = obj.vakat[5];

  $("#jacija_s").addClass("active-time");
  $("#jacija_n").addClass("active-time");
  $("#jacija_v").addClass("active-time");

  sati = zora.substring(0, zora.indexOf(":"));
  minute = zora.substring(zora.indexOf(":") + 1);
  countDownDate.setHours(sati);
  countDownDate.setMinutes(minute);
  countDownDate.setSeconds(0);

  $("#city").html(obj.lokacija);
  $("#date").html(obj.datum[1] + " / " + obj.datum[0]);
  $("#date1").html(obj.datum[1]);
  $("#date2").html(obj.datum[0]);
  $("#zora_v").html(zora);
  $("#izlazak_v").html(izlazak_sunca);
  $("#podne_v").html(podne);
  $("#ikindija_v").html(ikindija);
  $("#aksam_v").html(aksam);
  $("#jacija_v").html(jacija);

}

function setSati(s) {
  sati = s.substring(0, s.indexOf(":"));
  countDownDate.setHours(sati);
}
function setMinute(m) {
  minute = m.substring(m.indexOf(":") + 1);
  countDownDate.setMinutes(minute);

}
function setAll(now) {
  if (now >= countDownDate.getTime()) {
    setSati(izlazak_sunca);
    setMinute(izlazak_sunca);
    $("#jacija_s").removeClass("active-time");
    $("#jacija_n").removeClass("active-time");
    $("#jacija_v").removeClass("active-time");
    $("#zora_s").addClass("active-time");
    $("#zora_n").addClass("active-time");
    $("#zora_v").addClass("active-time");

  }
  if (now >= countDownDate.getTime()) {
    setSati(podne);
    setMinute(podne);
    $("#zora_s").removeClass("active-time");
    $("#zora_n").removeClass("active-time");
    $("#zora_v").removeClass("active-time");
    $("#izlazak_s").addClass("active-time");
    $("#izlazak_n").addClass("active-time");
    $("#izlazak_v").addClass("active-time");
  }

  if (now >= countDownDate.getTime()) {

    setSati(ikindija);
    setMinute(ikindija);
    $("#izlazak_s").removeClass("active-time");
    $("#izlazak_n").removeClass("active-time");
    $("#izlazak_v").removeClass("active-time");
    $("#podne_s").addClass("active-time");
    $("#podne_n").addClass("active-time");
    $("#podne_v").addClass("active-time");

  }

  if (now >= countDownDate.getTime()) {

    setSati(aksam);
    setMinute(aksam);
    $("#podne_s").removeClass("active-time");
    $("#podne_n").removeClass("active-time");
    $("#podne_v").removeClass("active-time");
    $("#ikindija_s").addClass("active-time");
    $("#ikindija_n").addClass("active-time");
    $("#ikindija_v").addClass("active-time");

  }
  if (now >= countDownDate.getTime()) {
    setSati(jacija);
    setMinute(jacija);
    $("#ikindija_s").removeClass("active-time");
    $("#ikindija_n").removeClass("active-time");
    $("#ikindija_v").removeClass("active-time");
    $("#aksam_s").addClass("active-time");
    $("#aksam_n").addClass("active-time");
    $("#aksam_v").addClass("active-time");


  }
  if (now >= countDownDate.getTime()) {
    $("#aksam_s").removeClass("active-time");
    $("#aksam_n").removeClass("active-time");
    $("#aksam_v").removeClass("active-time");
    $("#jacija_s").addClass("active-time");
    $("#jacija_n").addClass("active-time");
    $("#jacija_v").addClass("active-time");

    countDownDate.setDate(countDownDate.getDate() + 1);
    setSati(zora);
    setMinute(zora);

  }

}
function getTime(h) {
  return h < 10 ? "0" + h : h;
}
var x = setInterval(function () {
  var now2 = new Date();
  now2 = now2.getTime();
  if (now2 >= countDownDate)
    setAll(now2);
  var distance = countDownDate - now2;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (hours == 0 && minutes <= 9) {
    $("#countdown").addClass("danger");
  }
  else{
    $("#countdown").removeClass("danger");

  }

  document.getElementById("countdown").innerHTML = getTime(hours) + ":"
    + getTime(minutes) + ":" + getTime(seconds);

  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

function GetLocation(selected) {
  var val = selected.value;
  localStorage.setItem("location", val);
  getPoziv(ucitajPodatke, 'https://api.vaktija.ba/vaktija/v1/' + val);
}
function DarkTheme() {
  $("#dark_theme").hide();
  $("#light-theme").show();
  $("#vaktija").addClass("background-black");
  $("#vaktija").addClass("dark-theme");
  $("#ayat_prayer_time").addClass("color-white");
  $("#date-wrapper").addClass("color-white");
  $("#countdown").addClass("color-white");
  $("#city").addClass("color-white");
  $(".vaktija-header").css("border-bottom", "3px solid rgb(24, 210, 110)");
}
function LightTheme() {
  $("#light-theme").hide();
  $("#dark_theme").show();
  $("#vaktija").removeClass("background-black");
  $("#vaktija").removeClass("dark-theme");
  $("#ayat_prayer_time").removeClass("color-white");
  $("#date-wrapper").removeClass("color-white");
  $("#countdown").removeClass("color-white");
  $("#city").removeClass("color-white");
  $(".vaktija-header").css("border-bottom", "none");
}
$("#dark_theme").on("click", function () {
  localStorage.setItem("theme", "dark");
  DarkTheme();
});

$("#light-theme").on("click", function () {
  localStorage.setItem("theme", "light");
  LightTheme();
});