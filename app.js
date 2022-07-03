// const navItemContainer = document.getElementById("nav-item-wrapper");


// function that opens and close the nav menubar
// function forMenu() {
//     navItemContainer.classList.toggle("open-nav-items")
// }


var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight ="0px";
function menutoggle() {
  if( MenuItems.style.maxHeight =="0px")
  {
    MenuItems.style.maxHeight ="200px"
  }
  else
  {
    MenuItems.style.maxHeight ="0px";
  }
}


