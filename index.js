import {
  cardsForBody,
  addCardsToBody,
} from "./figureElements.js";

import { stateActiveCards as state } from "./constValues.js";

import { showFace } from "./Card.js";

$("#startFinish").click(start);



export function start() {
  $(this).html("FiNiSH").off("click", start).on("click", finish);
  $(containerGame).html("");

  const cardsArr = cardsForBody();

  addCardsToBody(cardsArr);
  $(".wrapperCard").on("click", showFace);

  $(".wrapperCard").slideDown(500);
}

function finish() {
  $(this).html("START").off("click", finish).on("click", start);

  $(this).prop("disabled", true);

  const v = this;
  setTimeout(function () {
    $(".wrapperCard").children(".contFaceCard").addClass("rotateFaceCard ");
    $(".wrapperCard").children(".containerShirt").addClass("rotateShirtCard ");

    state.counter = 0;

    $(".wrapperCard").off();
  }, 500);

  setTimeout(function () {
    $(v).prop("disabled", false);
  }, 1500);
}


export function createDiv(classP) {
  const div = document.createElement("div");

  classP = classP.split(" ");

  classP.forEach((element) => {
    div.classList.add(element);
  });
  classP = null;
  return div;
}
