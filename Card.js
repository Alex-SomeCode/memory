import { stateActiveCards as state } from "./constValues.js";
import { start, createDiv } from "./index.js";

const shirtCard = createShirtCard()

export class Card {
  constructor(figureP) {
    this.figure = figureP;
    this.figure.element.appendChild(shirtCard.cloneNode(true))
  }

  set figure(figureP) {
    this._figure = figureP;
  }

  get figure() {
    return this._figure;
  }

}

export function showFace() {

  $(this).children().first().addClass("rotateFaceCard");
  $(this).children().last().addClass("rotateShirtCard");
  $(this).off("click", showFace);
}

export function showShirt() {

  $(this).children().first().removeClass("rotateFaceCard");
  $(this).children().last().removeClass("rotateShirtCard");

  $(this).off("click", showShirt).on("click", showFace);
}

export function listenerSecondClick(cardP) {

  if (state.card_1 && state.card_2) {
    return;
  }

  if (!state.card_1) {
    state.card_1 = cardP;
    return;
  }

  if (state.card_1.figure.element === cardP.figure.element) {
    console.log("identicalChoice");
    return;
  }

  if (!state.card_2) {
    state.card_2 = cardP;

    $(cardP.figure.element).off("click", showShirt);
  }

  if (state.card_1.figure.name === state.card_2.figure.name) {
    console.log('matchedCards');

    $(".wrapperCard").off("click", showFace);

    setTimeout(function () {
      $(state.card_1.figure.element).children().css("position", "static");
      $(state.card_2.figure.element).children().css("position", "static");

      $(state.card_1.figure.element).off();
      $(state.card_2.figure.element).off();

      $(state.card_1.figure.element)
        .addClass("disabledCard")
        .removeClass("wrapperCard");
      $(state.card_2.figure.element)
        .addClass("disabledCard")
        .removeClass("wrapperCard");

      $(".wrapperCard").on("click", showFace);

      state.card_1 = null;
      state.card_2 = null;

      ++state.counter;
      if (state.counter == 5) {
        console.log(state.counter);

        console.log("you win");


        setTimeout(function () {
          const containerGame = $("#containerGame");
          const el = $("<div>Cool!!! You are won!!!!</div>");
          el.addClass("winWindow");

          el.css({
            top: ($(".containerGame").outerHeight() - 100) / 2,
            left: ($(".containerGame").outerWidth() - 200) / 2,
          });
          containerGame.append(el);
        }, 1000)

        $("#startFinish").off().on("click", start).html("START");

        state.counter = 0;
      }
    }, 500);

    return;
  }

  $(".wrapperCard").off("click", showFace);

  setTimeout(function () {
    rotateCards();

    $(".wrapperCard").on("click", showFace);
    state.card_1 = null;
    state.card_2 = null;
  }, 1000);
}

function rotateCards() {
  $(state.card_1.figure.element).children().first().removeClass("rotateFaceCard");
  $(state.card_1.figure.element).children().last().removeClass("rotateShirtCard");
  $(state.card_2.figure.element).children().first().removeClass("rotateFaceCard");
  $(state.card_2.figure.element).children().last().removeClass("rotateShirtCard");
}

function createShirtCard() {
  let shirtCard = createDiv("containerShirt");
  for (let i = 1; i < 4; i++) {
    let rowsOfPatterns = createRowsOfPatterns();
    shirtCard.appendChild(rowsOfPatterns);
  }
  return shirtCard
}

function createRowsOfPatterns() {

  let rowsOfPatterns = createDiv("rowOfPatterns");
  for (let i = 1; i < 4; i++) {
    let patternShirt = createPatternShirt();
    rowsOfPatterns.appendChild(patternShirt)
  }

  return rowsOfPatterns;
}

function createPatternShirt() {

  let shirtElement = createDiv('patternElement');
  for (let i = 1; i < 13; i++) {
    let elementOfPatternShirt = createElementOfPatternShirt(`triangleBorder-${i}`)
    shirtElement.appendChild(elementOfPatternShirt)
  }

  return shirtElement
}

function createElementOfPatternShirt(classNameP) {
  let element = createDiv(classNameP);
  return element
}






