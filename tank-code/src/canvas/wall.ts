import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from '../model/wall'

//画布--墙
class wallCanvas extends canvasAbstract implements ICanvas{
  num(): number {
    return config.wall.num 
  }
  model(): ModelConstructor {
    return model
  } 
 
  render():void{
    super.createModels()
    this.createBossWall()
    super.renderModels()
  }


  createBossWall(){
    const cw = config.canvas.width
    const ch = config.canvas.height
    const mw = config.model.width
    const mh = config.model.height
   
    const pos = [
      {x:cw/2 - 2 * mw,y:ch - mh},
      {x:cw/2 + 2 * mw,y:ch - mh},
      {x:cw/2 - 2 * mw,y:ch - 2 * mh},
      {x:cw/2 + 2 * mw,y:ch - 2 * mh},
      {x:cw/2 - 2 * mw,y:ch - 3 * mh},
      {x:cw/2 + 2 * mw,y:ch - 3 * mh},
      {x:cw/2 - mw,y:ch - 3 * mh},
      {x:cw/2 + mw,y:ch - 3 * mh},
      {x:cw/2,y:ch - 3 * mh},
    ]
    pos.forEach((p)=>{
      let model = this.model()
      const instance =   new model(p.x,p.y)
      this.models.push(instance)
    })
  }
}

export default new  wallCanvas('wall')