import Phaser from 'phaser';
import King from '../sprites/King';

export default class extends Phaser.State {
  // init() {}
  // preload() {}

  create() {
    this.mushroom = new King({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'king',
    });

    this.game.add.existing(this.mushroom);
  }

  // render() {}
}
