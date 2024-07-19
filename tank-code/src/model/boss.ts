import modelAbstract from "./modelAbstract"
import {image} from "../service/image"
import boss from "../canvas/boss"

class bossModel extends modelAbstract implements IModel{
  canvas: ICanvas = boss

  name: string = 'boss'

  image(): HTMLImageElement {
    return image.get('boss')!
  }
  render(): void {
      super.draw()
  }
}


export default  bossModel