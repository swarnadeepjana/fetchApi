//const URL="https://cat-fact.herokuapp.com";
//const factPara= document.querySelector("#fact");
//const btn=document.querySelector("#btn")

///so here we call the api using fetch api
//
//const getFacts=async() => {
//console.log("getting data...");
//let response=await fetch(URL); 
//console.log(response); //json format  //eta json format e answer elo api theke

//output is coming as json format
//let data=await response.json(); 
//factPara.innerText = data[0].text; //json format e answer thakle take readable kore neoya holo
 
//};

//  API call korar onno  process

//function getFacts(){
 //   fetch(URL)
//    .then((response) =>{
     //   return response.json();
 //   })
 //   .then((data) =>{
 //       console.log(data);
//        factPara.innerText = data[2].text;
 //   })
//}
const BASE_URL =
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
//btn.addEventListener("click", getFacts);

for (let select of dropdowns) {
for (currCode in countryList) {
        let newOption = document.createElement("option");  //option crate hoche 
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
}    else if (select.name === "to" && currCode === "INR") {
        newOption.selected = "selected";
}
select.append(newOption);
}

select.addEventListener("change", (evt) => {  //jdi kono flag change hoy...tar respect e flag tao change hobe
        updateFlag(evt.target);
});
}



const updateExchangeRate = async() => {
let amount = document.querySelector(".amount input");
let amtVal = amount.value;
if (amtVal === "" || amtVal < 1) {
amtVal = 1;
amount.value = "1";
}


//btn.addEventListener("click",async(evt)=>{
//        evt.preventDefault();
//        let amount=document.querySelector(".amount input");
//        let amtval=amount.value; //je value bosano hobe setake niye kaj hobe
//        if(amtVal==="" || amtVal<1){  //jdi keu negetive value bosay tahle seta 1 hoye jabe
//        amtVal=1;
//        amount.value="1";
//}

const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase().json}`;
let response = await fetch(URL);   //data ke fetch kore convert kore value ber hobe
let data = await response.json();
let rate=data[toCurr.value.toLowerCase()];


let finalAmount = amtVal * rate;
msg.innerText=`${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

};

const updateFlag = (element) => {
let currCode = element.value;
let countryCode = countryList[currCode];
let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
        evt.preventDefault();
        updateExchangeRate();
});

window.addEventListener("load", () => {
        updateExchangeRate();
});


