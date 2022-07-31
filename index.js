// pick random image1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice"+randomNumber1+".png";
var imageSource1 = "images/"+randomImage1;
// set random image1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource1);

// pick random image2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice"+randomNumber2+".png";
//set random imageSource2
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Won!";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Won!🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw";
}
