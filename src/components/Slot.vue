<template>
  <div class="container">
    <div class="slot-container"></div>
    <img id="slot-bar" ref="slotBar" :src="barImage" />
    <img id="start" :src="startButton" alt="" @click="start" />
    <div class="number-container">
      <div v-for="i in 5" :key="`column${i}`" class="column">
        <transition name="slide-fade" mode="out-in" @enter="enter">
          <img
            :key="`column${i}-number${current[i - 1]}`"
            :ref="setNumberRef"
            :src="numbers[current[i - 1]]"
            class="number"
            alt=""
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import barImage from '@/assets/slot/slot-bar.png'
import startButton from '@/assets/slot/start.png'
import number0 from '@/assets/slot/0.png'
import number1 from '@/assets/slot/1.png'
import number2 from '@/assets/slot/2.png'
import number3 from '@/assets/slot/3.png'
import number4 from '@/assets/slot/4.png'
import number5 from '@/assets/slot/5.png'
import number6 from '@/assets/slot/6.png'
import number7 from '@/assets/slot/7.png'
import number8 from '@/assets/slot/8.png'
import number9 from '@/assets/slot/9.png'

export default defineComponent({
  name: 'Slot',
  data() {
    return {
      barImage,
      startButton,
      numbers: [
        number0,
        number1,
        number2,
        number3,
        number4,
        number5,
        number6,
        number7,
        number8,
        number9,
      ],
      current: [6, 6, 6, 6, 6],
      next: [7, 7, 7, 7, 7] as Array<number>,
      openedNumber: [1, 4, 6, 2, 3],
      rollCount: 0,
      rollInterval: undefined as number | undefined,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      numberRefs: [] as Array<any>,
    }
  },
  methods: {
    start() {
      this.$refs.slotBar.classList.value = 'active'
      this.numberRefs.forEach((item, index) => {
        item.classList.value = 'number active'
        item.style.animationDelay = `${index * 200}ms`
      })
      // 復原拉桿
      setTimeout(() => {
        this.$refs.slotBar.classList.value = ''
      }, 1000)

      setTimeout(() => {
        this.rollInterval = window.setInterval(() => {
          if (this.rollCount === 0) {
            this.numberRefs.forEach((item) => {
              item.classList.value = 'number'
              item.style.animationDelay = ''
            })
          }
          if (this.rollCount < 100) {
            this.spin(this.rollCount % 5)
            this.rollCount++
          } else {
            window.clearInterval(this.rollInterval)
            this.current = [...this.openedNumber]
            this.rollCount = 0
          }
        }, 50)
      }, 150)
    },
    spin(index: number) {
      const next = (this.next[index] + 1) % 10
      this.current[index] = this.next[index]
      this.next[index] = next
    },
    getRandom() {
      return Math.floor(Math.random() * 9)
    },
    setNumberRef(el: HTMLImageElement) {
      if (el) {
        this.numberRefs.push(el)
      }
    },
  },
})
</script>

<style lang="scss">
.container {
  max-width: 375px;
  max-height: 667px;
  height: 667px;
  position: relative;
}
.slot-container {
  width: 20.375rem;
  height: 30.313rem;
  background: no-repeat url('../assets/slot/slot-machine.png');
  background-size: contain;
}
#slot-bar {
  width: 1.469rem;
  position: absolute;
  top: 14.8rem;
  left: 18.46rem;
  &.active {
    animation: slot 0.8s ease 1 alternate;
    transform-origin: center 110%;
  }
}
#start {
  width: 9.063rem;
  position: absolute;
  top: 25.53rem;
  left: 4.8rem;
}
.number-container {
  display: flex;
  height: 2.8rem;
  position: absolute;
  top: 17.7rem;
  left: 2.3rem;
  .column {
    margin-right: 0.35rem;
    width: 2.5rem;
    .number {
      margin-top: 15px;
      width: 2.5rem;
      &.active {
        animation: spin 0.3s ease 1;
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all 100ms ease;
}
.slide-fade-leave-active {
  transition: all 100ms ease;
}
.slide-fade-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

@keyframes slot {
  0% {
    transform: rotateX(0);
  }

  100% {
    transform: rotateX(180deg);
  }
}

@keyframes spin {
  from {
    transform: 0;
  }
  to {
    transform: translateY(-10px);
  }
}
</style>
