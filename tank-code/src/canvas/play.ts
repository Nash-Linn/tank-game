import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from '../model/play'

//画布--玩家
class playCanvas extends canvasAbstract implements ICanvas{
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

 

   // 生成模型实例
   protected createModels(){  
      let model = this.model()
      const instance = new model(config.canvas.width/2 - 5 * config.model.width,config.canvas.height - config.model.height)
      this.models.push(instance)
   }
}

export default new playCanvas('play')