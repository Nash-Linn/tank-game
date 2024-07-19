import modelAbstract from "./modelAbstract"
import { directionEnum } from "../enum/directionEnum"
import _ from 'lodash'
import config from "../config"
import { image } from "../service/image"
import play from "../canvas/play"
import { isCanvasTouch, isModelTouch } from "../utils"
import bullet from "../canvas/bullet"



class playModel extends modelAbstract implements IModel{
  canvas: ICanvas = play

  name: string = 'play'

  direction: directionEnum = directionEnum.top

  bindEvent:boolean = false

  // 子弹发射冷却时间 1 s
  bulletCooling = 1000

  throttleFrie= _.throttle(()=>{
    bullet.addPlayBullet()
  },this.bulletCooling)

  image():HTMLImageElement{
    const direction = this.name + _.upperFirst(this.direction) 
    return image.get(direction as keyof typeof config.images)!
  }

  render(): void {
    super.draw()
    if(!this.bindEvent){
      this.bindEvent = true
      document.addEventListener('keydown',this.changeDirection.bind(this))
      document.addEventListener('keydown',this.move.bind(this))
      document.addEventListener('keydown',(e:KeyboardEvent)=>{
        if(e.code == 'Space'){
          this.throttleFrie()
        }
      })
    }
  }

  changeDirection(e:KeyboardEvent){
      switch(e.code){
        case 'ArrowUp':
        case 'KeyW':
          this.direction = directionEnum.top
          break
        case 'ArrowRight':
        case 'KeyD':
          this.direction = directionEnum.right
          break
        case 'ArrowDown':
        case 'KeyS':
          this.direction = directionEnum.bottom
          break
        case 'ArrowLeft':
        case 'KeyA':
          this.direction = directionEnum.left
          break
      }

      this.canvas.renderModels()
  }

  move(e:KeyboardEvent){
    let x= this.x
    let y = this.y
    let step = 10

    if(!config.isStart)return

    switch(e.code){
      case 'ArrowUp':
      case 'KeyW':
        y -= step
        break
      case 'ArrowRight':
      case 'KeyD':
        x += step
        break
      case 'ArrowDown':
      case 'KeyS':
        y += step
        break
      case 'ArrowLeft':
      case 'KeyA':
        x -= step
        break
    }

    if(isModelTouch(x,y)){
      return
    }

    if(isCanvasTouch(x ,y)){
      return
    }

    this.x = x
    this.y = y

    this.canvas.renderModels()

  }
  

}


export default playModel