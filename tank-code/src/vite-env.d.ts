/// <reference types="vite/client" /> 

interface ModelConstructor{
   new(x:number,y:number):IModel
}

interface BulletModelConstructor{
  new(tank:IModel):IModel
}

interface IModel{
  render():void
  x:number
  y:number
  width:number
  height:number,
  tank?:IModel
  name:string
  image():HTMLImageElement
  direction:directionEnum
  destroyed():void
}


interface ICanvas{
  model():ModelConstructor | BulletModelConstructor
  num():number
  ctx:CanvasRenderingContext2D
  removeModel(model:IModel):void
  renderModels():void
  stop?():void
}