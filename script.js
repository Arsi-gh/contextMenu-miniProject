let divCon = document.getElementById("divContainer");
function contextHandler(event) {
  event.preventDefault();
  if (divCon.style.display === "none") {
    divCon.style.left = event.pageX + "px";
    divCon.style.top = event.pageY + "px";
    divCon.style.display = "block";
  } else {
    divCon.style.left = event.pageX + "px";
    divCon.style.top = event.pageY + "px";
  }
}
function clickHandler() {
  divCon.style.display = "none";
}
function keyDownHandler(event) {
  if (event.key === "Escape") {
    divCon.style.display = "none";
  }
}
document.body.addEventListener("contextmenu", contextHandler);
document.body.addEventListener("click", clickHandler);
document.body.addEventListener("keydown", keyDownHandler);
