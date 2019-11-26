var questions = [
  {
    prompt: "Kui soovin teksti joondada vasakule:",
    answer: "vasakjoondus",
    image: "./images/vasakjoondus.jpg"
  },
  {
    prompt: "Kui soovin teksti joondada keskele:",
    answer: "keskjoondus",
    image: "./images/keskjoondus.jpg"
  },
  {
    prompt: "Kui soovin teksti joondada paremale:",
    answer: "paremjoondus",
    image: "./images/paremjoondus.jpg"
  },
  {
    prompt: "Kui soovin teksti joondada rööpselt:",
    answer: "rööpjoondus",
    image: "./images/rööpjoondus.jpg"
  },
  {
    prompt: "Kui soovin suurendada/vähendada ridade vahekugust (reasamm):",
    answer: "reasamm",
    image: "./images/reasamm.jpg"
  },
  {
    prompt: "Kui soovin muuta tekstilõigu tausta värvi:",
    answer: "taustaVärv",
    image: "./images/taustaVärv.jpg"
  },
  {
    prompt: "Kui soovin lisada ääriseid (raam & jooned):",
    answer: "äärised",
    image: "./images/äärised.jpg"
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
