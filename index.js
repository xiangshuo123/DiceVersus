var randomNumber1 = Math.floor(Math.random() * 6)+1
var randomNumber2 = Math.floor(Math.random() * 6)+1
var path1="images/dice"+randomNumber1+".png"
var path2="images/dice"+randomNumber2+".png"
document.getElementsByClassName("img1")[0].setAttribute("src",path1);
document.getElementsByClassName("img2")[0].setAttribute("src",path2);

if(randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[0].textContent="🚩Player 1 Wins!";
}else if(randomNumber2>randomNumber1){
    document.getElementsByTagName("h1")[0].textContent="Player 2 Wins!🚩"
}else{
    document.getElementsByTagName("h1")[0].textContent="Draw!"
}