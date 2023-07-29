let gridItems = document.getElementById("grid-items");
// console.log(gridItems);
let listItems = document.getElementById("list-items");
console.log(listItems);
let myList = [];

let toggle = "grid";

let grid = document.querySelectorAll(".sections div")[0];
grid.addEventListener("mouseover",()=>{
    grid.style = "color: #4a80e2;border-bottom: 2px solid #4a80e2;"
    list.style = "color: white ;"

})
grid.addEventListener("click", ()=>{
    grid.style = "color: #4a80e2;border-bottom: 2px solid #4a80e2;"
    list.style = "color: white ;"
    toggle = "grid"
})


let list = document.querySelectorAll(".sections div")[1];
list.addEventListener("mouseover",()=>{
    list.style = "color: #4a80e2;border-bottom: 2px solid #4a80e2;"
    grid.style = "color: white ;"

})
list.addEventListener("click", ()=>{
    list.style = "color: #4a80e2;border-bottom: 2px solid #4a80e2;"
    grid.style = "color: white ;"
    toggle = "list"
})

let cardContainer = document.getElementsByClassName("card-container")[0];
console.log(cardContainer);
fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
)
  .then((res) => res.json())
  .then((data) => (myList = [...data]));
setTimeout(() => {
  console.log(myList);

  if (myList !== null) {
    for (let i = 0; i < myList.length; i++) {
      if (toggle === "grid") {
        let cards = document.createElement("div");
        cards.className = "cards";
        cards.innerHTML = `<div class="card-head flex">
         <div class="image">
             <img src="${myList[i].image}" alt="">
         </div>
         <div class="ns" >
             <div >${myList[i].symbol}</div>
             <span style="color: #7B7B7B;">${myList[i].name}</span>
         </div>
     </div>
     <div class="card-body">
         <div class="percent">
             <span>${myList[i].price_change_percentage_24h}%</span>
         </div>
     <div class="money">
         <span>$${myList[i].current_price}</span>
     </div>
     </div>
     <div class="card-footer">
         <div>Total Volume: ${myList[i].total_volume} </div>
         <div>Market Cap: $${myList[i].market_cap}</div>
     </div>`;
        cardContainer.appendChild(cards);
        //  console.log(cardContainer);
      }
    }
    let perElements = document.querySelectorAll(".percent span");
    // let requiredNumber = ((perElements.innerText)).slice(0,perElements.innerText.length - 1);
    // perElements.style.border = parseFloat(requiredNumber) < 0 ?"2px solid red" : "2px solid #7CC678" ;
  }
}, 1000);
