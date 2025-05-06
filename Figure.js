export class Figure {
  constructor(nameP, methodP) {
    this.name = nameP;
    this.element = methodP
  }

  set name(nameP) {
    if (!this._name) {
      this._name = nameP;
    }
  }

  set element(drawP) {
    if (!this.element)
      this._element = drawP()
  }

  get element() {
    return this._element
  }

  get name() {
    return this._name;
  }


}