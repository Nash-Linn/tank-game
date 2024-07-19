import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from '../model/steel'

//画布--白墙
class steelCanvas extends canvasAbstract implements ICanvas{
  num(): number {
    return config.steel.num 
  }
  model(): ModelConstructor {
    return model
  }

  render():void{
    super.createModels()
    super.renderModels()
  }
}

export default new steelCanvas('steel')
