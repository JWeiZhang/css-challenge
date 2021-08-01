<template>
  <div class="container">
    <div class="slot-container"></div>
    <img id="slot-bar" class="active" :src="barImage" />
    <img id="start" :src="startButton" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import barImage from '@/assets/slot/slot-bar.png'
import startButton from '@/assets/slot/start.png'

export default defineComponent({
  name: 'Slot',
  data() {
    return {
      barImage,
      startButton,
    }
  },
  methods: {
    start() {},
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
  right: 3.5rem;
  &.active {
    animation: slot 1s ease 1 alternate;
    transform-origin: center 110%;
  }
}
#start {
  width: 9.063rem;
  position: absolute;
  top: 25.53rem;
  left: 4.8rem;
}

@keyframes slot {
  0% {
    transform: rotateX(0);
  }

  100% {
    transform: rotateX(180deg);
  }
}
</style>
