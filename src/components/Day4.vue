<template>
  <div class="day4">
      <div class="circle1">
          <div class="circle2">
              <div class="circle3"></div>
          </div>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
$bezier: cubic-bezier(0.21, 0.98, 0.6, 0.99);
.day4 {
  width: 400px;
  height: 400px;
  background: #e56262;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
  transform: scale(0);
  animation: circle1 2s $bezier alternate infinite;
}
.circle2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
  animation: circle2 2s $bezier alternate infinite;
}
.circle3 {
  width: 70px;
  height: 70px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
  animation: circle3 2s $bezier alternate infinite;
}

@keyframes circle1 {
  0%,
  10% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes circle2 {
  0%,
  40% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes circle3 {
  0%,
  70% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
