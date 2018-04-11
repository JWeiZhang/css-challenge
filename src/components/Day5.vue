<template>
  <div class="day5">
    <div class="card">
      <div class="header">
        <span class="title big">
          Weekly Report
        </span>
        <span class="date small">
          01. Feb - 07. Feb
        </span>
        <span class="type small">
          Revenue
        </span>
        <span class="value big">
          $ 3621.79
        </span>
      </div>
      <div class="parameter">
        <span class="red">Views</span>
        <span class="blue">Purchases</span>
      </div>
      <div class="statistic">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
        <div class="red">
          <svg>
            <polyline points="10,50 50,45 90,20 135,55 170,40 210,50 243,30"></polyline>
          </svg>
          <div class="points">
            <div class="point point1">
              <div class="tooltop">100</div>
            </div>
            <div class="point point2">
              <div class="tooltop">110</div>
            </div>
            <div class="point point3">
              <div class="tooltop">150</div>
            </div>
            <div class="point point4">
              <div class="tooltop">90</div>
            </div>
            <div class="point point5">
              <div class="tooltop">115</div>
            </div>
            <div class="point point6">
              <div class="tooltop">110</div>
            </div>
            <div class="point point7">
              <div class="tooltop">140</div>
            </div>
          </div>
        </div>
        <div class="blue">
          <svg>
            <polyline points="10,70 50,90 90,60 135,72 170,86 210,60 243,80"></polyline>
          </svg>
          <div class="points">
            <div class="point point1">
              <div class="tooltop">10</div>
            </div>
            <div class="point point2">
              <div class="tooltop">5</div>
            </div>
            <div class="point point3">
              <div class="tooltop">14</div>
            </div>
            <div class="point point4">
              <div class="tooltop">11</div>
            </div>
            <div class="point point5">
              <div class="tooltop">5</div>
            </div>
            <div class="point point6">
              <div class="tooltop">16</div>
            </div>
            <div class="point point7">
              <div class="tooltop">9</div>
            </div>
          </div>
        </div>
      </div>
      <div class="days">
        <span class="day">Mon</span>
        <span class="day">Tue</span>
        <span class="day">Wed</span>
        <span class="day">Thu</span>
        <span class="day">Fri</span>
        <span class="day">Sat</span>
        <span class="day">Sun</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {};

</script>
<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:600,400);

  $red: #fa7373;
  $blue: #7ba2ff;

  .day5 {
    width: 400px;
    height: 400px;
    background: #42a7a1;
    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Open Sans", Helvetica, sans-serif;
  }

  .card {
    height: 50%;
    width: 70%;
    background: #fff;
    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.3);
  }

  .header {
    background: #f1ba64;
    color: #fff;
    height: 25%;
    position: relative;
    .title {
      top: 5px;
      left: 10px;
    }
    .date {
      top: 25px;
      left: 10px;
    }
    .type {
      right: 10px;
      top: 5px;
    }
    .value {
      right: 10px;
      top: 25px;
    }
  }

  .parameter {
    text-align: right;
    font-size: 14px;
    padding-top: 5px;
    padding-right: 10px;
    position: relative;
    span {
      position: relative;
      padding: 0 8px 0 10px;
    }
    span:before {
      position: absolute;
      content: "";
      height: 3px;
      width: 11px;
      top: 10px;
      left: -3px;
    }
    .red:before {
      background: $red;
    }
    .blue:before {
      background: $blue;
    }
  }

  .statistic {
    background: #fff;
    height: 50%;
    width: 90%;
    margin: 0 auto;
    position: relative;
    .line1 {
      position: absolute;
      height: 2px;
      width: 100%;
      background: #f2f2f2;
      top: 10%;
    }
    .line2 {
      @extend .line1;
      top: 50%;
    }
    .line3 {
      @extend .line1;
      top: 90%;
    }
    svg {
      position: absolute;
      left: 0;
      polyline {
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
      }
    }
    .points {
      .point {
        width: 6px;
        height: 6px;
        background: $red;
        position: absolute;
        border-radius: 50%;
        cursor: pointer;
        z-index: 10;
        &:hover .tooltop {
          visibility: visible;
          opacity: 1;
          transform: translate(0, 0);
        }
      }
    }
    .red {
      polyline {
        stroke: $red;
      }
      .point1 {
        left: 7px;
        top: 47px;
      }
      .point2 {
        left: 47px;
        top: 42px;
      }
      .point3 {
        left: 87px;
        top: 17px;
      }
      .point4 {
        left: 132px;
        top: 52px;
      }
      .point5 {
        left: 167px;
        top: 37px;
      }
      .point6 {
        left: 207px;
        top: 47px;
      }
      .point7 {
        left: 240px;
        top: 27px;
      }
      .tooltop {
        background: $red;
      }
    }

    .blue {
      .point {
        background: $blue;
      }
      polyline {
        stroke: $blue;
      }
      .point1 {
        left: 7px;
        top: 67px;
      }
      .point2 {
        left: 47px;
        top: 87px;
      }
      .point3 {
        left: 87px;
        top: 57px;
      }
      .point4 {
        left: 132px;
        top: 69px;
      }
      .point5 {
        left: 167px;
        top: 83px;
      }
      .point6 {
        left: 207px;
        top: 57px;
      }
      .point7 {
        left: 240px;
        top: 77px;
      }
      .tooltop {
        background: $blue;
        &:before {
          background: $blue;
        }
      }
    }

    .tooltop {
      visibility: hidden;
      position: absolute;
      height: 20px;
      width: 30px;
      top: -30px;
      left: -12px;
      border-radius: 3px;
      text-align: center;
      font-size: 11px;
      font-weight: 600;
      line-height: 20px;
      color: #fff;
      opacity: 0;
      transform: translate(0, 10px);
      transition: transform 0.4s ease-out 0s, opacity 0.4s ease-out 0s;
      &:before {
        position: absolute;
        content: '';
        height: 6px;
        width: 6px;
        background: $red;
        left: 50%;
        top: 85%;
        transform: translate(-50%) rotate(45deg);
      }
    }
  }

  .days {
    display: flex;
    justify-content: space-around;
  }

  .day {
    text-transform: uppercase;
    font-size: 12px; //   margin-right: 10px;
  }

  .big {
    position: absolute;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
  }

  .small {
    position: absolute;
    font-weight: 400;
    font-size: 12px;
  }

</style>
