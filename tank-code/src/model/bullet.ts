import modelAbstract from "./modelAbstract"
import {image} from "../service/image"
import bullet from "../canvas/bullet"
import config from "../config"
import { directionEnum } from "../enum/directionEnum"
import { isCanvasTouch, isModelTouch } from "../utils"
import wall from "../canvas/wall"
import steel from "../canvas/steel"
import boss from "../canvas/boss"
import tank from "../canvas/tank"
import play from "../canvas/play"

class bulletModel extends modelAbstract implements IModel{
  canvas: ICanvas = bullet

  name: string = 'bullet'

  bulletWidth = 5
  bulletHeight = 5

  constructor(public tank:IModel){
    super(tank.x + config.model.width/2 , tank.y + config.model.height/2)
    this.direction = tank.direction
  }


  image(): HTMLImageElement {
    return image.get('bullet')!
  }
  render(): void {
    let x  = this.x
    let y = this.y
    let step = this.tank.name == 'play' ? 2 :1
    switch(this.direction){
      case directionEnum.top:
        y -= step
        break
      case directionEnum.right:
        x += step
        break
      case directionEnum.bottom:
        y += step
        break
      case directionEnum.left:
        x -= step
        break
    }

    const touchModel = isModelTouch(
      x,
      y,
      this.bulletWidth,
      this.bulletHeight,
      [...wall.models,...steel.models,...boss.models,...tank.models,...play.models]
    )

    if(isCanvasTouch(x,y,1,this.bulletWidth,this.bulletHeight)){
      this.destroyed() 
    }else if(touchModel && touchModel.name != this.tank.name){
      this.destroyed() 
      this.blast(touchModel)
      if(touchModel.name != 'steel'){
        touchModel.destroyed()
      }
    }else{
      this.x = x
      this.y = y
  
      this.draw()
    }
  }


  protected draw(){
    this.canvas.ctx.drawImage(this.image(),this.x,this.y,this.bulletWidth,this.bulletHeight)
  }
}


export default  bulletModel