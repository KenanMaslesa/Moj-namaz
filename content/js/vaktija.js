var zora, izlazak_sunca, podne, ikindija, aksam, jacija, sati, minute;
var countDownDate = new Date();
window.onload = function () {
  if (localStorage.getItem("location") === null) {
    /** Your code here. **/
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

  sati = zora.substring(0, zora.indexOf(":"));
  minute = zora.substring(zora.indexOf(":") + 1);
  countDownDate.setHours(sati);
  countDownDate.setMinutes(minute);

  $("#city").html(obj.lokacija);
  $("#date").html(obj.datum[1] + " / " + obj.datum[0]);
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
    $("#izlazak_s").addClass("active-time");
  }
  if (now >= countDownDate.getTime()) {
    setSati(podne);
    setMinute(podne);
    $("#izlazak_s").removeClass("active-time");
  }

  if (now >= countDownDate.getTime()) {

    setSati(ikindija);
    setMinute(ikindija);
    $("#podne_s").addClass("active-time");

  }

  if (now >= countDownDate.getTime()) {

    setSati(aksam);
    setMinute(aksam);
    $("#podne_s").removeClass("active-time");
    $("#ikindija_s").addClass("active-time");

  }
  if (now >= countDownDate.getTime()) {
    setSati(jacija);
    setMinute(jacija);
    $("#ikindija_s").removeClass("active-time");
    $("#aksam_s").addClass("active-time");

  }
  if (now >= countDownDate.getTime()) {
    $("#aksam_s").removeClass("active-time");
    $("#jacija_s").addClass("active-time");
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
  if (now2 > countDownDate)
    setAll(now2);
  var distance = countDownDate - now2;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //var sekundeX = (minutes * 60) + (hours * 3600) + seconds;

  document.getElementById("countdown").innerHTML = getTime(hours) + ":"
    + getTime(minutes) + ":" + getTime(seconds);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

function GetLocation(selected) {
  var val = selected.value;
  localStorage.setItem("location", val);
  getPoziv(ucitajPodatke, 'https://api.vaktija.ba/vaktija/v1/' + val);
}
