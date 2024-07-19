import './style.scss'
import config from './config'
import straw from  './canvas/straw'
import './service/image'
import { imageLoad } from'./service/image'
import wall from './canvas/wall'
import water from './canvas/water'
import steel from './canvas/steel'
import tank from './canvas/tank'
import bullet from './canvas/bullet'
import boss from './canvas/boss'
import play from './canvas/play'
import audio from './service/audio'
import position from './service/position'

const app  =  document.querySelector<HTMLDivElement>('#app')!

app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'



let state = 9

//定时器
let timeIntervalId:number| NodeJS.Timeout

async function bootstrap(){
  app.addEventListener('click',()=>{
    start()
  })
}

//创建画布
function initCanvas(){
  clearCanvas()
  position.clear()

  bullet.init()
  straw.init()
  wall.init()
  water.init()
  steel.init()
  tank.init()
  boss.init()
  play.init()
}
//清除画布
function clearCanvas(){
  const canvas = document.querySelectorAll('canvas')
  canvas.forEach(item => item.remove())
}
async function start(){
  if(config.isStart) return
  config.changeGameStart(true)
  audio.start()
  timeIntervalId = setInterval(()=>{
    if(boss.models.length == 0 || play.models.length == 0)state = 1
    if(tank.models.length == 0)state = 0
    if(state != 9){
      config.changeGameStart(false)
      stop()
    }
  },500)

  app.style.backgroundImage = 'none'

  await Promise.all(imageLoad)

  initCanvas()
}


async function stop(){
  clearInterval(timeIntervalId)
  tank.stop()
  bullet.stop()
  endText()
  state = 9

}


function endText(){
  const el = document.createElement('canvas')
  el.width = config.canvas.width
  el.height = config.canvas.height
  const ctx = el.getContext('2d')!
  ctx.fillStyle = 'red'
  ctx.font = '80px Arial'
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'
  ctx.fillText(state == 0 ?'胜利':'游戏结束',config.canvas.width/2,config.canvas.height/2)
  ctx.font = '40px Arial'
  ctx.fillText('点击重新开始',config.canvas.width/2,config.canvas.height/2 + 100)
  app.appendChild(el)
}


export default {
  bootstrap,
}