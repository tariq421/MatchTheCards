console.log("working....");

var welcome = alert("Welcome to the best game ever, Enjoy!")
//ceating all the cards
// var myText = ['A','A','B', 'B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J']
// $(myText).addClass("text");
var myImages = ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Wiktionary_small.svg/350px-Wiktionary_small.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Wiktionary_small.svg/350px-Wiktionary_small.svg.png","http://www.metamorphozis.com/blog/images/08_02_12/22/little_animals.jpg","http://www.metamorphozis.com/blog/images/08_02_12/22/little_animals.jpg","http://www.dumpaday.com/wp-content/uploads/2013/08/small-truck-and-boat.jpg","http://www.dumpaday.com/wp-content/uploads/2013/08/small-truck-and-boat.jpg","http://img.ifcdn.com/images/9e0a69b1ccd797b418b69e6ea4fcab162fc9f20e83641e61790b33f5f5c957d2_1.jpg","http://img.ifcdn.com/images/9e0a69b1ccd797b418b69e6ea4fcab162fc9f20e83641e61790b33f5f5c957d2_1.jpg","http://www.gannett-cdn.com/-mm-/55de1c4cbab21f6bf2de2e171a023fc7e0283b0f/c=80-0-2562-1866&r=x404&c=534x401/local/-/media/2015/08/20/Nashville/Nashville/635756962578890467-Coding.jpg","http://www.gannett-cdn.com/-mm-/55de1c4cbab21f6bf2de2e171a023fc7e0283b0f/c=80-0-2562-1866&r=x404&c=534x401/local/-/media/2015/08/20/Nashville/Nashville/635756962578890467-Coding.jpg","http://img.ifcdn.com/images/0338e50db9315ac7c724fc2d9adc0b96e069ca24c411e845becb8ad5d406adf8_1.jpg","http://img.ifcdn.com/images/0338e50db9315ac7c724fc2d9adc0b96e069ca24c411e845becb8ad5d406adf8_1.jpg","http://img.ifcdn.com/images/44f8e1f07ee76dca35b51612fe687d2eccdac6ed24fa1641e382e7ab39a2969b_1.jpg","http://img.ifcdn.com/images/44f8e1f07ee76dca35b51612fe687d2eccdac6ed24fa1641e382e7ab39a2969b_1.jpg","https://s-media-cache-ak0.pinimg.com/236x/25/ac/80/25ac804b0299a6033bc4f1a262b6aa10.jpg","https://s-media-cache-ak0.pinimg.com/236x/25/ac/80/25ac804b0299a6033bc4f1a262b6aa10.jpg","http://www.goodfoodwise.com/wp-content/uploads/2016/01/good-food-wise.jpg","http://www.goodfoodwise.com/wp-content/uploads/2016/01/good-food-wise.jpg","https://i.ytimg.com/vi/uDnd_C8Hkp8/maxresdefault.jpg","https://i.ytimg.com/vi/uDnd_C8Hkp8/maxresdefault.jpg"]
//storing memory values
var values = [];
//how many cards are flipped
var cards_flipped = 0;

//add a shuffle method to the array obj,
function shuffle () {
  var i = 0, j = 0, temp = null

  for (i = myImages.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = myImages[i]
    myImages[i] = myImages[j]
    myImages[j] = temp
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

  for (var i = 0; i < myImages.length; i++) {
    //.css img
    $(".box").eq(i).css("background-image", 'url('+myImages[i]+')');
    // console.log(i)
    // console.log($(".box"))
  }
}
function flipCard(){
  $(".box img").on("click", function(){
    $(this).css('display','none')
    $(this).parent().toggleClass("clicked")
    // $(this).toggleClass("box")
    // $(this).toggleClass("clicked")
    checkCard();
  // function that will check if the flipped cards match
  })
}
function checkCard(){
  var clicked = $('.clicked');
  console.log(clicked)
  if (clicked.length == 2) {
    if(clicked.eq(0).css("background-image")===clicked.eq(1).css("background-image")){
      console.log("matched! keep playing")
      clicked.toggleClass("clicked");
      // clicked.toggleClass("matched");
      clicked.off();
    }
    else {
      //settimeout so images can flip back if they do not match
      setTimeout(function(){
        clicked.toggleClass("clicked");
        clicked.children().css('display','block')
      }, 700)
    }
  }
}
//reset game function
function restartGame() {
 $('#reload').click(function() {
   location.reload();
 });
}

$(document).ready(function() {
newBoard($('.box'));
flipCard();
restartGame();
});
