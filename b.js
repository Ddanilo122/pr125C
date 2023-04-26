var narizx=0
var narizy=0
var bigode;

function setup(){
    canvas=createCanvas(600,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video,pronto)
    poseNet.on('pose',gotResult)
    imageMode(CENTER)
}
function but(){
save("foto.png")
}


function pronto(){
console.log('pronto')

}
function gotResult(result){
if(result.length > 0){
narizx=result[0].pose.nose.x
narizy=result[0].pose.nose.y

console.log('narizx'+narizx)
console.log('narizy'+narizy)

}


}

function draw(){
    image(video,300,150,600,300)
    image(bigode,narizx-30,narizy-80,50,50)
}
    
function preload(){
    bigode = loadImage('Ilustração-Bigode-PNG.png')
}
