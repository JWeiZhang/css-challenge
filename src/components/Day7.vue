<template>
  <div class="background center-container">
    <div :class="['notification-container', { 'show-menu': isMenuOpened }]">
      <div class="header center-container">
        <div class="center-container menu-icon" @click="isMenuOpened = !isMenuOpened">
          <div class="dash"></div>
          <div class="dash"></div>
        </div>
        <div class="title">Notifications</div>
        <font-awesome-icon class="search" icon="search" @click="isSearchOpened = !isSearchOpened" />
        <transition name="fade">
          <input v-show="isSearchOpened" class="search-input" type="text" />
        </transition>
      </div>
      <div class="notifications">
        <div class="line" />
        <div class="notification">
          <div class="circle"></div>
          <span class="time">9:24 AM</span>
          <p><b>John Walker</b> posted a photo on your wall.</p>
        </div>
        <div class="notification">
          <div class="circle"></div>
          <span class="time">8:19 AM</span>
          <p><b>Alice Parker</b> commented your last post.</p>
        </div>
        <div class="notification">
          <div class="circle"></div>
          <span class="time">Yesterday</span>
          <p><b>Luke Wayne</b> added you as friend.</p>
        </div>
      </div>
    </div>
    <div :class="['menu', { active: isMenuOpened }]">
      <ul>
        <li><font-awesome-icon class="menu-icon" icon="tachometer-alt" />Dashboard</li>
        <li><font-awesome-icon class="menu-icon" icon="user" />Profile</li>
        <li><font-awesome-icon class="menu-icon" icon="bell" />Notifications</li>
        <li><font-awesome-icon class="menu-icon" icon="comment" />Messages</li>
        <li><font-awesome-icon class="menu-icon" icon="cog" />Settings</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Day7',
  data() {
    return { isSearchOpened: false, isMenuOpened: false }
  },
})
</script>

<style lang="scss" scoped>
$blue: #5f98cd;
$blue-dark: #264057;
$blue-light: #b2daff;
.background {
  position: relative;
  background-color: $blue-dark;
  width: 400px;
  height: 400px;
  overflow: hidden;

  .notification-container {
    z-index: 2;
    width: 300px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease-in;
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    &.show-menu {
      transform: translateX(150px);
    }
    .header {
      height: 60px;
      background-color: $blue;
      position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .menu-icon {
        width: 30px;
        height: 20px;
        cursor: pointer;
        flex: 1;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .dash {
          width: 25px;
          height: 3px;
          text-align: left;
          background-color: $blue-light;
          transition: all 0.2s ease-in-out;
          position: relative;
          &:first-child {
            width: 20px;
            transform: translateX(-2.5px);
            &::before {
              position: absolute;
              content: '';
              width: 5px;
              height: 5px;
              top: -1px;
              right: -6px;
              border-radius: 100%;
              background-color: $blue-light;
              transition: all 0.2s ease-in-out;
            }
          }
        }

        &:hover {
          .dash {
            background-color: #fff;
            &:first-child {
              &::before {
                background-color: #fff;
              }
            }
          }
        }
      }
      .title {
        flex: 2;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
      }
      .search {
        flex: 1;
        cursor: pointer;
        color: $blue-light;
        transition: all 0.2s ease-in-out;
        &:hover {
          color: #fff;
        }
      }
      .search-input {
        position: absolute;
        width: 200px;
        left: 24px;
        padding: 8px;
        border: none;
        border-radius: 20px;
        &:focus {
          outline: none;
        }
      }
    }
    .notifications {
      flex: 1;
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      .line {
        position: absolute;
        width: 3px;
        height: 100%;
        background-color: #ebebeb;
        left: 27px;
      }
      .notification {
        position: relative;
        padding-left: 27px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: all 0.2s ease-in-out;
        &:hover {
          color: $blue;
          cursor: pointer;
        }
        .circle {
          position: absolute;
          top: 0.2rem;
          left: 22px;
          width: 10px;
          height: 10px;
          background-color: #fff;
          border: 2px solid $blue;
          border-radius: 100%;
          box-shadow: 0px 0px 0px 3px #fff;
        }
        p,
        .time {
          padding-left: 15px;
        }
        p {
          text-align: left;
          margin: 0;
        }
      }
    }
  }
  .menu {
    position: absolute;
    left: 50px;
    z-index: 0;
    width: 170px;
    border-radius: 3px;
    background-color: #43627d;
    color: #93b2cd;
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease-in;
    transform: translateX(20px);
    &.active {
      transform: translateX(0px);
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 20px auto;
      li {
        display: block;

        padding: 10px 10px;
        cursor: pointer;
        text-align: left;
        transition: all 0.2s ease-in-out;
        .menu-icon {
          margin-right: 10px;
        }

        &:hover {
          color: #fff;
          background-color: #385269;
        }
      }
    }
  }
}

.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transform: translateX(0px);
  transition: all 0.2s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
