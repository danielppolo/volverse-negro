import { gsap } from 'gsap'
import { EventEmitter } from 'events'

const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b

const calcWinsize = () => ({ width: window.innerWidth, height: window.innerHeight })

// Gets the mouse position
const getMousePos = (e) => {
  let posx = 0
  let posy = 0
  if (!e) e = window.event
  if (e.pageX || e.pageY) {
    posx = e.pageX
    posy = e.pageY
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft
    posy = e.clientY + body.scrollTop + document.documentElement.scrollTop
  }

  return { x: posx, y: posy }
}

const getPageYScroll = () => window.pageYOffset || document.documentElement.scrollTop


// Calculate the viewport size
let winsize = calcWinsize()
window.addEventListener('resize', () => {
  winsize = calcWinsize()
})

// Get the scroll Y position
let docYScroll = getPageYScroll()
window.addEventListener('scroll', () => {
  docYScroll = getPageYScroll()
})

// Track the mouse position
let mouse = { x: 0, y: 0 }
window.addEventListener('mousemove', (ev) => { mouse = getMousePos(ev) })

export default class Cursor extends EventEmitter {
  constructor(el) {
    super()
    this.DOM = { el }
    this.DOM.el.style.opacity = 0
    this.DOM.circleInner = this.DOM.el.querySelector('.cursor__inner')

    this.filterId = '#filter-1'
    this.DOM.feTurbulence = document.querySelector(`${this.filterId} > feTurbulence`)

    this.primitiveValues = { turbulence: 0 }

    this.createTimeline()

    this.bounds = this.DOM.el.getBoundingClientRect()

    this.renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.2 },
      ty: { previous: 0, current: 0, amt: 0.2 },
      radius: { previous: 60, current: 60, amt: 0.2 },
    }

    this.listen()

    this.onMouseMoveEv = () => {
      this.renderedStyles.tx.previous = this.renderedStyles.tx.current = mouse.x - this.bounds.width / 2
      this.renderedStyles.ty.previous = this.renderedStyles.ty.previous = mouse.y - this.bounds.height / 2 - docYScroll
      gsap.to(this.DOM.el, { duration: 0.9, ease: 'Power3.easeOut', opacity: 1 })
      requestAnimationFrame(() => this.render())
      window.removeEventListener('mousemove', this.onMouseMoveEv)
    }
    window.addEventListener('mousemove', this.onMouseMoveEv)
  }

  render() {
    this.renderedStyles.tx.current = mouse.x - this.bounds.width / 2
    this.renderedStyles.ty.current = mouse.y - this.bounds.height / 2 - docYScroll

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt)
    }

    this.DOM.el.style.transform = `translateX(${(this.renderedStyles.tx.previous)}px) translateY(${this.renderedStyles.ty.previous}px)`
    this.DOM.circleInner.setAttribute('r', this.renderedStyles.radius.previous)

    requestAnimationFrame(() => this.render())
  }

  createTimeline() {
    // init timeline
    this.tl = gsap.timeline({
      paused: true,
      onStart: () => {
        this.DOM.circleInner.style.filter = `url(${this.filterId}`
      },
      onUpdate: () => {
        this.DOM.feTurbulence.setAttribute('baseFrequency', this.primitiveValues.turbulence)
      },
      onComplete: () => {
        this.DOM.circleInner.style.filter = 'none'
      },
    })
      .to(this.primitiveValues, {
        duration: 0.4,
        startAt: { turbulence: 0.09 },
        turbulence: 0,
      })
  }

  enter() {
    console.log('click')
    this.renderedStyles.radius.current = 100
    this.tl.restart()
  }

  leave() {
    this.renderedStyles.radius.current = 60
    this.tl.progress(1).kill()
  }

  listen() {
    this.on('enter', () => this.enter())
    this.on('leave', () => this.leave())
  }
}
