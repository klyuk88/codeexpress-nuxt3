<template>
  <figure :class="{ full }" class="image-compare" @mousemove.prevent="onMouseMove" @click.prevent="onMouseMove($event, true)">
    <!-- d&d overlay -->
    <div :class="{ visible: showDropzone }" class="drop-zone">Drop 1 or 2 images here !</div>

    <div v-show="!hideAfter && showAfter" :style="{ width: posX + 'px' }" class="wrapper" @mousedown.prevent="onMouseDownImage">
      <!-- a-img -->
      <img :src="mutableAfter" :style="dimensions" alt="after">

      <!-- a-label -->
      <div v-show="afterLabel" class="after-name">
        {{ afterLabel }}
        <div v-show="afterSize" class="size">{{ afterSize }}</div>
      </div>
    </div>

    <!-- b-img -->
    <img :src="mutableBefore" :style="dimensions" alt="before" @mousedown.prevent="onMouseDownImage">

    <!-- handle -->
    <div v-if="!hideHandle" v-show="!hideAfter" :style="{ left: posX + 'px' }" class="handle" @mousedown.prevent="onMouseDownHandle">
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

    <!-- b-label -->
    <div v-show="beforeLabel" class="before-name">
      {{ beforeLabel }}
      <div v-show="beforeSize" class="size">{{ beforeSize }}</div>
    </div>
  </figure>
</template>

<script>
/* eslint-disable no-console */
export default {
  props: {
    before: {
      type: String,
      default: 'https://image-compare.netlify.com/assets/before.jpg',
    },
    after: {
      type: String,
      default: 'https://image-compare.netlify.com/assets/after.jpg',
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
      this.width = this.$el.clientWidth
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
    // onRightClick (event) {
    //   // console.log('switching images')
    //   event.preventDefault()
    //   this.switchImages()
    // },

    // helper
    debounce (func, wait, immediate) {
      let timeout

      return function () {
        const context = this
        const args = arguments
        const later = function () {
          timeout = null
          if (!immediate) func.apply(context, args)
        }

        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    },
    switchImages () {
      this.showAfter = !this.showAfter
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
    onDrop (event) {
      if (this.isSwitchable) {
        // console.log('onDrop', event)
        event.preventDefault()
        this.showDropzone = false
        // console.log('drop', event)
        const files = event.dataTransfer.files

        if (files.length === 1) {
          console.log('drop file :', files[0])
          const x = event.x
          const half = Math.round(window.outerWidth / 2)
          const leftSide = x <= half
          console.log('x ?', x)
          console.log('half ?', half)
          console.log('was on left side ?', leftSide)
          this.loadFile(files[0], leftSide)
        } else {
          console.log('drop files :', files)
          this.loadFile(files[0], true)
          this.loadFile(files[1], false)
        }
        // reset zoom
        this.mutableZoom = 1
        // reset after visibility
        this.showAfter = true
        this.onResize()
      }
    },
    getFileName (file) {
      return file.name
    },
    getFileSize (file) {
      return '(' + Math.round(file.size / 1024) + ' Ko)'
    },
    loadFile (file, leftSide) {
      var reader = new FileReader()

      reader.onload = (event) => {
        if (leftSide) {
          this.afterName = this.getFileName(file)
          this.afterSize = this.getFileSize(file)
          this.mutableAfter = event.target.result
        } else {
          this.beforeName = this.getFileName(file)
          this.beforeSize = this.getFileSize(file)
          this.mutableBefore = event.target.result
        }
      }
      reader.readAsDataURL(file)
    },
  },
}
</script>

<style scoped>
.image-compare {
  position: relative;
  overflow: hidden;
  margin: 0;
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