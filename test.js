const hex = [0,1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
let hexColr = "#";
    for (let i = 0; i < 6; i++) {
         hexColr += hex[getnumbers()];

        color.textContent=hexColr;
        document.body.style.backgroundColor=hexColr
    }
});
function getnumbers() {
    return Math.floor(Math.random()* hex.length);
}
//2Nd Methiod

// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   console.log(document.body)
//     const randomNumber = getNumber();
//     console.log(randomNumber)

//   document.body.style.backgroundColor=colors[randomNumber];
//   color.textContent=colors[randomNumber]
// });
// function getNumber (){
//     return Math.floor (Math.random()*colors.length);
// }
