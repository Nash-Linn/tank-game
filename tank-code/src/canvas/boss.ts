import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from '../model/boss'

//画布--boss
class bossCanvas extends canvasAbstract implements ICanvas{
  num(): number {
    return 1
  }
  model(): ModelConstructor {
    return model
  }
 
  render():void{
    this.createModels()
    super.renderModels()
  }


  createModels(){
    const instance =  new model( config.canvas.width/2 ,config.canvas.height - config.model.height)
    this.models.push(instance)
 }

}

export default new bossCanvas('boss')