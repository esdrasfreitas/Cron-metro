const miliseg = document.querySelector('.milissegundos')
const seg = document.querySelector('.segundos')
const min = document.querySelector('.minutos')

let miliNUm = 0
let segNum = 0
let minNum = 0
let INTERVALO

function milissegundos() {
  miliNUm++
  if (miliNUm < 10) {
      miliseg.innerHTML = '0' + miliNUm
  } else {
      miliseg.innerHTML = miliNUm
  }
  if (miliNUm == 10) { 
      miliNUm = 0
      segundos()
  }
}

function segundos() {
    segNum++
    if (segNum < 10) {
        seg.innerHTML = '0' + segNum
    } else {
        seg.innerHTML = segNum
    }
    if (segNum == 59) {
        segNum = 0
        minutos()
    }
}

function minutos() {
    minNum++
    if (minNum < 10) {
        min.innerHTML = '0' + minNum
    } else {
        min.innerHTML = minNum
    }
}

function iniciar() {
    clearInterval(INTERVALO)
    INTERVALO = setInterval(() => {milissegundos()},10)
}

function parar() {
    clearInterval(INTERVALO)
}

function resetar() {
    clearInterval(INTERVALO)
    miliNUm = 0 
    segNum = 0
    minNum = 0
    miliseg.innerHTML = '00'
    seg.innerHTML = '00'
    minNum.innerHTML = '00'
}

