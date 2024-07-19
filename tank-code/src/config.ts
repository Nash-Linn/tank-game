import straw from './static/images/straw/straw.png'
import wall from './static/images/wall/wall.gif'
import water from './static/images/water/water.gif'
import steel from './static/images/wall/steels.gif'

import tankTop from './static/images/tank/top.gif'
import tankBottom from './static/images/tank/bottom.gif'
import tankLeft from './static/images/tank/left.gif'
import tankRight from './static/images/tank/right.gif'

import bullet from './static/images/bullet/bullet.jpg'
import boss from './static/images/boss/boss.png'

import playTop from './static/images/player/top.gif'
import playBottom from './static/images/player/bottom.gif'
import playLeft from './static/images/player/left.gif'
import playRight from './static/images/player/right.gif'

class gameConfig{
  timeout = 20
  isStart = false
  canvas = {
    width:900,
    height:600
  }
  model={
    width:30,
    height:30
  }
  straw={
    num:150
  }
  wall={
    num:150
  }
  water={
    num:20
  }
  steel={
    num:30
  }
  tank={
    num:5
  }
  images={
    straw,
    wall,
    water,
    steel,
    tankTop,
    tankBottom,
    tankLeft,
    tankRight,
    bullet,
    boss,
    playTop,
    playBottom,
    playLeft,
    playRight
  }

  changeGameStart(b:boolean){
    this.isStart = b
  }
} 

export default new gameConfig()
