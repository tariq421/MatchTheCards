console.log("working....");

// var welcome = alert("Welcome to the best game ever, Enjoy!")


//ceating all the cards
var myText = ['A','A','B', 'B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J']
//storing memory values
var values = [];
//how many cards are flipped
var cards_flipped = 0;

//add a shuffle method to the array obj,
function shuffle () {
  var i = 0, j = 0, temp = null

  for (i = myText.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = myText[i]
    myText[i] = myText[j]
    myText[j] = temp
  }
};

//generating a new board
function newBoard (array){
  //cards flipped go back to 0 everytime a new board is generated.
  cards_flipped = 0;
  //create a empty output
  // var output = "";
  // run the shuffle method that we created for the array
  shuffle();

  for (var i = 0; i < myText.length; i++) {
    //.css img
    $(".box").eq(i).text(myText[i]);
    // console.log(i)
    // console.log($(".box"))
  }
}

function flipCard(){
  $(".box").on("click", function(){
    $(this).toggleClass("box")
    $(this).toggleClass("clicked")
    console.log($(this))
})
}

$(document).ready(function() {
newBoard($('.box'));
flipCard()
});
