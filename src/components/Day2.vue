<template>
  <div class="day2">
    <div class="center" @click="isActive = !isActive;" :class="{ active: isActive }">
      <div class="line-1"></div>
      <div class="line-2"></div>
      <div class="line-3"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Day2",
    data() {
      return {
        isActive: false,
        beenActive: false
      };
    }
  };

</script>
<style lang="scss" scoped>
  .day2 {
    width: 400px;
    height: 400px;
    background-color: #3faf82;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    position: relative;
  }

  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 65px;
    cursor: pointer;
    .line-1 {
      width: 95%;
      height: 8px;
      background-color: #fff;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
      border-radius: 3px;
      animation: line-1-rev 0.7s cubic-bezier(0.3, 1, 0.7, 1) forwards;
    }
    .line-2 {
      left: 0px;
      width: 95%;
      height: 8px;
      background-color: #fff;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
      border-radius: 3px;
      margin: 15px 0;
      animation: line-2-rev 0.7s cubic-bezier(0.3, 1, 0.7, 1) forwards;
    }
    .line-3 {
      left: 0px;
      width: 95%;
      height: 8px;
      background-color: #fff;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
      border-radius: 3px;
      animation: line-3-rev 0.7s cubic-bezier(0.3, 1, 0.7, 1) forwards;
    }
  }

  .no-animation {
    animation: none !important;
  }

  $cubic-bezier-in: cubic-bezier(0.3, 1, 0.7, 1);
  .active {
    .line-1 {
      animation: line-1 0.7s cubic-bezier(0.3, 1, 0.7, 1) forwards;
    }
    .line-2 {
      animation: line-2 0.7s cubic-bezier(0.3, 1, 0.7, 1) forwards;
    }
    .line-3 {
      animation: line-3 0.7s cubic-bezier(0.3, 1, 0.7, 1) forwards;
    }
  }

  @keyframes line-1 {
    0% {}
    50% {
      transform: translateY(23px) rotate(0);
    }
    100% {
      transform: translateY(23px) rotate(45deg);
    }
  }

  @keyframes line-2 {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  @keyframes line-3 {
    0% {}
    50% {
      transform: translateY(-23px) rotate(0);
    }
    100% {
      transform: translateY(-23px) rotate(135deg);
    }
  }

  @keyframes line-1-rev {
    0% {
      transform: translateY(23px) rotate(45deg);
    }
    50% {
      transform: translateY(23px) rotate(0);
    }
    100% {}
  }

  @keyframes line-2-rev {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes line-3-rev {
    0% {
      transform: translateY(-23px) rotate(135deg);
    }
    50% {
      transform: translateY(-23px) rotate(0);
    }
    100% {}
  }

</style>
