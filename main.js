function startClassification()
{
navigator.mediaDevices.getUserMedia({audio: true})
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6ZD4w4hBk/model.json", modelReady)
}

function modelReady()
{

classifier.classify(gotResults);

}

function gotResults(error, results)
{
if (error){
    console.error(error);
} else {
console.log(results);
random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;

document.getElementById("result_label").innerHTML = 'I can hear = '+ 
results[0].label;
document.getElementById("result_confidence").innerHTML = 'acuraccy - '+
(results[0].confidence* 100)+ " %";
document.getElementById("result_label").style.color = "rgb("
+random_number_r+","+random_number_g+","+random_number_b +")"
document.getElementById("result_confidence").style.color = "rgb("
+random_number_r+","+random_number_g+","+random_number_b +")"

img = document.getElementById('alien_1')
img1 = document.getElementById('alien_2')
img2 = document.getElementById('alien_3')
img3 = document.getElementById('alien_4')

if (result [0]. label == "clap")
{
img.src = 'alines-01.gif';
 img1.src = 'alines-02.png';
 img2.src = 'alines-03.png';
img3.src = 'alines-04.png';
}

else if (result [0]. label == "Bell")
{
img.src = 'alines-01.png';
 img1.src = 'alines-02.gif';
 img2.src = 'alines-03.png';
img3.src = 'alines-04.png';
}

else if (result [0]. label == "snapping")
{
img.src = 'alines-01.png';
 img1.src = 'alines-02.png';
 img2.src = 'alines-03.gif';
img3.src = 'alines-04.png';
}else{
    img.src = 'alines-01.png';
    img1.src = 'alines-02.png';
    img2.src = 'alines-03.png';
   img3.src = 'alines-04.gif';







}










}

}
