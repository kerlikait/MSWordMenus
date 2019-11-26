var questions = [
  {
    prompt: "Kui soovin muuta teksti paksemaks:",
    answer: "bold",
    image: "./images/bold.jpg"
  },
  {
    prompt: "Kui soovin teksti kallutada:",
    answer: "italic",
    image: "./images/italic.jpg"
  },
  {
    prompt: "Kui soovin teksti allajoonida:",
    answer: "underline",
    image: "./images/allajoonitud.jpg"
  },
  {
    prompt: "Kui soovin teksti läbi kriipsutada:",
    answer: "stikeThrogh",
    image: "./images/läbikriipsutatud.jpg"
  },
  {
    prompt: "Kui soovin lisada üla- või alaindeksi:",
    answer: "insertIndex",
    image: "./images/indeks.jpg"
  },
  {
    prompt: "Kui tahad lisada tekstile efekte. Muuta teksti efektsemaks?",
    answer: "textEfects",
    image: "./images/efektne.jpg"
  },
  {
    prompt: "Kui soovin teksti markeriga ära märkida:",
    answer: "highlighter",
    image: "./images/marker.jpg"
  },
  {
    prompt: "Kui soovin muuta teksti värvi:",
    answer: "fontColor",
    image: "./images/värviline.jpg"
  },
  {
    prompt: "Kui soovin teksti teises fondi stiilis:",
    answer: "fontType",
    image: "./images/font.jpg"
  },
  {
    prompt: "Kui soovin muuta teksti suurust:",
    answer: "fontSize",
    image: "./images/suurus.jpg"
  },
  {
    prompt: "Kui soovin kõik väiketähed muuta suurtähtedeks või vastupidi:",
    answer: "fontCase",
    image: "./images/tähesuurus.jpg"
  },
  {
    prompt: "Kui soovin kustutada kõik teksti vormingud (va marker):",
    answer: "clearFormating",
    image: "./images/kustuta.jpg"
  }
];

var counter = 0;
var questionsLength = questions.length;
var siisVajuta = '<p id="qBoxP"><br>Siis teen teksti <span style="background-color:#cccccc";>aktiivseks</span> ja vajutan …</p>';

window.onload = function () {
  //arrayShuffle();
  $("#startModal").modal("show");
  document.getElementById("qBox").innerHTML = questions[counter].prompt + '<img src="'+questions[counter].image+'"id="qBoxImage">' + siisVajuta;
  document.getElementById("nextButton").disabled = true;
  document.getElementById("counter").innerHTML = (counter+1) + "/" + questionsLength;
  document.getElementById("endModalButton").style.visibility = "hidden";
}


function quiz(obj) {

  if ( obj.id  == questions[counter].answer) {
    document.getElementById("qBox").style.border = "5px solid #98FF98";
    document.getElementById("sad").style.visibility = "hidden";
    document.getElementById("happy").style.visibility = "visible";
    document.getElementById("nextButton").style.backgroundImage = "url(./images/arrow.png)";
    document.getElementById("nextButton").disabled = false;
  } else if (obj.id == "nextButton"){
    counter++
      if (counter >= questionsLength){
        document.getElementById("counter").innerHTML = questionsLength + "/" + questionsLength;
        document.getElementById("nextButton").style.backgroundImage = "url(./images/check.png)";
        document.getElementById("nextButton").style.visibility = "hidden";
        document.getElementById("endModalButton").style.visibility = "visible";
        $("#endModal").modal("show");
      }
      else{
        document.getElementById("counter").innerHTML = (counter+1) + "/" + questionsLength;
        document.getElementById("qBox").innerHTML = questions[counter].prompt + '<img src="'+questions[counter].image+'"id="qBoxImage">'+ siisVajuta;
        document.getElementById("qBox").style.border = "1px solid #cccccc";
        document.getElementById("nextButton").style.backgroundImage = "url(./images/check.png)";
        document.getElementById("nextButton").disabled = true;
        document.getElementById("happy").style.visibility = "hidden";
        document.getElementById("sad").style.visibility = "hidden";
      }
  } else if( obj.id !== questions[counter].answer){
    document.getElementById("qBox").style.border = "1px solid #cccccc";
    document.getElementById("sad").style.visibility = "visible";
  }
}

function openEndModal() {
  $("#endModal").modal("show");
}

function arrayShuffle() {
  for(let i = questions.length-1; i > 0; i--){
  const j = Math.floor(Math.random() * i);
  const temp = questions[i];
  questions[i] = questions[j];
  questions[j] = temp;
  }
}
