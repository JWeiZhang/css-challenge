<template>
  <div class="day1">
    <div class="center">
      <div class="number">
        <div class="one-one"></div>
        <div class="one-two"></div>
        <div class="zero-one"></div>
        <div class="zero-two"></div>
      </div>
      <div class="text">
        <span class="big">DAYS</span>
        <span class="small">CSS CHALLENGE</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Day1",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.day1 {
  width: 400px;
  height: 400px;
  background-color: #444ca5;
  background: linear-gradient(bottom, #444ca5 0%, #4ec6ca 100%);
  position: relative;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.3);
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.number {
  position: relative;
  width: 200px;
  height: 100px;
}
.one-one {
  position: absolute;
  z-index: 1;
  left: -5px;
  top: 0px;
  height: 40px;
  width: 17px;
  background-color: #fff;
  transform: rotate(45deg);
  border-radius: 5px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.one-two {
  position: absolute;
  z-index: 3;
  left: 10px;
  height: 100px;
  width: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.zero-one,
.zero-two {
  z-index: 2;
  position: absolute;
  left: 20px;
  height: 60px;
  width: 60px;
  border: 20px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.zero-two {
  z-index: 1;
  left: 100px;
}

.big {
  font-size: 4em;
  text-transform: uppercase;
  font-weight: 700;
}
.small {
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 300;
  line-height: 30px;
}
</style>
