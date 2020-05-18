// selecting all the colour inputs
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const  topColor = document.querySelector(".top-font-color");
const bottomColor = document.querySelector(".bottom-font-color");


// selecting elements to apply the colour topColor
const cardBody = document.querySelector(".card-overlay");

const topText = document.querySelector(".top-part");
const bottomText = document.querySelector(".bottom-part");


//selecting text element from form
const formCompName = document.querySelector(".comp-name");
const formDate = document.querySelector(".date-form");
const formRole = document.querySelector(".role");
const formUsername = document.querySelector(".username");


//selecting text elements from card
const cardCompany = document.querySelector(".company");
const cardDate = document.querySelector(".date");
const cardPost = document.querySelector(".post");
const cardName = document.querySelector(".name");

//selecting the button from form
const btn = document.querySelector(".btn");


//listening for input events on card gradient colours
color1.addEventListener("input" , addGradient);
color2.addEventListener("input" , addGradient);



//listening to input events for fonts colours
topColor.addEventListener("input" , addFontColor);
bottomColor.addEventListener("input" , addFontColor);

//listening to click events on the button
btn.addEventListener("click" , updateCard);

//adding font color to card texts
function addFontColor(){
  topText.style.color = topColor.value;
  bottomText.style.color = bottomColor.value;
}


//adding gradient to cardBody
function addGradient(){
  cardBody.style.background = "linear-gradient( to right, " + color1.value + ", "+ color2.value + ")"; 
}

//updating the card
function updateCard(){
  cardCompany.textContent = formCompName.value;
  cardDate.textContent = formDate.value;
  cardPost.textContent = formRole.value;
  cardName.textContent = formUsername.value;
}