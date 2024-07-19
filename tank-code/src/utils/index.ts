import boss from "../canvas/boss"
import steel from "../canvas/steel"
import wall from "../canvas/wall"
import water from "../canvas/water"
import config from "../config"

  // 碰撞检测
  export function isModelTouch(
      x:number,
      y:number,
      width=config.model.width,
      height=config.model.height,
      models = [...wall.models,...steel.models,...water.models,...boss.models]
  ):IModel | undefined{
    return  models.find(model=>{
     const state = 
      x + width <= model.x ||
      x >= model.x + model.width || 
      y + height <= model.y || 
      y >= model.y + model.height 
     return !state
    })
  }


  export function isCanvasTouch(
    x:number,
    y:number,
    step:number = 1,
    width=config.model.width,
    height=config.model.height,
  ):boolean{
    return(
      x < 0 || 
      x + width - step >= config.canvas.width || 
      y < 0 || 
      y + height - step >= config.canvas.height 
    )
  }