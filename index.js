var randomNumber1=Math.floor(Math.random() * 6) + 1;
 var randomDiceImage = "images/dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);


  var randomNumber2=Math.floor(Math.random() * 6) + 1;
 var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

  if (randomNumber1>randomNumber2)
  {
    document.querySelector("h1").innerHTML="🚩first player won!"
  }
  else if (randomNumber1<randomNumber2)
  {
    document.querySelector("h1").innerHTML="🚩second player won!"
  }
  else{
    document.querySelector("h1").innerHTML="draw❤🧡💛!"
  }