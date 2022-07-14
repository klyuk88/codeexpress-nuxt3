<template>
  <figure class="image-compare" @mousemove.prevent="onMouseMove" @click.prevent="onMouseMove($event, true)">
    <div :style="{ width: posX + 'px' }" class="wrapper" @mousedown.prevent="onMouseDownImage">
      <!-- a-img -->
      <img :src="after" :style="dimensions" alt="after">
    </div>

    <!-- b-img -->
    <img :src="before" :style="dimensions" alt="before" @mousedown.prevent="onMouseDownImage">

    <!-- handle -->
    <div :style="{ left: posX + 'px' }" class="handle" @mousedown.prevent="onMouseDownHandle">
      <div id="handle">
        <div class="decor-round"></div>
        <span class="handle-icon left">
          <slot name="icon-left" />
        </span>
        <span class="handle-icon right">
          <slot name="icon-right" />
        </span>
      </div>
    </div>


  </figure>
</template>

<script>
/* eslint-disable no-console */
export default {
  props: {
    before: {
      type: String,
      default: 'https://www.sunhome.ru/i/wallpapers/163/alberta-banf-kanada.1920x1200.jpg',
    },
    after: {
      type: String,
      default: 'https://www.itl.cat/pngfile/big/186-1861341_widescreen-road-scenery-hd.jpg',
    },
    full: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: Object,
      required: false,
      default () {
        return {
          left: 0,
          right: 0,
        }
      },
    },
    containerPadding: {
      type: Number,
      default: 100,
    },
    hideAfter: {
      type: Boolean,
      default: false,
      required: false,
    },
    zoom: {
      type: Object,
      required: false,
      default () {
        return {
          min: 0.5,
          max: 2,
        }
      },
    },
    isZoomable: {
      type: Boolean,
      default: false,
      required: false,
    },
    isDraggable: {
      type: Boolean,
      default: false,
      required: false,
    },
    isSwitchable: {
      type: Boolean,
      default: false,
      required: false,
    },
    hideHandle: {
      type: Boolean,
      default: false,
      required: false,
    },
    reset: {
      type: Boolean,
      default: false,
      required: false,
    },
    labels: {
      type: Object,
      required: false,
      default () {
        return {
          after: '',
          before: '',
        }
      },
    },
  },
  data () {
    return {
      width: null,
      height: null,
      pageX: null,
      pageY: null,
      posX: null,
      isDraggingHandle: false,
      isDraggingImage: false,
      allowNextFrame: true,
      diffX: 0,
      diffY: 0,
      shiftX: 0,
      shiftY: 0,
      mutableZoom: 1,
      mutableBefore: this.before,
      mutableAfter: this.after,
      showDropzone: false,
      showAfter: true,
      beforeName: '',
      beforeSize: '',
      afterName: '',
      afterSize: '',
    }
  },
  computed: {
    afterLabel () {
      return this.afterName || this.labels.after
    },
    beforeLabel () {
      return this.beforeName || this.labels.before
    },
    isDragging () {
      return this.isDraggingImage || this.isDraggingHandle
    },
    dimensions () {
      const zoom = parseFloat(this.mutableZoom.toFixed(2))

      return {
        width: `${this.width}px`,
        height: this.full ? `${this.height}px` : 'auto',
        transform: `scale(${zoom}) translate(${this.shiftX}px, ${this.shiftY}px)`,
      }
    },
    paddingTotal () {
      return this.padding.left + this.padding.right
    },
  },
  watch: {
    reset () {
      this.shiftX = 0
      this.shiftY = 0
      this.setInitialPosX()
    },
    paddingTotal () {
      this.setInitialPosX()
    },
  },
  created () {
    // prepare debounced versions
    // var onWheelDebounced = this.debounce(this.onWheel, 100)
    window.addEventListener('mouseup', this.onMouseUp)
    window.addEventListener('resize', this.onResize)
    // window.addEventListener('contextmenu', this.onRightClick)
    window.addEventListener('dragenter', this.onDragEnter)
    // window.addEventListener('dragleave', this.onDragLeave)
    window.addEventListener('dragover', this.onDragOver)
    window.addEventListener('drop', this.onDrop)
  },
  mounted () {
    this.$el.addEventListener('wheel', this.onWheel)
    this.onResize()
  },
  beforeDestroy () {
    window.removeEventListener('mouseup', this.onMouseUp)
    window.removeEventListener('resize', this.onResize)
    this.$el.removeEventListener('wheel', this.onWheel)
    // window.removeEventListener('contextmenu', this.onRightClick)
    window.removeEventListener('dragenter', this.onDragEnter)
    // window.removeEventListener('dragleave', this.onDragLeave)
    window.removeEventListener('dragover', this.onDragOver)
    window.removeEventListener('drop', this.onDrop)
  },
  methods: {
    onResize () {
      this.width = this.$el.clientWidth || (document.documentElement.clientWidth - this.containerPadding)
      this.height = this.$el.clientHeight
      this.setInitialPosX()
    },

    // mouse
    onMouseDownHandle () {
      this.$emit('movement')
      this.isDraggingHandle = true
    },
    onMouseDownImage () {
      if (this.isDraggable) {
        this.isDraggingImage = true
        this.$emit('movement')
      }
    },
    onMouseUp (event) {
      // console.log('in mouse up', event)
      event.preventDefault()
      this.isDraggingHandle = false
      this.isDraggingImage = false
      this.pageX = null
      this.pageY = null
      if (event.button === 1) {
        this.onWheelClick()
      }
    },
    onMouseMove (event, isDragging = false) {
      this.$emit('movement')

      if (event && event.type === 'click' && this.isDraggable) return

      if (event && this.allowNextFrame && (this.isDragging || isDragging)) {
        this.allowNextFrame = false

        let pageX = event.pageX
        let pageY = event.pageY

        if (event.targetTouches) {
          pageX = event.targetTouches[0].pageX
          pageY = event.targetTouches[0].pageY
        } else if (event.originalEvent && event.originalEvent.targetTouches) {
          pageX = event.originalEvent.targetTouches[0].pageX
          pageY = event.originalEvent.targetTouches[0].pageY
        }

        this.diffX = this.pageX ? pageX - this.pageX : 0
        this.diffY = this.pageY ? pageY - this.pageY : 0

        this.pageX = pageX
        this.pageY = pageY

        window.requestAnimationFrame(this.updatePos)
      }
    },

    // position
    updatePos () {
      if (!this.isDraggable || (this.isDraggable && this.isDraggingHandle)) {
        let posX = this.pageX - this.$el.getBoundingClientRect().left
        const pr = this.padding.right
        const pl = this.padding.left

        if (posX < pl) {
          posX = pl
        } else if (posX > this.width - pr) {
          posX = this.width - pr
        }

        this.posX = posX
      }

      if (this.isDraggingImage) {
        this.shiftX += this.diffX / this.mutableZoom
        this.shiftY += this.diffY / this.mutableZoom
      }

      this.allowNextFrame = true
    },
    setInitialPosX () {
      if (this.paddingTotal >= this.width) {
        return console.error('Sum of paddings is wider then parent element!')
      }

      this.posX = (this.width + this.padding.left - this.padding.right) / 2
    },

    // wheel
    onWheel (event) {
      if (this.isZoomable) {
        // console.log('should update zoom with event', event)
        // console.log('update zoom with delta', event.deltaY)

        this.mutableZoom += -event.deltaY / 1000

        this.$nextTick(() => {
          if (this.mutableZoom >= this.zoom.max) {
            this.mutableZoom = this.zoom.max
          } else if (this.mutableZoom <= this.zoom.min) {
            this.mutableZoom = this.zoom.min
          }
        })
      }
    },

    // click
    onWheelClick () {
      // will flick images quickly
      let i = 0
      for (i = 0; i < 10; i++) {
        setTimeout(this.switchImages, i * 100)
      }

      // reset after visibility
      setTimeout(() => (this.showAfter = true), i * 100)
    },

    // drag & drop
    onDragEnter () {
      if (this.isSwitchable) {
        console.log('onDragEnter')
        // event.preventDefault()
        this.showDropzone = true
      }
    },
    onDragLeave (event) {
      if (this.isSwitchable) {
        console.log('onDragLeave')
        event.preventDefault()
        this.showDropzone = false
      }
    },
    onDragOver (event) {
      if (this.isSwitchable) {
        // console.log('onDragOver')
        event.preventDefault()
        // this.showDropzone = true
      }
    },

  },
}
</script>

<style lang="scss" scoped>
#handle {
    position: relative;
    left: 50%;
    top: 50%;
    width: 4rem;
    height: 4rem;
    background: #161616;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    .decor-round {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      background: var(--accent);
    }
}

#handle:before {
  content: "";
  width: 0.7rem;
  height: 0.7rem;
  background-image: url('../../assets/images/handle-left.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) translateX(50%);
}
#handle:after {
  content: "";
  width: 0.7rem;
  height: 0.7rem;
  background-image: url('../../assets/images/handle-right.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.image-compare {
  .handle {
    background: #161616;
  }
}
.image-compare {
  position: relative;
  overflow: hidden;
  margin: 0;
  width: 100%;
}

.after-name,
.before-name {
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none;
  background-color: white;
}

.after-name .size,
.before-name .size {
  font-family: monospace;
  font-size: 1.2rem;
  margin-top: 2px;
  color: gray;
}

.after-name {
  z-index: 5;
  left: 0;
  border-top-right-radius: 0.75rem;
}

.before-name {
  right: 0;
  border-top-left-radius: 0.75rem;
}

.before-name .size {
  text-align: right;
}

img {
  display: block;
  max-width: none;
}

.drop-zone {
  font-size: 50px;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  color: white;
  background-color: rgba(black, 0.5);
}

.drop-zone.visible {
  pointer-events: all;
  opacity: 1;
}

.image-compare.full {
  overflow: hidden;
  flex: 1;
  width: 100%;
  height: 100%;
}

.image-compare.full img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.wrapper,
.handle {
  position: absolute;
  top: 0;
  bottom: 0;
}

.wrapper {
  z-index: 1;
  left: 0;
  overflow: hidden;
  width: 100%;
  transform: translateZ(0);
  will-change: width;
}

.handle {
  z-index: 2;
  width: 2px;
  cursor: ew-resize;
  transform: translateX(-50%) translateZ(0);
  color: #fff;
  background-color: currentColor;
  will-change: left;
}

.handle-icon {
  font-size: 2rem;
  line-height: normal;
  position: absolute;
  top: 50%;
  left: 50%;
  color: currentColor;
}

.handle-icon.left {
  padding-right: 10px;
  transform: translate(-100%, -50%);
}

.handle-icon.right {
  padding-left: 10px;
  transform: translate(0, -50%);
}

</style>
