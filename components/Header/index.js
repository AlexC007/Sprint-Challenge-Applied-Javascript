// STEP 1: Create a header component.bv
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerContainer = document.querySelector("div.header-container");

function Header() {
//elements
const header = document.createElement("div");
const date = document.createElement("span");
const hTag = document.createElement("h1");
const temp = document.createElement("span")



//classes
header.classList.add("header");
date.classList.add("date");
temp.classList.add("temp");

//appends
header.appendChild(date);
header.appendChild(hTag);
header.appendChild(temp);

  //Content
  hTag.textContent= 'Lambda Times';
  date.textContent= 'March 28, 2019';
  temp.textContent= "98°";

return header;

}

headerContainer.appendChild(Header());
