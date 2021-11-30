let context
let WIDTH
let HEIGHT
let dataArray
let analyser
let bufferLength
let barWidth = 0
let barHeight
export default function initAudio (options) {
  console.log(options)
  const { audio, canvas } = options
  // 控制音量
  // audio.volume=0.1
  // part1: 画布
  console.log(audio, canvas, 'udio, canvas')
  context = canvas.getContext('2d')
  WIDTH = canvas.width
  HEIGHT = canvas.height
  // part2: 音频

  // part3: 分析器
  var AudCtx = new AudioContext() // 音频内容
  var src = AudCtx.createMediaElementSource(audio)
  analyser = AudCtx.createAnalyser()

  src.connect(analyser)
  analyser.connect(AudCtx.destination)
  analyser.fftSize = 32768 // 快速傅里叶变换, 必须为2的N次方。32768

  bufferLength = analyser.frequencyBinCount // = fftSize * 0.5

  // part4: 变量
  barWidth = (WIDTH / bufferLength) - 1 // 间隔1px

  dataArray = new Uint8Array(bufferLength) // 8位无符号定长数组
  renderFrame()
}

function renderFrame () {
  requestAnimationFrame(renderFrame) // 方法renderFrame托管到定时器，无限循环调度，频率<16.6ms/次
  context.fillStyle = '#ccc' // 黑色背景
  context.fillRect(0, 0, WIDTH, HEIGHT) // 画布拓展全屏,动态调整

  analyser.getByteFrequencyData(dataArray) // 获取当前时刻的音频数据

  // part6: 绘画声压条
  var x = 0
  for (var i = 0; i < parseInt(bufferLength / 2); i++) {
    var data = dataArray[i] // int,0~255

    var percentV = data / 255 // 纵向比例
    var percentH = i / bufferLength // 横向比例
    console.log(percentV, percentH, '===>>')
    barHeight = HEIGHT * percentV
    // gbk,0~255
    var r = 255 * percentV // 值越大越红
    var g = 255 * percentH // 越靠右越绿
    var b = 50
    context.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
    context.fillRect(x, HEIGHT - barHeight, barWidth, barHeight)

    x += barWidth + 10 // 间隔1px
  }
}
