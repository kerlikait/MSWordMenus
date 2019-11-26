var questions = [
  {
    prompt: "Kui soovin luua täpploendi:",
    answer: "täpploend",
    image: "./images/täpploend.jpg"
  },
  {
    prompt: "Kui soovin luua numberloendi:",
    answer: "numberloend",
    image: "./images/numberloend.jpg"
  },
  {
    prompt: "Kui soovin luua mitmetasemelise loendi:",
    answer: "mitmetasemelineLoend",
    image: "./images/mitmetasemelineLoend.jpg"
  },
  {
    prompt: "Kui soovin vähendada taanet:",
    answer: "vähendaTaanet",
    image: "./images/vähendaTaanet.jpg"
  },
  {
    prompt: "Kui soovin suurendada taanet:",
    answer: "suurendaTaanet",
    image: "./images/suurendaTaanet.jpg"
  },
  {
    prompt: "Kui soovin järjestada loendi tähestikulises järjekorras:<br>",
    answer: "loendAZ",
    image: "./images/loendAZ.jpg"
  }
];

var counter = 0;
var questionsLength = questions.length;
var siisVajuta = '<p id="qBoxP"><br>Siis teen teksti <span style="background-color:#cccccc";>aktiivseks</span> ja vajutan …</p>';

window.onload = function () {
  arrayShuffle();
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
