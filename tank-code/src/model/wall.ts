import modelAbstract from "./modelAbstract"
import {image} from "../service/image"
import wall from "../canvas/wall"

class wallModel extends modelAbstract implements IModel{
  canvas: ICanvas = wall

  name: string = 'wall'

  image(): HTMLImageElement {
    return image.get('wall')!
  }
  render(): void {
      super.draw()
  }
}


export default  wallModel