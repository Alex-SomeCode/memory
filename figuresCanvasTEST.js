const figure = {
  canvas: null,
  ordinatePoints: [],
};

const valuesStarObj = {
  name: "star",
  isStar: true,
  angleMultiplier: [
    { angle: 110, multiplier: 1 },
    { angle: 25, multiplier: 0.94 },
    { angle: 155, multiplier: 1.1, prevMultiplierY: true },
    { angle: 49, multiplier: 1.25 },
    { angle: -127, multiplier: 1 },
  ],
  linelength: 200,
  beginCoords: { x: 100, y: 0 },
  coords: [],
  color: "#bf00ff",
};

const star = {
  coords: [
    { x: 31, y: 187 },
    { x: 201, y: 79 },
    { x: 1, y: 79 },
    { x: 165, y: 188 },
    { x: 44, y: -160 },
  ],
  color: "#bf00ff",
  beginCoords: { x: 100, y: 0 },
};

const valuesHeart = {
  isCurve: true,
  //   linelength: 200,
  beginCoords: { x1: 40, y1: 30 },
  coords: { curve1: { x2: 150, y2: 70, x3: 50, y3: 70, x4: 160, y4: 30 } },
  //   coords: {
  //     curve1: { x2: -20, y2: 0, x3: 100, y3: 170 },
  //     curve2: { x2: 220, y2: 0, x3: 100, y3: 170 },
  //   },

  color: "#bf00ff",
};

export const figuresArr = [star, valuesHeart];

export function drawFigure(canvasP, figValuesP) {
  console.log(figValuesP);
  const ctx = canvasP.getContext("2d");

  ctx.beginPath();

  console.log(figValuesP);
  if (figValuesP.isCurve) {
    ctx.moveTo(figValuesP.beginCoords.x1, figValuesP.beginCoords.y1);
    ctx.bezierCurveTo(
      figValuesP.coords.curve1.x2,
      figValuesP.coords.curve1.y2,
      figValuesP.coords.curve1.x3,
      figValuesP.coords.curve1.y3,
      figValuesP.coords.curve1.x4,
      figValuesP.coords.curve1.y4
    );
    ctx.stroke();
    return;
  }

  ctx.moveTo(figValuesP.beginCoords.x, figValuesP.beginCoords.y);

  figValuesP.coords.forEach((el) => ctx.lineTo(el.x, el.y));
  ctx.strokeStyle = figValuesP.color;
  ctx.stroke();
  ctx.fillStyle = figValuesP.color;
  ctx.fill();
}

// export function createCoords(figuresArr) {
//   figuresArr.forEach((objFigure) => {
//     if (objFigure.isStar) {
//       objFigure.angleMultiplier.forEach((el, index) => {
//         let x;
//         objFigure.coords.length == 0
//           ? (x = setX(
//               objFigure.beginCoords.x,
//               degrToRad(el.angle),
//               objFigure.linelength * el.multiplier
//             ))
//           : (x = setX(
//               objFigure.coords[index - 1].x,
//               degrToRad(el.angle),
//               objFigure.linelength * el.multiplier
//             ));

//         let y = setY(
//           degrToRad(el.angle),
//           objFigure.linelength *
//             (el.prevMultiplierY
//               ? objFigure.angleMultiplier[index - 1].multiplier
//               : el.multiplier)
//         );

//         objFigure.coords.push({ x, y });
//       });
//     }
//   });

//   console.log(figuresArr);
// }

// function setBeginFigValues(canvasP, objFigureP) {
//   objFigureP.linelength = canvasP.width;
//   objFigureP.beginCoords.x = canvasP.width / 2;
//   objFigureP.beginCoords.y =
//     (canvasP.height -
//       setY(
//         degrToRad(objFigureP.angleMultiplier[0].angle),
//         objFigureP.linelength
//       )) /
//     2;

//   console.log(objFigureP);
// }

// function degrToRad(angleP) {
//     return (angleP * Math.PI) / 180;
//   }

//   function setX(prXvalP, angleP, lengthP) {
//     console.log(
//       `${prXvalP},${Math.cos(angleP) * lengthP}, ${Math.floor(
//         prXvalP + Math.cos(angleP) * lengthP
//       )} cos`
//     );
//     // return prXvalP + Math.cos(angleP) * lengthP;
//     return Math.floor(prXvalP + Math.cos(angleP) * lengthP);
//   }

//   function setY(angleP, lengthP) {
//     console.log(lengthP, angleP, Math.floor(Math.sin(angleP) * lengthP), "sin");
//     // return Math.sin(angleP) * lengthP;
//     return Math.floor(Math.sin(angleP) * lengthP);
//   }

// ----------------------
// let canvas1 = document.getElementById('canvas1');
// let ctx1 = canvas1.getContext("2d");
// let lengthLine = 200;

// let canvas1 = document.getElementById("canvas1");
// let ctx1 = canvas1.getContext("2d");

// ctx1.strokeStyle = "#bf00ff";

// let angle = setAngle(110);

// let lengthLine = canvas1.height * 1;
// let x = setX(canvas1.width / 2, angle, lengthLine);
// let y = setY(angle, lengthLine);
// ctx1.beginPath(); // починаємо новий шлях
// ctx1.moveTo(canvas1.width / 2, 0); // переміщаємо перо до центру верхнього краю
// ctx1.lineTo(x, y); // малюємо лінію до обчислених координат

// angle = setAngle(25);

// // lengthLine = canvans.width * 0.46;
// lengthLine = canvas1.width * 0.94;
// x = setX(x, angle, lengthLine);
// y = setY(angle, lengthLine);
// ctx1.lineTo(x, y);

// angle = setAngle(155);
// y = setY(angle, lengthLine);

// // lengthLine = canvans.width * 0.54;
// lengthLine = canvas1.width * 1.1;

// x = setX(x, angle, lengthLine);

// ctx1.lineTo(x, y);

// angle = setAngle(49);
// lengthLine = canvas1.width * 1.25;

// x = setX(x, angle, lengthLine);
// y = setY(angle, lengthLine);
// ctx1.lineTo(x, y);

// lengthLine = canvas1.width * 1;
// angle = setAngle(-126);
// x = setX(x, angle, lengthLine);
// y = setY(angle, lengthLine);
// ctx1.lineTo(x, y);

// ctx1.fillStyle = "#bf00ff";
// ctx1.fill();
// ctx1.stroke();

// --------------------------
// previousStar

// var canvans2 = document.getElementById("canvas2");
// var ctx2 = canvans2.getContext("2d");
// let angle2 = setAngle(110);
// let lengthLine2 = canvans2.width * 1; // довжина лінії
// let x2 = setX(canvans2.width / 2, angle2, lengthLine2);
// let y2 = setY(angle2, lengthLine2);
// ctx2.beginPath(); // починаємо новий шлях
// ctx2.moveTo(canvans2.width / 2, 0); // переміщаємо перо до центру верхнього краю
// ctx2.lineTo(x2, y2); // малюємо лінію до обчислених координат

// angle2 = setAngle(25);

// lengthLine2 = canvans2.width * 0.94;
// x2 = setX(x2, angle2, lengthLine2);
// y2 = setY(angle2, lengthLine2);
// ctx2.lineTo(x2, y2);

// let value = {
//   x: x2,
//   y: y2,
// };

// angle2 = setAngle(155);
// y2 = setY(angle2, lengthLine2);

// lengthLine2 = canvans2.width * 1.1;

// x2 = setX(x2, angle2, lengthLine2);

// value.newX = x2;
// value.newY = y2;

// ctx2.lineTo(x2, y2);
// ctx2.stroke();

// angle2 = setAngle(70);
// lengthLine2 = canvans2.width * 1;
// ctx2.moveTo(canvans2.width / 2, 0);
// x2 = setX(canvans2.width / 2, angle2, lengthLine2);
// y2 = setY(angle2, lengthLine2);
// ctx2.lineTo(x2, y2);

// lengthLine2 = canvans2.width * 0.93;
// angle2 = setAngle(155);
// x2 = setX(x2, angle2, lengthLine2);
// y2 = setY(angle2, lengthLine2);
// ctx2.lineTo(x2, y2);
// // ctx2.fill()
// ctx2.stroke();

// ----- Test lines
// let angleTest = setAngle(155);
// console.log("-------------------------");
// console.log(angleTest, "!!!!!!");
// let lengthTest = canvans.width * 0.5;
// ctx.beginPath();
// // ctx.moveTo(canvans.width / 2, canvans.height / 2);
// ctx.moveTo(value.x, 0);
// let xTest = setX(canvans.width / 2, angleTest, lengthTest);
// let yTest = setY(angleTest, lengthTest);

// ctx.lineTo(xTest, yTest);

// ctx.moveTo(canvans.width / 2, 0);
// xTest = setX(canvans.width / 2, angleTest, lengthTest);
// yTest = setY(angleTest, lengthTest);

// ctx.lineTo(xTest, yTest);

// ctx.moveTo(0, 0);
// // lengthTest = canvans.width * 0.7;
// lengthTest = canvans.width * 0.46;

// angleTest = setAngle(27);
// xTest = setX(0, angleTest, lengthTest);
// yTest = setY(angleTest, lengthTest);
// ctx.lineTo(xTest, yTest);

// ctx.moveTo(canvans.width / 2, 0);

// angleTest = setAngle(25);
// xTest = setX(canvans.width / 2, angleTest, lengthTest);
// yTest = setY(angleTest, lengthTest);
// ctx.lineTo(xTest, yTest);

// ctx.stroke();

// console.log("yTest:", yTest);
// console.log("lastY:", y);
