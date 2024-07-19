import modelAbstract from "./modelAbstract"
import {image} from "../service/image"
import straw from "../canvas/straw"

class strawModel extends modelAbstract implements IModel{
  canvas: ICanvas = straw

  name: string = 'straw'

  image(): HTMLImageElement {
    return  image.get('straw')!
   }
  render(): void {
      super.draw()
  }
}



export default strawModel