import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import audio from "../service/audio";


export default abstract class modelAbstract{

  abstract name:string

  public abstract canvas:ICanvas

  abstract render():void

  abstract image():HTMLImageElement

  public direction:directionEnum = directionEnum.top

  public width = config.model.width
  public height = config.model.height

  constructor(public x:number,public y:number){
    this.randomDirection()
  }


   // 生成随机方向
   randomDirection(){
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum

  }


  protected draw(){
    this.canvas.ctx.drawImage(this.image(),this.x,this.y,config.model.width, config.model.height)
  }


  public destroyed(){
    this.canvas.removeModel(this)
    this.canvas.renderModels()
  }


  protected blast(model:IModel){
    audio.blast()
    Array(...Array(8).keys()).reduce((_,cur)=>{
      return new Promise(resolve =>{
        setTimeout(() => {
          const img = new Image()
          img.src = `/src/static/images/blasts/blast${cur}.gif`
          img.onload = ()=>{
            this.canvas.ctx.drawImage(
              img,
              model.x,
              model.y,
              model.width,
              model.height
            )
            resolve(null)
          }
        },cur * 30);
      })
    },Promise.resolve())
  }

}