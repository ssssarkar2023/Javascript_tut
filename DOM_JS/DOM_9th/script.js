const newH5 = document.createElement("h5");

const newH3 = document.createElement("h3");

newH5.innerText = "This is heading 5";

newH3.innerText = "This is heading 3";

const mainHeading = document.querySelector("h1");

mainHeading.append(newH5, newH3);

const listItems = document.querySelector("ol");

const olist = document.querySelector("ol li:nth-child(3)");
//console.log(olist);
//olist.remove();
listItems.removeChild(olist);

