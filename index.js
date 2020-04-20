const group_navItem = document.querySelector("li.cancel");
const close = document.querySelector(".col-lg-4");
const chatSection = document.querySelector(".col-lg-8");
const textArea = document.querySelectorAll("textarea");
const textAreaPos = document.querySelector(".text-area");
const send = document.querySelector("i.far.fa-paper-plane");
const cancel = document.querySelector("a.active");
const searchBar = document.querySelector("#search-bar");
const contactsBar = document.querySelector("#contacts-bar");
const navItem1 = document.querySelector(".nav-item1");
const navItem2 = document.querySelector(".nav-item2");
const navItem3 = document.querySelector(".nav-item3");

const openBar = () => {
  close.style.msFlex = "0 0 33.333333%";
  close.style.flex = "0 0 33.333333%";
  close.style.maxWidth = "33.333333%";
  chatSection.style.msFlex = "0 0 66.666667%";
  chatSection.style.flex = "0 0 66.666667%";
  chatSection.style.maxWidth = "66.666667%";
  cancel.style.color = "#a8a4a4";
  for (i = 0; i <= textArea.length; i++) {
    textArea[0].style.width = "60%";
    textArea[0].style.marginLeft = "33.333333%";
  };
  send.style.display = "none";
  textAreaPos.style.marginLeft = '3.33333%';
  textAreaPos.style.marginRight = '3.33333%';
}


const closeBar = () => {
  close.style.flex = "";
  close.style.maxWidth = "";
  chatSection.style.flex = "";
  chatSection.style.maxWidth = "";
  cancel.style.color = "#fff";
  for (i = 0; i <= textArea.length; i++) {
    textArea[0].style.width = "";
    textArea[0].style.marginLeft = "";
  };
  send.style.display = "";
  send.style.left = "";
}

const altCloseBar = () => {
  close.style.maxWidth = "";
  cancel.style.color = "#fff";
  for (i = 0; i <= textArea.length; i++) {
    textArea[0].style.width = "";
    textArea[0].style.marginLeft = "";
  };
  send.style.display = "";
  send.style.left = "";
}

const openSearch = () => {
  searchBar.style.display = "none";
  contactsBar.style.display = "block";
  navItem1.style.display = "none";
  navItem2.style.display = "none";
  navItem3.style.display = "none";
  contactsBar.style.marginRight = "auto";
}

const closeSearch = () => {
  searchBar.style.display = "";
  contactsBar.style.display = "";
  navItem1.style.display = "";
  navItem2.style.display = "";
  navItem3.style.display = "";
  contactsBar.style.marginLeft = "";
}

const altCloseSearch = () => {
  searchBar.style.display = "";
  contactsBar.style.display = "";
  navItem1.style.display = "";
  navItem2.style.display = "";
  navItem3.style.display = "";
  contactsBar.style.marginLeft = "";
}

const output = () => {
  searchBar.addEventListener("click", openSearch);
  contactsBar.addEventListener("blur", closeSearch);
  chatSection.addEventListener("click", altCloseBar);
  chatSection.addEventListener("click", altCloseSearch);
  cancel.addEventListener("click", openBar);
  group_navItem.addEventListener("click", closeBar);
}

output()
