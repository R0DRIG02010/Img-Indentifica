function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet',modelLoadead);
}

function draw() {
  image(video, 0, 300, 300);
}

function modelLoadead() {
  console.log('Model Loaded');
}
function gotResult(error, results) {
  if (eror) {
    console.error(error);
  } else {
    if((results[0].confidence > 0.5) && (previousResult != results[0].label )){
      console.log(results);
      previousResult = results[0].label;
      var synth = windows.speehSynthesis;
      seakData ='O objeto dectado é -'+results[0].label;
      var utterThis = new SpeechSynthesisUtterance(speakData);
      synth.speak(utterThis);

      document.getElementById9("resultObjectName").innerHTML = results[0].label;
      document.getElementById("resultObectAccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
  }
}
