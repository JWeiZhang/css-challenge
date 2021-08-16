<template>
  <div class="day8">
    <div class="container">
      <div class="ball"></div>
      <div v-for="i in 8" :class="`blubb blubb-${i}`"></div>
      <div v-for="i in 10" :class="`sparkle sparkle-${i}`"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Day8',
}
</script>

<style lang="scss" scoped>
.day8 {
  width: 400px;
  height: 400px;
  background-color: #000;
  box-shadow: 1px 2px 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: contrast(25);
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.ball {
  position: relative;
  width: 90px;
  height: 90px;
  background-color: #fff;
  border-radius: 50%;
  filter: blur(15px);
}
.blubb {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  filter: blur(5px);
  @for $i from 1 through 8 {
    &.blubb-#{$i} {
      transform: rotate(random(300) + deg);
      &:after {
        position: absolute;
        display: block;
        content: '';
        width: 50px;
        height: 50px;
        background-color: #fff;
        border-radius: 50%;
        transform-origin: (40 - $i * 3) + px (40 - $i * 3) + px;
        animation: rotate (2.5 + $i / 5) + s ease-in-out ($i / 5) + s infinite;
        filter: blur(5px);
      }
    }
  }
}

.sparkle {
  position: absolute;
  top: 38px;
  left: 38px;
  background-color: #fff;
  filter: blur(3px);

  @for $i from 1 through 10 {
    &.sparkle-#{$i} {
      width: (7 + $i) + px;
      height: (7 + $i) + px;
      transform: rotate((random(300)) + deg);
      &:after {
        position: absolute;
        display: block;
        content: '';
        background-color: #fff;
        width: (7 + $i) + px;
        height: (7 + $i) + px;
        border-radius: 50%;
        transform-origin: (60-$i * 2) + px (60-$i * 2) + px;
        animation: rotate (3.5 + $i / 5) + s ease-in-out ($i / 5) + s infinite;
      }
    }
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  to {
    transform: rotate(360deg) translate3d(0, 0, 0);
  }
}
</style>
