import { STAR, CIRCLE, HEART, SQUARE, TRIANGLE } from "./constValues.js";
import { Card, listenerSecondClick } from "./Card.js";
import { Figure } from "./Figure.js";
import { createDiv } from "./index.js";

const arrOfShapes = [
  { name: CIRCLE, methodP: createCircle },
  { name: HEART, methodP: createHeart },
  { name: STAR, methodP: createStar },
  { name: SQUARE, methodP: createSquare },
  { name: TRIANGLE, methodP: createTriangle }
];

export function randomNumber(arrP) {
  return Math.floor(Math.random() * arrP.length);
}

export function addCardsToBody(arrP) {
  for (let i = arrP.length; i > 0; i--) {
    const index = randomNumber(arrP);
    const currentValue = arrP.splice(index, 1)[0];

    $(currentValue.figure.element).on("click", function () {
      listenerSecondClick(currentValue);
    });

    if (containerGame.contains(currentValue.figure.element)) {
      containerGame.appendChild(currentValue.figure.element.cloneNode(true));
    }
    else
      containerGame.appendChild(currentValue.figure.element)

  }
}

export const cardsForBody = () => {
  let arrCards = [];
  arrOfShapes.forEach((shapeEl) => {
    const figure1 = switchForFunctions(shapeEl)
    const figure2 = switchForFunctions(shapeEl)
    const card1 = new Card(figure1)
    const card2 = new Card(figure2)
    arrCards.push(card1);
    arrCards.push(card2);
  });

  return arrCards;
};

function switchForFunctions(elementP) {
  switch (elementP.name) {
    case STAR:
      return new Figure(elementP.name, elementP.methodP);
    case CIRCLE:
      return new Figure(elementP.name, elementP.methodP);
    case SQUARE:
      return new Figure(elementP.name, elementP.methodP);
    case TRIANGLE:
      return new Figure(elementP.name, elementP.methodP);
    case HEART:
      return new Figure(elementP.name, elementP.methodP);
  }
}

function createStar() {
  let container = createDiv("containerRelative");
  let elemntOfStar
  for (let i = 1; i < 7; i++) {
    switch (i) {
      case 1:
        elemntOfStar = createDiv("star1");
        break;
      case 2:
        elemntOfStar = createDiv("star2");
        break;
      case 3:
        elemntOfStar = createDiv("star3");
        break;
      case 4:
        elemntOfStar = createDiv("star4");
        break;
      case 5:
        elemntOfStar = createDiv("star5");
        break;
      case 6:
        elemntOfStar = createDiv("starCenter");
        break;
    }

    container.appendChild(elemntOfStar);
  }

  const contFaceCard = createDiv("contFaceCard");
  contFaceCard.appendChild(container);
  const wrapper = createDiv("wrapperCard");
  wrapper.appendChild(contFaceCard);
  return wrapper;
}

function createCircle() {
  const wrapper = createDiv("wrapperCard");
  const contFaceCard = createDiv("contFaceCard");
  const figure = createDiv("circle");
  contFaceCard.appendChild(figure);
  wrapper.appendChild(contFaceCard);
  return wrapper;
}

function createTriangle() {
  const wrapper = createDiv("wrapperCard");
  const contFaceCard = createDiv("contFaceCard");
  const figure = createDiv("triangle");
  contFaceCard.appendChild(figure);
  wrapper.appendChild(contFaceCard);
  return wrapper;
}

function createSquare() {
  const wrapper = createDiv("wrapperCard");
  const contFaceCard = createDiv("contFaceCard");
  const figure = createDiv("square");
  contFaceCard.appendChild(figure);
  wrapper.appendChild(contFaceCard);
  return wrapper;
}

function createHeart() {
  const container = createDiv("containerRelative");
  const contFaceCard = createDiv("contFaceCard");
  contFaceCard.appendChild(container);

  let element;
  for (let i = 1; i < 4; i++) {
    switch (i) {
      case 1:
        element = createDiv("rhombus");
        break;
      case 2:
        element = createDiv("heart circle left");
        break;
      case 3:
        element = createDiv("heart circle right");
        break;
    }

    container.appendChild(element);
  }
  const wrapper = createDiv("wrapperCard");
  wrapper.appendChild(contFaceCard);

  return wrapper;
}


