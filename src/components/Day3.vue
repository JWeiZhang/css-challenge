<template>
  <div class="day3">
    <div class="circle">
      <div class="sky"></div>
      <div class="sun"></div>
      <div class="side-left"></div>
      <div class="side-right"></div>
      <div class="shadow"></div>
      <div class="ground"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Day3"
};
</script>
<style lang="scss" scoped>
.day3 {
  width: 400px;
  height: 400px;
  background-color: #282c34;
  display: flex;
  align-items: center;
  justify-content: center;
}
$cubic-bezier: cubic-bezier(0.4, 0, 0.49, 1);
.circle {
  z-index: 1;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  clip-path: circle(100px at 100px 100px);
  position: relative;

  .sky {
    position: absolute;
    height: 70%;
    width: 100%;
    background-color: #7ddffc;
    z-index: 1;
    animation: sky-turn-dark 4s $cubic-bezier infinite;
  }
  .sun {
    z-index: 2;
    position: absolute;
    top: 5%;
    left: 40%;
    height: 15%;
    width: 15%;
    border-radius: 50%;
    background-color: #ffef00;
    transform-origin: 50% 400%;
    animation: sun-goes 4s $cubic-bezier infinite;
  }
  .ground {
    position: absolute;
    top: 70%;
    height: 30%;
    width: 100%;
    z-index: 1;
    background-color: #f0de75;
    animation: ground-turn-dark 4s $cubic-bezier infinite;
  }

  .side-left {
    z-index: 2;
    position: absolute;
    top: 35%;
    left: 20%;
    height: 35%;
    width: 60%;
    background: #f4f4f4;
    clip-path: polygon(0% 100%, 100% 100%, 50% 0%);
    animation: side-right 4s $cubic-bezier infinite reverse;
  }
  .side-right {
    z-index: 2;
    position: absolute;
    top: 35%;
    left: 50%;
    height: 35%;
    width: 30%;
    background: #dddada;
    clip-path: polygon(30% 100%, 100% 100%, 0% 0%);
    animation: side-right 4s $cubic-bezier infinite;
  }
  .shadow {
    z-index: 2;
    position: absolute;
    top: 70%;
    width: 100%;
    height: 20%;
    background-color: rgba(0, 0, 0, 0.2);
    clip-path: polygon(20% 0%, 80% 0%, 100% 50%);
    animation: shadow-move 4s $cubic-bezier infinite;
  }
}
@keyframes sky-turn-dark {
  0% {
    background-color: #282c34;
  }
  50% {
    background-color: #7ddffc;
  }
  100% {
    background-color: #282c34;
  }
}
@keyframes ground-turn-dark {
  0% {
    background-color: #282c34;
  }
  50% {
    background-color: #f0de75;
  }
  100% {
    background-color: #282c34;
  }
}

@keyframes sun-goes {
  0% {
    background-color: #282c34;
    transform: rotate(-90deg);
  }
  50% {
    background-color: #ffef00;
    transform: rotate(0deg);
  }
  100% {
    background-color: #282c34;
    transform: rotate(90deg);
  }
}

@keyframes side-right {
  0% {
    background-color: #282c34;
  }
  30% {
    background: #dddada;
  }
  70% {
    background: #f4f4f4;
  }
  100% {
    background-color: #282c34;
  }
}

@keyframes shadow-move {
  0% {
    background-color: #282c34;
  }
  30% {
    background-color: rgba(0, 0, 0, 0.2);
  }
  50% {
    clip-path: polygon(20% 0%, 80% 0%, 60% 30%);
  }
  70% {
    background-color: rgba(0, 0, 0, 0.2);
  }
  100% {
    background-color: #282c34;
    clip-path: polygon(20% 0%, 80% 0%, 0% 50%);
  }
}
</style>
