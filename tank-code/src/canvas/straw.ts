import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from '../model/straw'

//画布--草地
class strawCanvas extends canvasAbstract implements ICanvas{
  num(): number {
      return config.straw.num 
  }
  model(): ModelConstructor {
    return model
  }



  render():void{
    super.createModels()
    super.renderModels()
  }
}

export default new strawCanvas('straw')
