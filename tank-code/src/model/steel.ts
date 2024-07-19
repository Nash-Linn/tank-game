import modelAbstract from "./modelAbstract"
import {image} from "../service/image"
import steel from "../canvas/steel"


class steelModel extends modelAbstract implements IModel{
  canvas: ICanvas = steel

  name: string = 'steel'

  image(): HTMLImageElement {
    return image.get('steel')!
  }
  render(): void {
      super.draw()
  }
}

export default steelModel