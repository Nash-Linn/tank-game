export default {
  el(id:string){
   return document.querySelector<HTMLAudioElement>(id)!
  },

  start(){
    const url = new URL('/src/static/music/start.wav', import.meta.url)
    this.el('#aStart').src = url.href
    this.el('#aStart').play()
  },

  fire(){
    const url = new URL('/src/static/music/fire.wav', import.meta.url)
    this.el('#aFire').src = url.href
    this.el('#aFire').play()
  }

  ,
  blast(){
    const url = new URL('/src/static/music/blast.wav', import.meta.url)
    this.el('#aBlast').src =  url.href
    this.el('#aBlast').play()
  }
}