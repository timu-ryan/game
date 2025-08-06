import { resources } from './Resource.js';
import { Sprite } from './Sprite.js';
import { Vector2 } from './Vector2.js';

const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext("2d");

const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(320, 180),
})

const groundSprite = new Sprite({
  resource: resources.images.ground,
  frameSize: new Vector2(320, 180),
})

const hero = new Sprite({
  resource: resources.images.hero,
  frameSize: new Vector2(32, 32),
  hFrames: 3,
  vFrames: 8,
  frame: 1
})

const heroPos = new Vector2(16 * 6, 16 * 5)

const shadow = new Sprite({
  resource: resources.images.shadow,
  frameSize: new Vector2(32, 32),
})

const draw = () => {
  skySprite.drawImage(ctx, 0, 0);
  groundSprite.drawImage(ctx, 0, 0);

  // center the Hero in the cell
  const heroOffset = new Vector2(-8, -21);
  const heroPosX = heroPos.x + heroOffset.x;
  const heroPosY = heroPos.y + 1 + heroOffset.y;

  shadow.drawImage(ctx, heroPosX, heroPosY)
  hero.drawImage(ctx, heroPosX, heroPosY)
}

setInterval(() => {
  draw()
}, 300);
