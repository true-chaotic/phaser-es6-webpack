import Phaser from 'phaser';

export default class extends Phaser.Sprite {
  constructor({ game, x, y, asset }) {
    super(game, x, y, asset);
    this.anchor.setTo(0.5);

    this.animations.add('breathe');

    this.animations.play('breathe', 8, true);
  }

  // update() {}
}
