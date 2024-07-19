import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from '../model/tank'
import position from "../service/position"

//画布--坦克
class tankCanvas extends canvasAbstract implements ICanvas{
  timeIntervalId: number = 0
  num(): number {
    return config.tank.num
  }
  model(): ModelConstructor {
    return model
  } 


 
  render():void{
    this.createModels()
    this.renderModels()

    this.timeIntervalId = setInterval(()=>{
      this.renderModels()
    },config.timeout)
  }

  renderModels(){
    // this.ctx.clearRect(0,0,config.canvas.width, config.canvas.height)
    super.renderModels()
  }

   // 生成模型实例
  protected createModels(){
    for(let i = 0; i < this.num(); i++){
      const pos = position.position()

      let model = this.model()
      const instance =   new model(pos.x,0)
      this.models.push(instance)
    }
  }

  stop(){
    clearInterval(this.timeIntervalId)
  }
}

export default new tankCanvas('tank')