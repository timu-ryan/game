export const LEFT = "LEFT";
export const RIGHT = "RIGHT";
export const UP = "UP";
export const DOWN = "DOWN";


export class Input {
  constructor() {

    this.heldDirections = [];

    document.addEventListener("keydown", (e) => {

      if (e.code === "ArrowUp" || e.code === "KewW") {
        this.onArrowPressed(UP);
      }
      if (e.code === "ArrowDown" || e.code === "KewS") {
        this.onArrowPressed(DOWN);
      }
      if (e.code === "ArrowLeft" || e.code === "KewA") {
        this.onArrowPressed(LEFT);
      }
      if (e.code === "ArrowRight" || e.code === "KewD") {
        this.onArrowPressed(RIGHT);
      }

    })

    document.addEventListener("keyup", (e) => {

      if (e.code === "ArrowUp" || e.code === "KewW") {
        this.onArrowReleased(UP);
      }
      if (e.code === "ArrowDown" || e.code === "KewS") {
        this.onArrowReleased(DOWN);
      }
      if (e.code === "ArrowLeft" || e.code === "KewA") {
        this.onArrowReleased(LEFT);
      }
      if (e.code === "ArrowRight" || e.code === "KewD") {
        this.onArrowReleased(RIGHT);
      }

    })
  }

  get direction() {
    return this.heldDirections[0];
  }

  onArrowPressed(direction) {
    // add if it's new
    if (this.heldDirections.indexOf(direction) === -1) {
      this.heldDirections.unshift(direction);
    }
  }

  onArrowReleased(direction) {
    const index = this.heldDirections.indexOf(direction);
    if (index === -1) {
      return;
    }
    // remove this key from the list
    this.heldDirections.splice(index, 1);
  }

}
