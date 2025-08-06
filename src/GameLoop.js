
export class GameLoop {
  constructor(update, render) {
    
    this.lastFrameTime = 0;
    this.accumulatedTime = 0;
    this.timeStep = 1000/60; // 60 fps - frame per sec
    
    this.update = update;
    this.render = render;

    this.rafId = null; // raf - request animation frame
    this.isRunnung;
  }

  // timestamp - time from the loading the page
  mainLoop = (timestamp) => {
    if (!this.isRunnung) return;

    let deltaTime = timestamp - this.lastFrameTime;
    this.lastFrameTime = timestamp;

    // accumulate all the time since last frame
    this.accumulatedTime += deltaTime;

    // fixed time steps updates
    // if there's enough accumulated time to run one or more updates, run them
    while (this.accumulatedTime >= this.timeStep) {
      this.update(this.timeStep); // fixed time step size
      this.accumulatedTime -= this.timeStep;
    }

    this.render();

    this.rafId = requestAnimationFrame(this.mainLoop);
  }

  start() {
    if (!this.isRunnung) {
      this.isRunnung = true;
      this.rafId = requestAnimationFrame(this.mainLoop);
    }
  }

  stop() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.isRunnung = false;
  }

}
