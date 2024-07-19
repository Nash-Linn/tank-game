import canvasAbstract from "./canvasAbstract"
import model from '../model/bullet'
import tank from "./tank";
import bulletModel from "../model/bullet";
import play from "./play";
import audio from "../service/audio";

//画布--子弹
class bulletCanvas extends canvasAbstract implements ICanvas{
  timeIntervalId:number | NodeJS.Timeout = 0

  num(): number {
    return 1
  }
  model(): BulletModelConstructor {
    return model
  } 
 
 
  render():void{
    this.timeIntervalId = setInterval(()=>{
      this.createBullet()
      this.renderModels()
    }, 20);
  }

  createBullet(){
    tank.models.forEach((tank)=>{
      //判断该坦克是否已存在子弹
      const isExist = this.models.some( m => m.tank == tank)
      if(!isExist){
        this.models.push(new bulletModel(tank))
      }
    })
  }
  addPlayBullet(){
    this.models.push(new bulletModel(play.models[0]))
    audio.fire()
  }

  stop(): void {
    clearInterval(this.timeIntervalId)
  }
}

export default new  bulletCanvas('bullet')