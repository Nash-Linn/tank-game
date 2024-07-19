import config from "../config"

type positionType = {x:number,y:number}

class Position{

  collection: positionType[] = []

    // 批量生成唯一坐标
    public getPositionCollection(num:number){

      const collection: positionType[]  = []
      for(let i = 0; i < num; i++){
        const position = this.position()

        const isOverlap = this.collection.some(item => item.x === position.x && item.y === position.y)
        if(isOverlap){
          i--
          continue
        }
        this.collection.push(position)
        collection.push(position)
      }
      return collection
    }
  
  
    // 获取随机坐标
    public position(){
      return {
        x: Math.floor(Math.random() * config.canvas.width / config.model.width ) * config.model.width ,
        y: Math.floor(Math.random() * (config.canvas.height  / config.model.height - 5 )) * config.model.height + 2 * config.model.height
      }
    }


    // 清空所有坐标
    public clear(){
      this.collection = []
    }
}


export default new Position()