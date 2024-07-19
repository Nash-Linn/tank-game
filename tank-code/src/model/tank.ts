import modelAbstract from "./modelAbstract"
import { directionEnum } from "../enum/directionEnum"
import _ from 'lodash'
import config from "../config"
import { image } from "../service/image"
import tank from "../canvas/tank"
import { isCanvasTouch, isModelTouch } from "../utils"



class tankModel extends modelAbstract implements IModel{
  canvas: ICanvas = tank

  name: string = 'tank'

  image():HTMLImageElement{
    const direction = this.name + _.upperFirst(this.direction) 
    return image.get(direction as keyof typeof config.images)!
  }

  render(): void {
    this.move()

    // 增加向下的概率 
    if(_.random(20)==1){
      this.direction =  directionEnum.bottom
    }
  }

  protected move(){

    while(true){
      let x= this.x
      let y = this.y
  
      switch(this.direction){
        case directionEnum.top:
          y --
          break
        case directionEnum.right:
          x ++
          break
        case directionEnum.bottom:
          y ++
          break
        case directionEnum.left:
          x --
          break
      }

      if(isModelTouch(x,y) || isCanvasTouch(x,y)){
        this.randomDirection()
      }else{
        this.x = x
        this.y = y
        break
      }
    }
    
    super.draw()
  }

 

}


export default tankModel