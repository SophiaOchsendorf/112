//https://teachablemachine.withgoogle.com/models/lqC6HeQsP/

//treinamento do projeto
prediction_1 = ""; 
prediction_2 = "";
Webcam.set({
    width:350,
    height:300,
    imageFormat:'png',
    pngQualit:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

//classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8NpOS7ZYi/model.json',modelLoaded);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lqC6HeQsP/model.json',modelLoaded);




function modelLoaded() {
    console.log('modelLoaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speakData1 = "A primeira previsão é" + prediction_1;
    speakData2 = "E segunda previsão é" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speakData1+ speakData2);
    synth.speak(utterThis);
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("resultEmotionName").innerHTML = results[0].label;
        document.getElementById("resultEmotionName2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "UM")
        {
            document.getElementById("updateEmoji").innerHTML ="&#9995;";
        }
        if(results[0].label == "DOIS")
        {
            document.getElementById("updateEmoji").innerHTML ="&#9995; &#9995;";
        }
        if(results[0].label == "TRÊS")
        {
            document.getElementById("updateEmoji").innerHTML ="&#9995; &#9995; &#9995;";
        }
        if(results[0].label == "QUATRO")
        {
            document.getElementById("updateEmoji").innerHTML ="&#9995; &#9995; &#9995; &#9995;";
        }

        if(results[1].label == "UM")
        {
            document.getElementById("updateEmoji2").innerHTML ="&#9995;";
        }
        if(results[1].label == "DOIS")
        {
            document.getElementById("updateEmoji2").innerHTML ="&#9995; &#9995;";
        }
        if(results[1].label == "TRÊS")
        {
            document.getElementById("updateEmoji2").innerHTML ="&#9995; &#9995; &#9995;";
        }
        if(results[1].label == "QUATRO")
        {
            document.getElementById("updateEmoji2").innerHTML ="&#9995; &#9995; &#9995; &#9995;";
        }
    }
}






   
        
        
        
        
        
    