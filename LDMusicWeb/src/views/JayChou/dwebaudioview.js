/* eslint-disable standard/no-callback-literal */
import axios from 'axios'
export class DwebAudioView {
  fileName = ''
  filereader = new FileReader()
  audioCtx = null
  audioBufferSourceNode = null
  analyser = null
  musicBuffer = null
  gainNode = null
  canvas
  canvasCtx
  drawVisual = 0

  constructor () {
    this.audioCtx = new AudioContext()
    this.gainNode = this.audioCtx.createGain() // 控制音量
    console.log(this.audioCtx, 'this.audioCtx')
    this.audioBufferSourceNode = this.audioCtx.createBufferSource()
    this.analyser = this.audioCtx.createAnalyser()
  }

  /**
   * 获取文件buffer
   * @param file change事件e.target.files[0] 目前仅支持单文件
   * @param callback 回调函数(参数1：布尔值(判断加载完毕)，参数2：buffer数据)
   */
  getFileArrayBuffer (src, callback) {
    axios.get(src, {
      responseType: 'blob'
    }).then(res => {
      this.filereader.readAsArrayBuffer(res.data)
      this.filereader.onload = (event) => {
        this.audioCtx.decodeAudioData(event.target.result, (buffer) => {
          this.musicBuffer = buffer
          // callback(true, buffer)
          this.draw()
        })
      }
    })
  }

  /**
   * 开始播放
   * @param time 精度为0.1秒的数字 定时器用
   */
  startPlay (time) {
    this.gainNode.gain.value = 0
    this.audioBufferSourceNode = this.audioCtx.createBufferSource()
    this.audioBufferSourceNode.buffer = this.musicBuffer
    this.audioBufferSourceNode.connect(this.audioCtx.destination)
    this.audioBufferSourceNode.connect(this.analyser)
    this.audioBufferSourceNode.connect(this.gainNode)
    this.audioBufferSourceNode.start(0, time)
  }

  /**
   * 停止播放
   */
  stopPlay () {
    this.audioBufferSourceNode.stop()
  }

  /**
   *
   * @param canvas DOM节点于mounted获取 setup内无法获取DOM
   */
  getCanvasCtx (canvas) {
    this.canvas = canvas
    this.canvasCtx = canvas.getContext('2d')
  }

  /**
   * 绘图
   * @description 主要代码来源：https://developer.mozilla.org/zh-CN/docs/Web/API/AnalyserNode
   */
  draw = () => {
    const analyser = this.analyser
    const canvas = this.canvas
    const canvasCtx = this.canvasCtx
    analyser.fftSize = 256
    const bufferLength = analyser.fftSize
    const dataArray = new Uint8Array(bufferLength)
    this.drawVisual = requestAnimationFrame(this.draw)
    analyser.getByteTimeDomainData(dataArray)
    canvasCtx.fillStyle = 'rgb(255,255,255)'
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height)
    canvasCtx.lineWidth = 2
    canvasCtx.strokeStyle = 'red'

    canvasCtx.beginPath()
    var sliceWidth = canvas.width * 1.0 / bufferLength
    var x = 0
    for (var i = 0; i < bufferLength; i++) {
      var v = dataArray[i] / 128.0
      var y = v * canvas.height / 2
      if (i === 0) {
        canvasCtx.moveTo(x, y)
      } else {
        canvasCtx.lineTo(x, y)
      }
      x += sliceWidth
    }
    canvasCtx.lineTo(canvas.width, canvas.height / 2)
    canvasCtx.stroke()
  }
}
